# NHS Jobs

To search job vacancies in the [official NHS website](https://www.jobs.nhs.uk/xi/search_vacancy/) can sometimes be some kind of a hassle. This small project proposes a different user interface so it is easier to search NHS postings, while waiting for the new official website due to be online by the end of October 2022.

This project is above all a means to run through some of the abilities the Nhost stack is offering to developers.

The official NHS website does not expose a standard API. As a result, it is not possible to make direct search calls to fetch a JSON payload and render it in the frontend. In this project, the official HTML website is entirely scraped once with [Cheerio](https://github.com/cheeriojs/cheerio) into the database. Then, three times a day, vacancies from the past two days are scraped and updated into the database.

## Schedule a recurring serverless function call

In this project, we connect a [Hasura cron trigger](https://hasura.io/docs/latest/scheduled-triggers/create-cron-trigger/) with a Nhost [Serverless function](https://docs.nhost.io/platform/serverless-functions).

To do so, we need:

- to define a [`fetch` serverless function](https://github.com/plmercereau/nhs-jobs/blob/main/functions/fetch.ts)
- to configure the cron job trigger with the right path: [`{{NHOST_BACKEND_URL}}/v1/functions/fetch`](https://github.com/plmercereau/nhs-jobs/blob/main/nhost/metadata/cron_triggers.yaml#L2)
- To secure the function call in sending the [Nhost webhook secret](https://docs.nhost.io/platform/database/event-triggers#security) in the [cron job's headers](https://github.com/plmercereau/nhs-jobs/blob/main/nhost/metadata/cron_triggers.yaml#L12)

## Split a long backend processing into several smaller serverless function calls

The scrapping of the initial HTML website takes time and causes a function timeout. To prevent this, the [`fetch` function](https://github.com/plmercereau/nhs-jobs/blob/main/functions/fetch.ts) scraps only a single result page from the original website, then [inserts a new row in the `fetch_request` table](https://github.com/plmercereau/nhs-jobs/blob/main/functions/fetch.ts#L106) with the number of the next page to scrap.

We then define a [Hasura event trigger](https://hasura.io/docs/latest/event-triggers/index/) on the [`fetch_request` table](https://github.com/plmercereau/nhs-jobs/blob/main/nhost/metadata/databases/default/tables/public_fetch_requests.yaml#L18) that calls the `fetch` function again for the next page, and so on, until no result is available anymore.

## Make GraphQL calls in a serverless function

A common pattern in Nhost functions is to connect to the database to get some context about the current processing. As we [secured the function call with the Nhost webhook secret](https://github.com/plmercereau/nhs-jobs/blob/main/functions/fetch.ts#L18), it is then safe to connect through GraphQL with the `x-hasura-admin-secret` attached as a header. This secret is available in Nhost functions as the [NHOST_ADMIN_SECRET](https://github.com/plmercereau/nhs-jobs/blob/main/functions/fetch.ts#L30) environment variable.

## Enable autocompletion in VS Code for your Hasura schema

VS Code supports GraphQL through this nice [extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql). To activate if for your schema, you need to create a `graphql.config.yml` file in the root directory and declare a schema that points to the Nhost local project (when using the CLI) or the Hasura endpoint of your cloud project. [In this repository](https://github.com/plmercereau/nhs-jobs/blob/main/graphql.config.yml#L2), we are using the CLI to develop locally.

If no headers are defined, the backend will assume the schema introspection is made from a `public` user. You need to set the `x-hasura-admin-secret` header to get access to the full introspection (defaults to `nhost-admin-secret` when using the Nhost CLI).

## Generate `graphql-request` GraphQL operations

[graphql-request](https://github.com/prisma-labs/graphql-request) is a simple and effective GraphQL client that can make GraphQL call much simpler in serverless functions.
This repository is configured to generate code for `graphql-request` operations using the [GraphQL Code Generator](https://www.graphql-code-generator.com/):

- Follow the [graphql-request GraphQL Codegen plugin installation instructions](https://www.graphql-code-generator.com/plugins/typescript/typescript-graphql-request)
- Configure the [generator in `graphql.config.yml`](https://github.com/plmercereau/nhs-jobs/blob/main/graphql.config.yml#L22)
- Define GraphQL operations in the `functions` directory, for instance an [upsert mutation](https://github.com/plmercereau/nhs-jobs/blob/main/functions/_upsertVacancies.graphql). GraphQL files are prefixed with `_` so we are sure there won't be any attempt to deploy them as a function endpoint.
- See the [generated sdk](https://github.com/plmercereau/nhs-jobs/blob/main/functions/_sdk.ts)
- Use the [operation in a function](https://github.com/plmercereau/nhs-jobs/blob/main/functions/fetch.ts#L100)

## Generate `vue-apollo` GraphQL operations

In a similar way, we can [generate GraphQL operations for Vue Apollo](https://www.graphql-code-generator.com/plugins/typescript/typescript-vue-apollo). It works fine with `@nhost/vue` and `@nhost/apollo`:

- Configure the [generator in `graphql.config.yml`](https://github.com/plmercereau/nhs-jobs/blob/main/graphql.config.yml#L6). Note that we added a `x-hasura-role` header set to `user` to the schema will be generated given the permissions of the `users` role.
- Define GraphQL operations in the `src/graphql` directory, for instance [`vacanciesTable`](https://github.com/plmercereau/nhs-jobs/blob/main/src/graphql/vacanciesTable.graphql)
- See the [generated composable](https://github.com/plmercereau/nhs-jobs/blob/main/src/graphql/generated.ts#L425)
- Use the `useVacanciesTableQuery` [in a Vue composant](https://github.com/plmercereau/nhs-jobs/blob/main/src/pages/Home.vue#L166)

## Use the Nhost JS SDK with Quasar, Vite, and Apollo

To use the Nhost JS SDK in a client-side rendered Quasar application is quite straight forward.

As Quasar is based on Vue, we are using the standard [@nhost/vue library](https://docs.nhost.io/reference/vue), in addition to [@nhost/apollo](https://docs.nhost.io/reference/vue/apollo).

Please have a look at the [the Vue main file](https://github.com/plmercereau/nhs-jobs/blob/main/src/main.ts) and the [Vite configuration file](https://github.com/plmercereau/nhs-jobs/blob/main/vite.config.ts).

## Configure a GraphQL query to render a paginated and searchable table

Quite easy in using Hasura's [limit, offset, where and order_by clauses](https://github.com/plmercereau/nhs-jobs/blob/main/src/graphql/vacanciesTable.graphql#L7) as GraphQL variables in a Vue Apollo composable - [see source](https://github.com/plmercereau/nhs-jobs/blob/main/src/pages/Home.vue#L140).

## Bonus: dark mode with Quasar

[Small composable](https://github.com/plmercereau/nhs-jobs/blob/main/src/composables/dark-light-mode.ts) to start the application in dark/light mode according to user's preferences, and to persist its change to `localStorage`.

It is also a bit tricky to set dark/light mode to [sticky headers in Quasar's `QTable` component](https://quasar.dev/vue-components/table#sticky-header-column) as it is based on CSS' `position: sticky`. [Here's how sass can be configured to make it work](https://github.com/plmercereau/nhs-jobs/blob/main/src/pages/Home.vue#L241).

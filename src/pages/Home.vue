<template>
    <q-page padding ref="refPage">
        <q-table
            title="Vacancies"
            :rows="result?.vacancies"
            :columns="columns"
            row-key="id"
            v-model:pagination="pagination"
            :rows-per-page-options="[20, 50, 100]"
            :loading="loading"
            :filter="filter"
            @request="onRequest"
            binary-state-sort
            :style="'height: ' + height + 'px'"
            :class="'header-table-' + mode"
            @row-click="onRowClick">
            <template v-slot:top>
                <div class="q-pa-md" style="width: 100%">
                    <div class="row q-gutter-md">
                        <div class="col">
                            <q-toggle v-model="closedVacancies" label="Include closed vacancies" />
                        </div>
                    </div>
                    <div class="row q-gutter-md">
                        <div class="col">
                            <q-select
                                label="Staff group"
                                v-model="staffGroup"
                                :options="staffGroupOptions"
                                multiple
                                clearable
                                use-chips />
                        </div>
                        <div class="col">
                            <q-select
                                label="Category"
                                v-model="category"
                                :options="categoryOptions"
                                multiple
                                clearable
                                use-chips
                                use-input
                                hide-dropdown-icon
                                new-value-mode="add-unique"
                                @filter="filterCategoryOptions" />
                        </div>
                    </div>
                </div>
                <!-- <q-input
                        borderless
                        dense
                        debounce="300"
                        color="primary"
                        v-model="filter">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input> -->
            </template>
            <template v-slot:top-right>

            </template>
        </q-table>
    </q-page>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar'
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import { useDarkLightMode } from '../composables/dark-light-mode'
import {
    useVacanciesTableQuery,
    useVacanciesOptionsQuery,
    VacanciesTableQuery
} from '../graphql/generated'

const onRowClick = (
    _: Event,
    row: VacanciesTableQuery['vacancies'][number],
    __: number
) => {
    window.open(
        'https://www.jobs.nhs.uk/xi/direct_apply?action=redirect;vac_ref=' + row.id
    )
}

// Options
const { result: options, onResult: onOptionsResult } =
    useVacanciesOptionsQuery()
onOptionsResult(({ data }) => {
    if (data) {
        data.categories.map(item => item.category)
    }
})

const staffGroupOptions = computed(() =>
    options.value?.staffGroups.map(item => item.staffGroup)
)
const categoryOptions = ref<string[]>([])

const filterCategoryOptions = (
    val: string,
    update: (fn: () => void) => void
) => {
    update(() => {
        const input = val.toLowerCase()
        categoryOptions.value =
            options.value?.categories
                .map(item => item.category)
                .filter(category => category.toLocaleLowerCase().indexOf(input) > -1) ||
            []
    })
}

// Inputs
const staffGroup = ref<string[] | null>(null)
const category = ref<string[] | null>(null)
const closedVacancies = ref(false)

// TODO from url parameters
const pagination = ref({
    sortBy: 'closingDate',
    descending: false,
    page: 1,
    rowsPerPage: 20,
    rowsNumber: 0
})

const filter = ref('')

function onRequest(props: any) {
    pagination.value.page = props.pagination.page
    pagination.value.rowsPerPage = props.pagination.rowsPerPage
    pagination.value.sortBy = props.pagination.sortBy
    pagination.value.descending = props.pagination.descending
}

// Data
const variables = computed(() => {
    const filters: Record<string, unknown>[] = []
    if (category.value?.length) {
        filters.push({
            _or: category.value.map(cat => ({ category: { _ilike: `%${cat}%` } }))
        })
    }
    if (staffGroup.value?.length) {
        filters.push({ staffGroup: { _in: staffGroup.value } })
    }
    if (!closedVacancies.value) {
        filters.push({ closingDate: { _gte: new Date().toISOString().split('T')[0] } })
    }
    const where = {
        _and: filters
    }
    return {
        limit: pagination.value.rowsPerPage,
        offset: (pagination.value.page - 1) * pagination.value.rowsPerPage,
        where,
        orderBy: {
            [pagination.value.sortBy]: pagination.value.descending ? 'desc' : 'asc'
        }
    }
})

const { loading, result, onResult } = useVacanciesTableQuery(variables)
onResult(({ data }) => {
    if (data) {
        pagination.value.rowsNumber = data.vacanciesAggregate.aggregate?.count ?? 0
    }
})

const columns: QTableColumn[] = [
    {
        name: 'title',
        label: 'Title',
        align: 'left',
        field: 'title',
        sortable: true
    },
    {
        name: 'staffGroup',
        label: 'Staff Group',
        align: 'left',
        field: 'staffGroup',
        sortable: true
    },
    {
        name: 'category',
        label: 'Category',
        align: 'left',
        field: 'category',
        sortable: true
    },
    {
        name: 'agency',
        label: 'Agency',
        align: 'left',
        field: 'agency',
        sortable: true
    },
    {
        name: 'jobType',
        label: 'Job Type',
        align: 'left',
        field: 'jobType',
        sortable: true
    },
    {
        name: 'salary',
        label: 'Salary',
        align: 'left',
        field: 'salary',
        sortable: true
    },
    {
        name: 'posted',
        label: 'Posted',
        align: 'left',
        field: 'posted',
        sortable: true,
        format: (val?: string) => val?.split('-').reverse().join('/') ?? ''
    },
    {
        name: 'closingDate',
        label: 'Closing Date',
        align: 'left',
        field: 'closingDate',
        sortable: true,
        format: (val?: string) => val?.split('-').reverse().join('/') ?? ''
    }
]

// Styling
const refPage = ref<any>(null)
const { mode } = useDarkLightMode()
const { height } = useElementSize(refPage)
</script>

<style lang="sass">
.header-table
  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

.header-table-light
  @extend .header-table
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #ffffff

.header-table-dark
  @extend .header-table
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: $dark
</style>
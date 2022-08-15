export type ChartType = 'bar' | 'pie'

export type ChartConfig = {
    type: ChartType
    name?: string
    key: string
    value: string
}

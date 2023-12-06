import { Column } from '@/components/ui/tables'

export const columnsDecks: Column[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    sortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    sortable: true,
  },
  {
    key: 'created',
    title: 'Created by',
    sortable: true,
  },
  {
    key: 'options',
    title: '',
  },
]

export const optionsForDeckItemsPerPage = ['5', '10', '20', '30', '50', '100']

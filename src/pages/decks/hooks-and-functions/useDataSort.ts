import { useMemo } from 'react'

import { GetEntitiesResponse } from '@/service/common/types.ts'
import { DeckType } from '@/service/decks/decks.types.ts'
import { useCombineAppSelector } from '@/utils'

type DataSort = {
  isSuccess: boolean
  data: (GetEntitiesResponse<DeckType> & { maxCardsCount: number }) | undefined
}
export const useDataSort = (props: DataSort) => {
  const { isSuccess, data } = props

  // const [searchParams] = useSearchParams()
  // const urlQueryOrderByValue = searchParams.get('orderBy')
  // const initialSort = useMemo(() => {
  //   if (!urlQueryOrderByValue) return undefined
  //
  //   const [key, direction] = urlQueryOrderByValue.split('-')
  //
  //   if (!key || !direction) return undefined
  //
  //   return {
  //     key,
  //     direction,
  //   } as Sort
  // }, [urlQueryOrderByValue])
  // const [sort, setSort] = useState<Sort>(initialSort || null)

  const { sortTable: sort } = useCombineAppSelector() ///!!!!!!!!!!

  const sortString: string = `${sort?.key}-${sort?.direction}`

  const sortedData = useMemo(() => {
    if (isSuccess && data?.items) {
      if (sort?.key) {
        return [...data.items].sort((a, b) => {
          const [key, direction] = sortString.split('-')
          const isAsc = direction === 'asc'

          const aValue = a[key as keyof typeof a]
          const bValue = b[key as keyof typeof b]

          const result = aValue > bValue ? 1 : -1

          return isAsc ? result : -result
        })
      } else {
        return data.items
      }
    } else {
      return []
    }
  }, [sortString, data])

  // return { sortedData, sort, setSort }
  return { sortedData, sort }
}
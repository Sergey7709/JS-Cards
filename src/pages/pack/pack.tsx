import { Navigate } from 'react-router-dom'

import { useGetDataForPack } from './hooks-and-function'
import s from './pack.module.scss'

import { Loader } from '@/components/ui/loader'
import { Pagination } from '@/components/ui/pagination'
import { DeckItemsPerPage } from '@/pages/decks/deckItemsPerPage'
import { PackPanel } from '@/pages/pack/packPanel'
import { PackSearch } from '@/pages/pack/packSearch'
import { TablePack } from '@/pages/pack/tablePack'
import { useUtilityForSearchParamsEdit } from '@/utils'

export const Pack = () => {
  const {
    isLoadingAuth,
    isLoadingDeck,
    isFetchingDeck,
    isLoadingCards,
    isFetchingCards,
    itemsPerPage,
    totalItems,
    totalPages,
    paginationValueInURL,
    dataDeck,
    dataCards,
    sort,
    mePackCards,
  } = useGetDataForPack()

  const utilityForSearchParamsEdit = useUtilityForSearchParamsEdit()

  const handlerPagination = (page: number) => {
    utilityForSearchParamsEdit({
      param: 'currentPage',
      valueForNewParam: page.toString() ?? '',
    })
  }

  const paginationReady = totalPages || 1

  if (dataDeck === null) {
    return <Navigate to="/deck" />
  }

  return (
    <>
      {(isLoadingDeck || isFetchingDeck || isLoadingCards || isFetchingCards || isLoadingAuth) && (
        <Loader />
      )}
      {dataDeck && dataCards && sort && (
        <div className={s.containerPack}>
          <div className={s.pack}>
            <PackPanel dataDeck={dataDeck} mePackCards={mePackCards} />
            <PackSearch />
            <TablePack dataCards={dataCards} sort={sort} />
            <div className={s.paginationWrapperPack}>
              {paginationReady && (
                <Pagination
                  currentPage={paginationValueInURL}
                  pageSize={itemsPerPage ?? 0}
                  totalCount={totalItems ?? 0}
                  onPageChange={page => handlerPagination(page)}
                />
              )}
              <DeckItemsPerPage />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

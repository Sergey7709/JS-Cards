import { Sort, Table } from '@/components/ui/tables'
import { columnsPack } from '@/pages/pack/constantsPack.ts'
import s from '@/pages/pack/pack.module.scss'
import { RenderNoData } from '@/pages/pack/renderNoData'
import { SortedPackData } from '@/pages/pack/sortedPackData'
import { GetEntitiesResponse } from '@/service/common/types.ts'
import { PackCards } from '@/service/decks/decks.types.ts'
import { useUtilityForSearchParamsEdit } from '@/utils'

type TablePackProps = {
  dataCards: GetEntitiesResponse<PackCards>
  sort: Sort
}
export const TablePack = ({ dataCards, sort }: TablePackProps) => {
  const utilityForSearchParamsEdit = useUtilityForSearchParamsEdit()

  const handlerSortValuePack = (sort: Sort) => {
    utilityForSearchParamsEdit({
      param: 'orderBy',
      valueForNewParam:
        sort?.key && sort?.direction !== null ? `${sort?.key}-${sort?.direction}` : [],
    })
  }

  return (
    <Table.Root>
      <Table.Header columns={columnsPack} sort={sort} onSort={handlerSortValuePack}>
        <Table.Head>
          <Table.Row className={s.packHeaderStyle}>
            <Table.HeadCellList
              className={s.packHeadCellListStyle}
              columns={columnsPack}
              sort={sort}
              onSort={handlerSortValuePack}
            />
          </Table.Row>
        </Table.Head>
      </Table.Header>
      <Table.Body>
        {dataCards?.items.length ? (
          <SortedPackData />
        ) : (
          dataCards?.items !== undefined && <RenderNoData />
        )}
      </Table.Body>
    </Table.Root>
  )
}

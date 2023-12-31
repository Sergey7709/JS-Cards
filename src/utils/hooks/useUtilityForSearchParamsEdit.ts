import { useSearchParams } from 'react-router-dom'

type UseUtilityForSearchParamsEdit = {
  param: string
  param2?: string
  valueForNewParam: string | string[]
  valueForNewParam2?: string | string[]
}

export const useUtilityForSearchParamsEdit = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (props: UseUtilityForSearchParamsEdit) => {
    const { param, param2 = '', valueForNewParam, valueForNewParam2 = '' } = props

    const {
      [param]: _,
      [param2]: __,
      currentPage,
      ...restOffSearchObject
    } = Object.fromEntries(searchParams)

    // console.log('restOffSearchObject', restOffSearchObject)
    const urlParams = param2
      ? {
          ...restOffSearchObject,
          [param]: valueForNewParam,
          [param2]: valueForNewParam2,
        }
      : {
          ...restOffSearchObject,
          [param]: param === 'currentPage' && valueForNewParam === '1' ? [] : valueForNewParam,
        }

    // console.log('urlParams', urlParams)

    setSearchParams(urlParams)
  }
}

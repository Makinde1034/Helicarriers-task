import { useAppSelector, useAppDispatch } from '../hooks'
import { setAllTransactions, filterTransactions,search } from '.'
import { transaction } from '../../interfaces'


// hook to easily interact with test state
export const useTransactionState = () => {
  const dispatch = useAppDispatch()

  const setTransactions = ((payload:transaction[])=>dispatch(setAllTransactions(payload)))

  const filter = ((payload:any)=>dispatch(filterTransactions(payload)))
  const _search = ((payload:string)=>dispatch(search(payload)))

  const transactions = useAppSelector((state) => state.transactions.transactions)
  

  return { setTransactions, transactions,filter ,_search}
}

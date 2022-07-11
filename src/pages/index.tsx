import { useEffect } from 'react'
import { useQuery} from '@apollo/client'
import { useTransactionState } from '../state/transactionState/hooks'
import { getAllTransactions } from '../graphQl/Queries'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Transactions from '../components/Transactions'

const IndexPage = () => {
  // loads all transaction from server
  const { loading, data } = useQuery(getAllTransactions)
  const { setTransactions } = useTransactionState()

  useEffect(() => {
    // sets all transactions in redux state

    const _transactions = data?.getAllTransactions
    setTransactions(_transactions)
  }, [data])

  return loading ? (
    <div className='h-full w-full pt-20 flex justify-center items-center'>Fetching transactions...</div>
  ) : (
    <div className="flex flex-col justify-center w-full max-w-screen-2xl mx-auto pt-8 pb-10">
      <Search />
      <Filter />
      <Transactions />
    </div>
  )
}

export default IndexPage

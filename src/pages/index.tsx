import { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useTransactionState } from '../state/transactionState/hooks'
import { getAllTransactions } from '../graphQl/Queries'
import { useSpring, animated } from 'react-spring'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Transactions from '../components/Transactions'

const IndexPage = () => {
  // loads all transaction from server
  const { loading, error, data } = useQuery(getAllTransactions)
  const { setTransactions } = useTransactionState()

  useEffect(() => {
    // sets all transactions in redux state

    const _transactions = data?.getAllTransactions
    setTransactions(_transactions)
  }, [data])

  return loading ? (
    <div className='h-full w-full flex justify-center items-center'>loading...</div>
  ) : (
    <div className="flex flex-col justify-center w-full max-w-screen-2xl mx-auto pt-5 pb-10">
      <Search />
      <Filter />
      <Transactions />
    </div>
  )
}

export default IndexPage

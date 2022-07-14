import { useEffect } from 'react'
import { useQuery} from '@apollo/client'
import Head from 'next/head'
import { useTransactionState } from '../state/transactionState/hooks'
import { getAllTransactions } from '../graphQl/Queries'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Transactions from '../components/Transactions'
import Preloader from '../components/Preloader'

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
    <div className='h-screen w-full   flex justify-center items-center'>
      <Preloader />
    </div>
  ) : (
    <div className="flex flex-col justify-center w-full max-w-screen-2xl mx-auto pt-8 pb-12">
      <Head>
        <title>Transaction history</title>
        <meta property="og:title" content="List of transactions" key="title" />
      </Head>
      <Search />
      <Filter />
      <Transactions />
    </div>
  )
}

export default IndexPage

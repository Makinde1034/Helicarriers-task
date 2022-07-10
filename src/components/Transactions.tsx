import React from 'react'
import Transaction from './Transaction'
import { useTransactionState } from '../state/transactionState/hooks'

function Transactions() {
  const { transactions } = useTransactionState()

  console.log(transactions)

  return transactions?.length !== 0 ? (
    <div className="px-5 w-full">
      <p className="text-sm mb-5 mt-5 font-lexand font-semibold">July 10, 2022</p>
      {/* <tr className="bg-greyish w-full flex cursor-pointer justify-between border border-gray ">
        <td align="left" className="py-4 px-6    w-1/4  ">
          <p className='font-bold font-lexand text-sm '>ID</p>
        </td>
        <td align="left" className="py-4 px-6    w-1/4  ">
          <p className='font-bold font-lexand text-sm'>BANK</p>
        </td>
        <td align="left" className="py-4 px-6    w-1/4  ">
          <p className='font-bold font-lexand text-sm'>STATUS</p>
        </td>
        <td align="left" className="py-4 px-6    w-1/4  ">
          <p className='font-semibold font-lexand text-sm'>TYPE</p>
        </td>
        <td align="left" className="py-4 px-6    w-1/4  ">
          <p className='font-semibold font-lexand text-sm'>AMOUNT</p>
        </td>
        <td align="left" className="py-4 px-6    w-1/4  ">
          <p className='font-semibold font-lexand text-sm'>DATE</p>
        </td>
        
      </tr> */}
      <table className="mb-2 w-full inline-block   overflow-scroll lg:overflow-hidden">
        {transactions?.map((item, index) => (
          <div key={index}>
            {item.date === '2022-07-10' && (
              <Transaction
                title={item.title}
                amount={item.amount}
                status={item.status}
                type={item.type}
                date={item.date}
                id={item.id}
              />
            )}
          </div>
        ))}
      </table>
      <p className="text-sm mb-5  mt-5 font-lexand font-semibold">July 11, 2022</p>
      <table className="mb-2 w-full inline-block    overflow-scroll lg:overflow-hidden">
        {transactions?.map((item, index) => (
          <div key={index}>
            {item.date === '2022-07-11' && (
              <Transaction
                title={item.title}
                amount={item.amount}
                status={item.status}
                type={item.type}
                date={item.date}
                id={item.id}
              />
            )}
          </div>
        ))}
      </table>
      <p className="text-sm mb-5  mt-5 font-lexand font-semibold">July 12, 2022</p>
      <table className="mb-2 w-full inline-block shadow-sm   overflow-scroll lg:overflow-hidden">
        {transactions?.map((item, index) => (
          <div key={index}>
            {item.date === '2022-07-12' && (
              <Transaction
                title={item.title}
                amount={item.amount}
                status={item.status}
                type={item.type}
                date={item.date}
                id={item.id}
              />
            )}
          </div>
        ))}
      </table>
      <p className="text-sm mb-5  mt-5 font-lexand font-semibold">July 13, 2022</p>
      <table className="mb-2 w-full inline-block shadow-sm   overflow-scroll lg:overflow-hidden">
        {transactions?.map((item, index) => (
          <div key={index}>
            {item.date === '2022-07-13' && (
              <Transaction
                title={item.title}
                amount={item.amount}
                status={item.status}
                type={item.type}
                date={item.date}
                id={item.id}
              />
            )}
          </div>
        ))}
      </table>
      <p className="text-sm mb-5  mt-5 font-lexand font-semibold">July 14, 2022</p>
      <table className="mb-2 w-full inline-block shadow-sm  overflow-scroll lg:overflow-hidden">
        {transactions?.map((item, index) => (
          <div key={index}>
            {item.date === '2022-07-14' && (
              <Transaction
                title={item.title}
                amount={item.amount}
                status={item.status}
                type={item.type}
                date={item.date}
                id={item.id}
              />
            )}
          </div>
        ))}
      </table>
      <p className="text-sm mb-5  mt-5 font-semibold">July 15, 2022</p>
      <table className="mb-2 w-full inline-block shadow-sm  overflow-scroll lg:overflow-hidden">
        {transactions?.map((item, index) => (
          <div key={index}>
            {item.date === '2022-07-15' && (
              <Transaction
                title={item.title}
                amount={item.amount}
                status={item.status}
                type={item.type}
                date={item.date}
                id={item.id}
              />
            )}
          </div>
        ))}
      </table>
    </div>
  ) : (
    <div className="flex font-lexand text-sm font-semibold justify-center pt-20">No transaction found &#128533;</div>
  )
}

export default Transactions

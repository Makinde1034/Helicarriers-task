import React, { useEffect, useState } from 'react'
import { useTransactionState } from '../state/transactionState/hooks'

function Filter() {
  const [activeFilter, setActiveFilter] = useState(1)
  const { filter } = useTransactionState()

  const handleFilter = (by: string, p: string, activeFilter: number) => {
    filter({ filterBy: by, param: p })
    setActiveFilter(activeFilter)
  }

  return (
    <div className="flex justify-center px-5 ">
      <div className="flex w-full mb-5 lg:w-1/2 lg:1/2 mt-5 overflow-scroll sm:overflow-scroll lg:overflow-scroll xl:overflow-hidden justify-between">
        <div
          onClick={() => handleFilter(null, null, 1)}
          className={`${
            activeFilter === 1 ? 'bg-blueish text-white' : 'bg-greyish'
          } font-semibold  cursor-pointer py-2 px-5 mr-2 xl:mr-0  rounded-lg font-lexand text-sm`}
        >
          All
        </div>

        <div
          onClick={() => handleFilter('type', 'credit', 2)}
          className={`${
            activeFilter === 2 ? 'bg-blueish text-white' : 'bg-greyish'
          } font-semibold  cursor-pointer py-2 px-5 mr-2 xl:mr-0  rounded-lg font-lexand text-sm`}
        >
          Credit
        </div>

        <div
          onClick={() => handleFilter('type', 'debit', 3)}
          className={`${
            activeFilter === 3 ? 'bg-blueish text-white' : 'bg-greyish'
          } font-semibold  cursor-pointer py-2 px-5 mr-2 xl:mr-0  rounded-lg font-lexand text-sm`}
        >
          Debit
        </div>

        <div
          onClick={() => handleFilter('status', 'pending', 4)}
          className={`${
            activeFilter === 4 ? 'bg-blueish text-white' : 'bg-greyish'
          } font-semibold  cursor-pointer py-2 px-5 mr-2 xl:mr-0 rounded-lg font-lexand text-sm`}
        >
          Pending
        </div>

        <div
          onClick={() => handleFilter('status', 'failed', 5)}
          className={`${
            activeFilter === 5 ? 'bg-blueish text-white' : 'bg-greyish'
          } font-semibold  cursor-pointer py-2 px-5  mr-2 xl:mr-0 rounded-lg font-lexand text-sm`}
        >
          Failed
        </div>
        
        <div
          onClick={() => handleFilter('status', 'successful', 6)}
          className={`${
            activeFilter === 6 ? 'bg-blueish text-white' : 'bg-greyish'
          } font-semibold  cursor-pointer py-2 px-5  rounded-lg font-lexand text-sm`}
        >
          Successful
        </div>
      </div>
    </div>
  )
}

export default Filter

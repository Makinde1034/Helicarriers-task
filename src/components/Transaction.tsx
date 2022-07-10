import React from 'react'

interface transaction {
  title: string
  amount: number
  status: string
  type: string
  date: string
  id: number
}

function Transaction({ title, amount, status, type, date, id }: transaction) {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dateFormatter = (dateStr: string) => {
    const _date = new Date(dateStr)
    const month = _date.getMonth()
    const day = _date.getDate()
    const year = _date.getFullYear()

    return `${months[month]} ${day}, ${year}`
  }

  return (
    <tr className="hover:bg-blue-lightest w-full flex justify-between border border-gray ">
      <td align="left" className="py-4 px-6    w-1/4  border-grey-light">
        <p className=" font-semibold">{id}</p>
      </td>

      <td align="left" className="py-4    w-1/4  border-grey-light">
        <p className="font-lexand font-semibold text-sm">{title}</p>
      </td>

      <td align="left" className="py-4 px-6  w-1/4  border-grey-light">
        <p
          className={`text-left ${status === 'failed' && 'text-redish'} ${
            status === 'successful' && 'text-greenish'
          }  ${status === 'pending' && 'text-yellowish'} font-semibold font-lexand text-sm`}
        >
          {status}
        </p>
      </td>

      <td align="left" className="py-4 px-6  border-grey-light w-1/4  whitespace-nowrap">
        <p className='font-lexand text-sm font-semibold'>{type}</p>
      </td>

      <td
        align="left"
        className={` ${
          type === 'credit' && 'text-greenish font-semibold'
        } py-4 px-6 hidden md:block  border-grey-light w-1/4  whitespace-nowrap`}
      >
        <p className='font-lexand text-sm'>
          {type === 'credit' ? '+' : '-'}₦{amount}
        </p>
      </td>

      <td align="left" className="py-4 px-6 hidden md:block  border-grey-light w-1/4  whitespace-nowrap">
        <p className='font-lexand text-sm'>{dateFormatter(date)}</p>
      </td>
    </tr>
  )
}

export default Transaction

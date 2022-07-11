import React, { useState, useEffect } from 'react'
import { useTransactionState } from '../state/transactionState/hooks'

function Search() {
  const [input, setInput] = useState('')

  const { _search, filter } = useTransactionState()

  useEffect(() => {
    if (input.length === 0) {
      filter({ filterBy: null, param: null })
      return
    }
    _search(input)
  }, [input])

  const handleInput = (e: any) => {
    setInput(e.target.value)
  }

  return (
    <div className="w-full">
      <nav className="w-full flex justify-center px-5">
        <input
          onChange={(e) => handleInput(e)}
          className="bg-greyish border-0 hover:shadow-md ease-linear duration-300  rounded-lg outline-none w-full lg:w-1/2 h-14  pl-5 font-lexand text-sm"
          placeholder="eg pending, successful, debit, GTBank"
          type="text"
          value={input}
        />
      </nav>
    </div>
  )
}

export default Search

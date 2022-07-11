import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { transaction } from '../../interfaces'

interface initialStateProps {
  transactions: transaction[]
  transactionsF: transaction[]
}

const initialState: initialStateProps = {
  transactions: [],
  transactionsF: [],
}

const transactionsSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setAllTransactions: (state, action: PayloadAction<transaction[]>) => {
      state.transactions = action.payload
      state.transactionsF = action.payload
    },

    filterTransactions: (state, action: PayloadAction<{ filterBy: string; param: string }>) => {
      if (action.payload.filterBy === null && action.payload.param === null) {
        state.transactions = state.transactionsF
        return
      }
      const filteredState = state.transactionsF.filter((i) => {
        return i[action.payload.filterBy] === action.payload.param
      })
      state.transactions = filteredState
    },

    search: (state, action: PayloadAction<string>) => {
      const searchItem = () => {
        const searchResult = []
        for (let i = 0; i < state.transactionsF?.length; i++) {
          for (const x in state.transactionsF[i]) {
            if (String(state.transactionsF[i][x]).toLowerCase().includes(action.payload.toLowerCase())) {
              searchResult.push(state.transactionsF[i])
            } 
          }
        }
        return searchResult
      }
      state.transactions = searchItem()
    },
  },
})

export default transactionsSlice.reducer

export const { setAllTransactions, filterTransactions, search } = transactionsSlice.actions

import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactionState'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


export const store = configureStore({
  reducer: {
    transactions : transactionsReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector


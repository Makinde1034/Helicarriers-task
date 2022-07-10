import { gql } from '@apollo/client'

export const getAllTransactions = gql`
  query {
    getAllTransactions {
      title
      id
      status
      type
      amount
      date
    }
  }
`

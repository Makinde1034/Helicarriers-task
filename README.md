# Helicarriers Task

> Single page web application that displays a list of transactions. 

## Technologies used

- Reactjs(Next)
- Graphql
- Apollo
- Redux
- Tailwindcss

## Features

- Display transactions in blocks grouped by date.
- Filter transactions by type (Debit or Credit).
- Filter transactions by status (Pending, Failed and Successful).
- Search transaction by status, title, type. 

---
**Project setup**

- *yarn install* - Install project dependencies.
- *yarn dev* - Compiles and auto reload for development.
- *yarn lint* - Linting.

---

## Pages

- Index.tsx

## Components
- Transactions.tsx
- Transaction.tsx
- Filter.tsx
- Search.tsx

## Decisios and functionalities implementation

### Data Fetching. 

All transactions were fetched from a graphql server. Query function to to the graphql server can be seen in the Graphql folder. 

```
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
```



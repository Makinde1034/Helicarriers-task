# Helicarriers Task

> Single page web application that displays a list of transactions. 

## Technologies used

- Reactjs(Next)
- TypeScript
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

## Decisions and functionalities implementation

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

### Setting data in state

State management accross components with Redux. The code block below shows transaction data being set in the state immediately data is fetched. `data` is passed as dependency to useEffect hook.


```
  const { loading, error, data } = useQuery(getAllTransactions)
  const { setTransactions } = useTransactionState()
  useEffect(() => {
    // sets all transactions in redux state
    
    const _transactions = data?.getAllTransactions
    setTransactions(_transactions)
  }, [data])
```

### Filtering transactions by status, type and title

Filtering transactions works by calling a reducer in the transaction state. The `filterTransactions` reducer recieves an object as argument. This object `{ filterBy: string; param: string }` contains fields `filterBy` (status, type or title) and `param` (string to filter with). The FilterTransactions functions has a constant time complexity.


```
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
```

### Searching transcations by status, type and title

Searching transactions works by calling a reducer method. The `search` reducer recieves a string (text to search with ) as  argument. The search reducers loops through all transactions and stores all transactions that matches the argument, the results are then stored in a global state. Time complexity for is o(n). 

```
search: (state, action: PayloadAction<string>) => {
  const searchItem = () => {
    const searchResult = []
    for (let i = 0; i < state.transactionsF?.length; i++) {
      for (const x in state.transactionsF[i]) {
        console.log(String(state.transactionsF[i][x]))
        if (String(state.transactionsF[i][x]).toLowerCase().includes(action.payload.toLowerCase())) {
          searchResult.push(state.transactionsF[i])
        } 
      }
    }
    return searchResult
}
state.transactions = searchItem()
```


## Usability and Improvement

My experience with the usability of this app is very smooth as all buttons can be easily accessed. Using a green color for successful transactions and red for failed makes reading through transactions easy.  Grouping the transactions in different blocks with date improves user experience. 

## Improvevements
- Adding pagination or infinite scrolling. (Case where transaction history is large.)
- Adding ability to filter by transaction amount. 
- Having a component that displays total debit and credit transactions for a particular day. 


### Screenshots

import { DefaultContainer } from '../../components/Home/DefaultContainer'
import { Header } from '../../components/Home/Header'
import { Body } from '../../components/Home/Body'
import { useCallback, useEffect, useState } from 'react'
import { getData } from 'service/gets/getData'
import { Transaction } from 'global/interfaces/Transaction'

export function HomeTemplate() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleGetTransactions = useCallback(async () => {
    const response = await getData()
    setTransactions(response)
  }, [])

  useEffect(() => {
    handleGetTransactions()
  }, [handleGetTransactions])

  return (
    <DefaultContainer>
      <Header handleGetTransactions={handleGetTransactions} />
      <Body
        transactions={transactions}
        handleGetTransactions={handleGetTransactions}
      />
    </DefaultContainer>
  )
}

import { Transaction } from 'global/interfaces/Transaction'
import { useCallback, useEffect, useState } from 'react'
import { getData } from 'service/gets/getData'

export function useHome() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleGetTransactions = useCallback(async () => {
    const response = await getData()
    setTransactions(response)
  }, [])

  useEffect(() => {
    handleGetTransactions()
  }, [handleGetTransactions])

  return { transactions, handleGetTransactions }
}

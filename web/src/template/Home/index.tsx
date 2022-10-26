import { DefaultContainer } from '../../components/Home/DefaultContainer'
import { Header } from '../../components/Home/Header'
import { Body } from '../../components/Home/Body'
import { useHome } from 'hooks/useHome'

export function HomeTemplate() {
  const { transactions, handleGetTransactions } = useHome()

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

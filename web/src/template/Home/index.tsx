import { DefaultContainer } from '../../components/Home/DefaultContainer'
import { Header } from '../../components/Home/Header'
import { Body } from '../../components/Home/Body'

export function HomeTemplate() {
  return (
    <DefaultContainer>
      <Header />
      <Body />
    </DefaultContainer>
  )
}

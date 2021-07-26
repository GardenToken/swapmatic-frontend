// External libs

// Assets

// Componentes
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import BestPrice from '@/components/organisms/BestPrice'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header />
      <Hero />
      <BestPrice />
    </Styled.Container>
  )
}

export default Home


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styled from 'styled-components'

const App = () => {

  return (
    <Container>
      <Hero />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
`

export default App

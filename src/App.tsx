import ListContact from './containers/Contact'
import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ListContact />
      </Container>
    </>
  )
}

export default App

import { Provider } from 'react-redux'
import ListContact from './containers/Contact'
import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ListContact />
      </Container>
    </Provider>
  )
}

export default App

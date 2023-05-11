import { useSelector } from 'react-redux'

import * as S from './styles'
import Contact from '../../components/Contacts'
import { RootReducer } from '../../Store'

export type Props = {
  active?: boolean
}

const ListContact = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.Container>
      <S.Header>
        <S.Search type="text" placeholder="🔍  Pesquisar" active />
        <S.Theme>
          <i className="fa-solid fa-moon"></i>Trocar Tema
        </S.Theme>
      </S.Header>
      <S.Main>
        <ul>
          {itens.map((c) => (
            <li key={''}>
              <Contact
                name={c.name}
                phone={c.phone}
                email={c.email}
                birthday={c.birthday}
                status={c.status}
                id={c.id}
              ></Contact>
            </li>
          ))}
        </ul>
      </S.Main>
    </S.Container>
  )
}

export default ListContact

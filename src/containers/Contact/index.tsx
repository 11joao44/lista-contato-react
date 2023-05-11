import Contact from '../../components/Contacts'
import * as S from './styles'

const contatos = [
  {
    name: 'Yasmin Melo',
    phone: 65981126587,
    email: 'google@gmail.com',
    birthday: '03/072000',
    status: 'online'
  },
  {
    name: 'Anna Clara',
    phone: 65981126587,
    email: 'google@gmail.com',
    birthday: '03/072000',
    status: 'online'
  },
  {
    name: 'Julia Snow',
    phone: 65981126587,
    email: 'youtube@gmail.com',
    birthday: '03/072000',
    status: 'online'
  },
  {
    name: 'Lucas Freitas',
    phone: 65981126587,
    email: 'youtube@gmail.com',
    birthday: '03/072000',
    status: 'online'
  },
  {
    name: 'Thiago Perozo',
    phone: 65981126587,
    email: 'whats@gmail.com',
    birthday: '03/072000',
    status: 'online'
  }
]

export type Props = {
  active?: boolean
}

const ListContact = () => (
  <S.Container>
    <S.Header>
      <S.Search type="text" placeholder="🔍  Pesquisar" active />
      <S.Theme>
        <i className="fa-solid fa-moon"></i>Trocar Tema
      </S.Theme>
    </S.Header>
    <S.Main>
      <ul>
        {contatos.map((c) => (
          <li key={''}>
            <Contact
              name={c.name}
              phone={c.phone}
              email={c.email}
              birthday={c.birthday}
              status={c.status}
            ></Contact>
          </li>
        ))}
      </ul>
    </S.Main>
  </S.Container>
)

export default ListContact

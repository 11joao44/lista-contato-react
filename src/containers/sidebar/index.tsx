import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <S.Header>
      <S.Title>
        <img src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png" />
        Contatos
      </S.Title>
    </S.Header>
    <div>
      <S.Filter>
        <S.ButtonAdd>
          <i className="fa-solid fa-plus"></i>Criar Contato
        </S.ButtonAdd>
        <FilterCard counter={863} subtitle={'Todos'} />
        <FilterCard counter={126} subtitle={'Proximos'} />
        <FilterCard counter={8} subtitle={'Bloqueados'} active />
        <FilterCard counter={244} subtitle={'Arquivados'} />
        <FilterCard counter={13} subtitle={'Familia/amigos'} />
        <FilterCard counter={8} subtitle={'Urgentes'} />
      </S.Filter>
    </div>
  </S.Aside>
)

export default Sidebar

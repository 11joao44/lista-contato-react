import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  subtitle: string
}

const FilterCard = ({ active, counter, subtitle }: Props) => (
  <S.Card active={active}>
    <S.Label>
      <i className="fa-solid fa-address-book fa-2xs"></i>
      {subtitle}
    </S.Label>
    <S.Counter>{counter}</S.Counter>
  </S.Card>
)

export default FilterCard

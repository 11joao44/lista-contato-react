import { useState } from 'react'
import * as S from './styles'

type Props = {
  name: string
  phone: number
  status: string
  email: string
  birthday: string
}

const Contact = ({ name, phone, status, email, birthday }: Props) => {
  const [inEdit, setIndEdit] = useState(false)
  const initials = name.match(/\b\w/)?.join('').toUpperCase() || ''
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  return (
    <S.ContactCard>
      <div>
        <S.Avatar style={{ background: color }}>{initials}</S.Avatar>
        <S.Table>
          <thead>
            <tr>
              <S.Th>
                <i className="fa-solid fa-file-signature"></i> Nome
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-phone"></i> Telefone
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-envelope"></i> E-mail
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-cake-candles"></i> Aniversario
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-signal"></i> Status
              </S.Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.Td>{name}</S.Td>
              <S.Td>{phone}</S.Td>
              <S.Td>{email}</S.Td>
              <S.Td>{birthday}</S.Td>
              <S.Tag>{status}</S.Tag>
            </tr>
          </tbody>
        </S.Table>
      </div>
      <S.ActionBar>
        {inEdit ? (
          <>
            <S.Button>
              <i className="fa-solid fa-check"></i>
            </S.Button>
            <S.ButtonCancel onClick={() => setIndEdit(false)}>
              <i className="fa-solid fa-x"></i>
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.ButtonSave onClick={() => setIndEdit(true)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </S.ButtonSave>
            <S.ButtonRmove>
              <i className="fa-solid fa-trash"></i>
            </S.ButtonRmove>
          </>
        )}
      </S.ActionBar>
    </S.ContactCard>
  )
}

export default Contact

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../Store/reducers/contacts'
import Contato from '../../models/Contact'

type Props = Contato

const Contact = ({ name, phone, email, birthday, status, id }: Props) => {
  const dispatch = useDispatch()
  const [nameEdit, setNameEdit] = useState('')
  const [inEdit, setIndEdit] = useState(false)
  const initials = name.match(/\b\w/)?.join('').toUpperCase() || ''
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  useEffect(() => {
    if (nameEdit.length >= 0) {
      setNameEdit(nameEdit)
    }
  }, [nameEdit])

  function cancelEdit() {
    setIndEdit(false)
    setNameEdit(nameEdit)
  }

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
              <S.Td>
                <textarea
                  disabled={!inEdit}
                  value={name}
                  onChange={(evento) => setNameEdit(evento.target.value)}
                >
                  {name}
                </textarea>
              </S.Td>
              <S.Td>{phone}</S.Td>
              <S.Td>{email}</S.Td>
              <S.Td>{birthday}</S.Td>
              <S.Tag status={status}>{status}</S.Tag>
            </tr>
          </tbody>
        </S.Table>
      </div>
      <S.ActionBar>
        {inEdit ? (
          <>
            <S.Button
              onClick={() => {
                dispatch(
                  editar({
                    name,
                    phone,
                    email,
                    birthday,
                    status,
                    id
                  })
                )
              }}
            >
              <i className="fa-solid fa-check"></i>
            </S.Button>
            <S.ButtonCancel onClick={cancelEdit}>
              <i className="fa-solid fa-x"></i>
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.ButtonSave onClick={() => setIndEdit(true)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </S.ButtonSave>
            <S.ButtonRmove onClick={() => dispatch(remover(id))}>
              <i className="fa-solid fa-trash"></i>
            </S.ButtonRmove>
          </>
        )}
      </S.ActionBar>
    </S.ContactCard>
  )
}

export default Contact

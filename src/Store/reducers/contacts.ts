import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      name: 'Gian Souza',
      phone: +551142002991,
      email: 'ebac@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '99/99/9999',
      id: 1
    },
    {
      name: 'Paulo Rafael Faria dos Santos',
      phone: +551142002991,
      email: 'ebac@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '99/99/9999',
      id: 2
    },
    {
      name: 'Bruno Soares Saldanha Marinho',
      phone: +551142002991,
      email: 'ebac@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '99/99/9999',
      id: 3
    },
    {
      name: 'Giovanni Sarao',
      phone: +551142002991,
      email: 'ebac@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '99/99/9999',
      id: 4
    }
  ]
}

const contactSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
      const indexCotact = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexCotact >= 0) {
        state.itens[indexCotact] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contact>) => {
      const contantoExiste = state.itens.find(
        (contato) => contato.phone === action.payload.phone
      )

      if (contantoExiste) {
        alert('Já existe esse contato')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contactSlice.actions

export default contactSlice.reducer

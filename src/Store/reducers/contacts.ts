import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      name: 'Yasmin Melo',
      phone: 6598112657,
      email: 'google@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '03/07/2000',
      id: 1
    },
    {
      name: 'Juca Neves',
      phone: 6598112657,
      email: 'google@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '03/07/2000',
      id: 2
    },
    {
      name: 'Thiago Perozo',
      phone: 6598112657,
      email: 'google@gmail.com',
      status: enums.Status.ONLINE,
      birthday: '03/07/2000',
      id: 3
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
    }
  }
})

export const { remover, editar } = contactSlice.actions

export default contactSlice.reducer

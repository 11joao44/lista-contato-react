import { configureStore } from '@reduxjs/toolkit'

import contacts from './reducers/contacts'

const store = configureStore({
  reducer: {
    contacts: contacts
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

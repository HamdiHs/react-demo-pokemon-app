import { configureStore } from '@reduxjs/toolkit'
import PokemonReducer from './pokemonSlice'

export const store = configureStore({
  reducer: {pokemon: PokemonReducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
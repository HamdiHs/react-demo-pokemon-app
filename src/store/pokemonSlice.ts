import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { access } from 'fs'
import { State } from 'history'
import { RootStateOrAny } from 'react-redux'

interface PokemonState {
  selectedPokemon : any
}

const initialState = { selectedPokemon: {} } as PokemonState

export const pokemonSlice : Slice = createSlice({
    
    name: 'pokemon',
  
    initialState,
  
    reducers: {
        setSelectedPokemon: (state  , action: PayloadAction) => {
            state.selectedPokemon = action?.payload ;
        }
    },
})

export const getSelectedPokemon = ( state: RootStateOrAny ) => state.pokemon.selectedPokemon;

export const { setSelectedPokemon  } = pokemonSlice.actions
export default pokemonSlice.reducer
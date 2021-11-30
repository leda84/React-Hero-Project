import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name:'root',
    initialState: {
        name: "Generic Hero",
        alias: 'Generic Alias',
        super_power: 'Generic super power',
        description:'Generic descroption',
        comics_appeared_in: '12345'       
    },
    reducers: {
        chooseName:(state,action) => {
            state.name = action.payload
        },
        chooseAlias:(state,action) => {
            state.alias = action.payload
        }
    }
})

export const reducer = rootSlice.reducer;

export const {chooseName, chooseAlias} = rootSlice.actions
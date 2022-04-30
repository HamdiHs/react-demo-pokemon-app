import React from "react";
import {useRoutes} from "react-router-dom";
import App from "../App";
import  PokemonDetails  from "../views/PokemonDetails";
import PokemonList from "../views/PokemonList";

export const AppRoutes = () =>{
    return useRoutes([
        {
            path: "/", element: <App/> , children: [
                {
                    path: "", element: <PokemonList/>
                },
                {
                    path: "/details/:id", element: <PokemonDetails/>
                }
            ]
        },  
    
    ])
}
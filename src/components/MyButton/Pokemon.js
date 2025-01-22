import {createElement, useState} from "react";
import './style.css';

function Pokemon({background, image, number}){


    return (
        <div style ={{backgroundColor: background}}>
            <img src={image} alt="Bulbasaur"/>
            <p>{number}</p>

        </div>

    )
}

export default Pokemon
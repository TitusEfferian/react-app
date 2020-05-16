import React from 'react';
import { hot } from "react-hot-loader";
import ImageSample from './123-1230553_clipart-black-and-white-chibi-transparent-vocaloid-hatsune.png';
import "./App.css";

const App = () => {
    return (
        <>
            <h1>hello world, react-app by: titusefferian</h1>
            <img src={ImageSample} />
        </>
    )
}

export default hot(module)(App);

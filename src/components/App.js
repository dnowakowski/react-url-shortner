import React, {useReducer, useState} from "react";
import {BrowserRouter, Route,} from 'react-router-dom'
import { LinksContext } from "../contexts/LinksContext";
import { LinkContext } from "../contexts/LinkContext";
import Redirect from "./Redirect";
import LinksAdder from './LinksAdder'

import { handleLoadingLinkFromAPI } from "../API/APIControls";
import { linkReducer } from "../reducers";

const initial_state = [];



const App = () => {

    const [Link, setLink] = useState('');
    
    
    const [links, dispatch] = useReducer(linkReducer, initial_state);

    return (
        <div className = "app__container">
            <BrowserRouter>
            <Route path = "/" exact>
                <LinkContext.Provider value = {{Link, setLink}}>
                    <LinksContext.Provider value = {{links, dispatch}}>
                       <LinksAdder/>
                    </LinksContext.Provider>
                </LinkContext.Provider>
            </Route>
            <Route path='/:name' exact component={(props) => { 
                return <Redirect goBack = {props.history.goBack} link = {props.match.params.name} loadLink = { () => handleLoadingLinkFromAPI(props)} />
            }}/>

            </BrowserRouter>
        </div>
    )
}

export default App;



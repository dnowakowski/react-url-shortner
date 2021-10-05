import React, { useContext } from "react";
import {LinkContext} from '../contexts/LinkContext';

const Input = ({valid}) => {

    const links = useContext(LinkContext);
    return (
        <>
        <div className = {`ui input ${valid ? 'valid' : 'error'}` }>
        <input onChange = {(e) => {
            links.setLink(e.target.value);
        }} defaultValue = {links.Link} />
        </div>
        {!valid && <div className="ui warning message">

            <p>Please enter valid URL</p>
            </div>
            }
        </>

    )

}

export default Input;
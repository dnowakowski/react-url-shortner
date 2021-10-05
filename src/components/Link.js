import React, {createRef, useState} from "react";

const Link = ({linkObj}) => {

    const ref = createRef();

    const [clicked, setClicked] = useState(false);


    const copyContentToClipboard = (e) => {
        if(e != null){
            e.preventDefault();
        }
        setClicked(true);

        ref.current.select();
        navigator.clipboard.writeText(ref.current.value);

        setTimeout(() => {
            setClicked(false);
        }, 1000)
    }


    return (
        <div className = "item" onClick = {copyContentToClipboard}>
            <a target="_blank" rel = "noreferrer" href = {linkObj.id}>{linkObj.id} </a> {`(${linkObj.link})`}
            <input style = {{display:'none'}} ref = {ref} defaultValue = {`${window.location.href}${linkObj.id}`} />
            {clicked && ' Copied to clipboard!'}
        </div>
    )
    
}

export default Link
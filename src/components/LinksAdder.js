import React, { useContext, useState } from "react";
import Input from "./Input";
import LinkList from "./LinkList";
import {LinksContext} from "../contexts/LinksContext";
import {LinkContext} from "../contexts/LinkContext";

import { handlePost } from "../API/APIControls";

import { createLinkActionCreate } from "../actions";

const checkValidHTML = (string)  => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    
  return !!pattern.test(string);

}

const LinksAdder = () => {
    const links = useContext(LinksContext);
    const linkContext = useContext(LinkContext);

    const [validLink, setValidLink] = useState(true);


    return (
        <div className = "app__main">
            <form onSubmit = { async (e) => {
                e.preventDefault();
                let valid = checkValidHTML(linkContext.Link);
                setValidLink(valid)
                if(!valid){
                    return;
                }
                    const linkObjCreated = await createLinkActionCreate(null, linkContext.Link)
                    const id =  await handlePost(null, linkContext.Link);
                    linkObjCreated.payload.id = id;
                    links.dispatch(linkObjCreated);
            }
            }>
                <p>Please enter a valid URL link</p>
            <Input valid = {validLink} />
            <button className = "ui button blue"> Add
                </button>
                </form>
                <LinkList />
        </div>
    )
}

export default LinksAdder;
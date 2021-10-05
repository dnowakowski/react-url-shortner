import React, {useContext, useEffect, useState} from "react";
import {LinksContext} from "../contexts/LinksContext";
import Link from "./Link";

const renderLinks = (links  ) => {


    const lastLink = links[links.length -1];
    return links.map((link) => {
        return (
            <Link selected = {lastLink === link} key = {link.id} linkObj = {link} />
        )
    })

}


const LinkList = (props) => {


    const links = useContext(LinksContext);
    return (
        <>
        <div className = "ui list linkList">
            {links.links.length > 0 && <div>Links:</div>}
            { renderLinks(links.links)}
        </div>
        </>
    )
}



export default LinkList;
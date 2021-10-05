import React from "react";
import { useHistory } from "react-router";

const Redirect = ( {link, loadLink, goBack}) => {
    loadLink(loadLink) //we try to get and redirect to link

    //we dont have so go back to main
    const history = useHistory();
    history.push('/') 
    return (
        <div>
            Redirecting to: {link}
        </div>
    )
}

export default Redirect;
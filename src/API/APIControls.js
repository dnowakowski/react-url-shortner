export  const handlePost =  async (shortened, link) => {
    let id = '';
    const postRequest = await fetch(`http://localhost:3000/links`,{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        id: shortened,
        mapTo: link,
    })
    })

    await postRequest.json().then(data => {
        id = data.id;
    }) 
    return id;
}

export const handleLoadingLinkFromAPI = (props) => {
    fetch(`http://localhost:3000/links/${props.match.params.name}`).then((response) => {
        response.json().then(data => {
            const empty = Object.keys(data).length === 0;
            
            if(empty){
                return false
            }

            if (data.mapTo != null) {
                let url = data.mapTo;
                if (!url.match(/^https?:\/\//i)) {
                    url = 'http://' + url;
                }
                window.location.href = url;
            }
        }).catch((e) => {
            return false;
        });
    });
}
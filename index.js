function fetchGitUserInfo(userId){
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response =>{
            console.log(response.status);//check the status
            if (!response.ok){
                console.log("Bad request check the credinticals", response)
            }else{
                return response.json().then(userInfo =>{
                    //JSON will be goes here
                    console.log(userInfo);
                });
            }
        }).catch(error =>{
            console.log(error)
    });
}

function fetchByXmlHttpRequest(userId){
    const request = new XMLHttpRequest();
    request.open("GET", `https://api.github.com/users/${encodeURIComponent(userId)}`);
    request.addEventListener("load", () => {
        // Fetch API Response OK or not
        if(request.status >= 200 && request.status < 300){
            const userInfo = JSON.parse(request.responseText);
            console.log(userInfo);
        }else{
            console.error("Error ocurs", request.statusText);
        }
    });
    request.addEventListener("error", () => {
        console.error("host error")
    })
    // finally send the request
    request.send();
}
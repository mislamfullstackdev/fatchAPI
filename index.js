console.log("index.js: loaded");
const UserId = "themeexpress"
fetch(`https://api.github.com/users/${encodeURIComponent(UserId)}`)
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
console.log("index.js: loaded");
const UserId = "themeexpress"
fetch(`https://api.github.com/users/${encodeURIComponent(UserId)}`)
    .then(response =>{
        console.log(response.status);//check the result
        return response.json().then(userInfo =>{
            //JSON will be goes here
            console.log(userInfo);
        });
    }).catch(error =>{
        console.log(error)
    });
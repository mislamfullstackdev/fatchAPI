function fetchGitUserInfo(userId){
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response =>{
            console.log(response.status);//check the status
            if (!response.ok){
                console.log("Bad request check the credinticals", response)
            }else{
                return response.json().then(userInfo =>{
                    //console.log(userInfo);
                    const view =  escapeHTML`
                    <h4>${userInfo.name} (@${userInfo.login})</h4>
                    <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
                    <dl>
                        <dt>Location</dt>
                        <dd>${userInfo.location}</dd>
                        <dt>Repositories</dt>
                        <dd>${userInfo.public_repos}</dd>
                    </dl>
                    `;
                    // attached in HTML 
                    const result = document.getElementById("result");
                    result.innerHTML = view;
                });
            }
        }).catch(error =>{
            console.log(error)
    });
}


// escape special character and html
function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
}
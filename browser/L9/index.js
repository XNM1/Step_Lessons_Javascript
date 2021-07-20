window.onload = () => {
    let users = [
        {name:'AAA', surname:'BBB'},
        {name:'CCC', surname:'FFF'}
    ]
    
    let userTemplate = document.querySelector("#user");
    for(const user of users) {
        let userElement = document.createElement("div");
        userElement.hidden = false;
        userElement.innerHTML = userTemplate.innerHTML
        .replace(/{name}/, user.name)
        .replace(/{surname}/, user.surname)
        userElement.children[0].hidden = false;
        document.body.append(userElement);
    }
}
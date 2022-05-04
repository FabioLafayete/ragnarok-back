
function doPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function signUp() {
    event.preventDefault()
    let url = "http://104.196.42.2:3333/login/create"

    let id = document.getElementById("id").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cellphone = document.getElementById("cellphone").value
    let male = document.getElementById("male").value
    let female = document.getElementById("female").value

    console.log(id, email, cellphone)

    console.log("Macho: " + male)
    console.log("Femea: " + female)

    body = {
        "id": id,
        "email": email,
        "password": password,
        "cellphone": cellphone,
        "sex": null
    }

    doPost(url, body)
}
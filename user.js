let loggedInUser

let message = document.querySelector("#message")
let company = document.querySelector("company")
let username = document.querySelector(".username")
let mail = document.querySelector(".mail")
let name = document.querySelector(".name")
let phone = document.querySelector(".phone")
let website = document.querySelector(".website")

let setLoggedUserHeader = () => {

    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (loggedInUser) {
        loggedUser.innerHTML = `User logado: ${loggedInUser.name}`
        setLogout()
    }
    else {
        loggedUser.innerHTML = `Não há user logado`
        setLogin()
    }

}

let setLoggedUserPage = () => {

    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (loggedInUser) {
        company.innerHTML = `Company: ${loggedInUser.company.name}`
        username.innerHTML = `Username: ${loggedInUser.username}`
        mail.innerHTML = `Mail: ${loggedInUser.mail}`
        name.innerHTML = `Name: ${loggedInUser.name}`
        phone.innerHTML = `Phone: ${loggedInUser.phone}`
        website.innerHTML = `Website: ${loggedInUser.website}`
    }
    else {
        message.innerHTML = `Não há user logado`
    }

}
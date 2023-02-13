
let loggedUser = document.querySelector("#logged-user")
let loginButton = document.querySelector("#login-button")
let logoutButton = document.querySelector("#logout-button")

let setLogin = () => {
    logoutButton.style.display = "none"
    loginButton.style.display = "initial"
}

let setLogout = () => {
    logoutButton.style.display = "initial"
    loginButton.style.display = "none"
}

loginButton.onclick = async () => {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1")
        loggedInUser = await res.json()
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        setLoggedUserHeader()
        setLogout()
        console.log("Login com Sucesso.")
        window.location.reload()
    }
    catch (e) {
        console.log("Erro -> " + e)
    }

}

logoutButton.onclick = () => {

    try {
        localStorage.removeItem('loggedInUser')
        setLoggedUserHeader()
        setLogin()
        console.log("Logout.")
        window.location.reload()
    }
    catch (e) {
        console.log("Erro -> " + e)
    }

}

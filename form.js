class User {
    constructor(name, password) {
        this.name = name;
        this.password = password
    }
}
var data = [];
var userName = document.getElementById('signupName')
var userPass = document.getElementById('signupPass')
var userMail = document.getElementById('mail')
var loginName = document.getElementById('LoginName')
var mass = document.getElementById('text-in-signup')
var com = document.getElementById('xxxx')
var loginPass = document.getElementById('LoginPass')
function Sumbit() {
    if (validate(userName.value, userMail.value, userPass.value)) {

        let user = new User(userName.value, userPass.value)
        if (data.length == 0) {
            mass.innerHTML = `The account created, please login`
            mass.style.color='black'
            data.push(user)
        } else {
            var flag = 1;
            for (var i = 0; i < data.length; i++) {
                if (userName.value == data[i].name) {
                    mass.innerHTML = `This name is already exists. Use a different name`
                    mass.style.color = 'red'
                    flag = 0;
                    break;
                }
            }
            if (flag) {
                mass.innerHTML = `The account created, please login`
                mass.style.color = 'black'
                data.push(user)
            }
        }
    }
}

function LoginSubmit() {
    for (let i = 0; i < data.length; i++) {
        if (loginName.value == data[i].name && loginPass.value == data[i].password) {
            localStorage.setItem('userName', loginName.value)
            localStorage.setItem('userPassword', loginPass.value)
            open('index.html', '_blank')
        } else {
            com.innerHTML = 'incorrect user name or password'
            com.style.color = 'red'
        }
    }
}


function validate(name, email, password) {
    if (name.length < 5) {
        userName.style.background='rgb(233, 36, 36)'
        mass.innerHTML = `Name must be at least 5 characters long.`
        mass.style.color = 'red'
        return false;
    }
    userName.style.background='white'

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|yahoo|eg)$/;
    if (!emailPattern.test(email)) {
        userMail.style.background='rgb(233, 36, 36)'
        mass.innerHTML = `Please enter a valid email`
        mass.style.color = 'red'
        return false;
    }
    userMail.style.background='white'

    if (password.length < 6) {
        userPass.style.background='rgb(233, 36, 36)'
        mass.innerHTML = `Password must be at least 6 characters`
        mass.style.color = 'red'
        return false;
    }
    userPass.style.background='white'

    return true;
}
let passwordLenght = document.getElementById('passwordLenght')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

const generatePassword = (len) => {
    const lowerAlphabet = "qwertyuiopasdfghjklzxcvbnm"
    const upperAlphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const numeric = "1234567890" 
    const symbol = "!@#$%^&*()-_=+{[}]|:;<,>.?/''`~"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let i = 0; i < len; i++) {
        generator += data[~~(Math.random() * data.length)] // ~~ = Math.floor

    }

    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLenght.value)
    password.value = newPassword

    // setTimeout(() => {
    //     alert("password telah terGenerate")
    // },500);
}



const savePassword = () => {
    // document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${password.value}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    // setTimeout(() => {
    //     alert('berhasil di simpan')
    // }, 500);
}





















// function eye hide and see
// function password_show_hide() {
//     let x = document.getElementById("password");
//     let show_eye = document.getElementById("show_eye");
//     let hide_eye = document.getElementById("hide_eye");
//     hide_eye.classList.remove("d-none");
//     if (x.type === "password") {
//       x.type = "text";
//       show_eye.style.display = "none";
//       hide_eye.style.display = "block";
//     } else {
//       x.type = "password";
//       show_eye.style.display = "block";
//       hide_eye.style.display = "none";
//     }
//   }
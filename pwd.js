
function generatePassword(length, numbers, special){
    let alp ="QWERTZUIOPÜASDFGHJKLÖÄYXCVBNMqwertzuiopüasdfghjklöäyxcvbnmß";
    
    if(numbers){
        alp += "1234567890";
    }
    if(special){
        alp += "+*~'#-_.:,;<>|!°^§$%&/()=?][{"
    }

    let pwd ="";
    for(let i = 0; i < length; i++){
        pwd += alp[Math.floor(Math.random() * alp.length)]
    }
    return pwd;
}
// console.log(generatePassword());
module.exports = generatePassword;

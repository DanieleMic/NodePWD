'use strict';

function generatePassword(){
    const alp ="QWERTZUIOPÜASDFGHJKLÖÄYXCVBNMqwertzuiopüasdfghjklöäyxcvbnmß1234567890";
    const length = 20;
    let pwd ="";
    for(let i = 0; i < length; i++){
        pwd += alp[Math.floor(Math.random() * alp.length)]
    }
    return pwd;
}
// console.log(generatePassword());
module.exports = generatePassword;

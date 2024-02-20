//1. Un NIT en colombia tiene 9 u 8 digitos seguidos de un guion y un digito 
const nitPattern = /^(\d{9}|\d{8})-\d{1}$/;
const nit = '123456789-0'
let mensaje = nitPattern.test(nit) ? 'El NIT es válido':'El NIT no es válido'
console.log(mensaje)
//2. Código postal de 5 digitos
const postalPattern = /^\d{5}$/
const postalCode = '12345'
console.log(postalPattern.test(postalCode)? 'Código postal válido':'Código postal no válido')
//3. Formato de correo electronico
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const email = 'ejemplo@.com'
console.log(emailPattern.test(email)? 'email válido':'email inválido')
//4. Verificar numero de telefono con el formato
// (XXX) XXX-XXXX
const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
const telephone = "(999) 456-7890"
console.log(phonePattern.test(telephone)? 'teléfono válido':'teléfono no válido')
//5. Validar direccion URL
const urlPattern = /^(https|http):\/\/[^\s\/$.?#]+\.(com|org|gov|net)$/
const url = 'http://ejemplodeurl.gov'
console.log(urlPattern.test(url)? 'URL válida':'URL inválida')
//6. Validar un nombre de usuario
const userNamePattern = /^[a-z0-9]{3,10}$/
const userName = 'pepitoperez2024'
console.log(userNamePattern.test(userName)?'Nombre de usuario válido':'Nombre de usuario inválido')
//7. Validar una direccion IP en formato IPv4
const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const ip = '123.456.789.432'
// 8. Validar fecha en formto dd/mm/yyyy
const datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
const date = '27/11/2039'
console.log(datePattern.test(date)?'Fecha válida':'Fecha Invalida')
//9. Validar contraseña segura
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&()/+*^_])[A-Za-z\d!@#$%&()/+*^_]{8,}$/;
const password = 'Lacontraseña2024*'
console.log(passwordPattern.taste(password)?'Contraseña válida':'Contraseña inválida')

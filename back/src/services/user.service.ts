function userLogin(email: string , password: string) {

  if(email == "admin@mail.com" && password == "admin") {
    console.log("LOGIN PERFECTE")
    
    return true;
  }
  else{
    console.error("LOGIN INCORRECTE")
    return false;
  }





}
export default { login: userLogin };
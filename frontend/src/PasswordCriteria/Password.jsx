const passwordCriteriaCheck = password=>{
    console.log(password.length)
    if(password.length<8 )return [false,"password is weak"];
   
    // check the criteria
    let result_1=password.match('[a-z]');
    let result_2=password.match('[A-Z]');
    let result_3=password.match(/\d/g);
    let result_4=password.match(/[~!@#$%^&*]/g);
    return [result_1!==null && result_2!==null && result_3!==null && result_4!==null,"please check the password criteria !"];


}

const passwordAndConfirmPassword = (password,confirm_password)=>{
    console.log(password.length)
    console.log(confirm_password.length)
    if(password.length!==confirm_password.length) return [false,"password does not match !"];
    if(password!==confirm_password) return [false,"password does not match !"];
    return [true,"match !!"]
}

export  {passwordCriteriaCheck,passwordAndConfirmPassword};
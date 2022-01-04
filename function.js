/**
 * Age calculator
 * @param {*} name 
 * @param {*} year 
 * @returns string text
 */
function agecal(name, year){
    let date = new Date();
    let age = date.getFullYear() - year;
    let ageinfo = checkageinfo(age);
    return `<p class='alert alert-${ageinfo.alert}'>Hello ${name}, you are ${age} years old & you are a ${ageinfo.status}</p>`;
};



/**
 * Age Info check
 * @param {*} age 
 * @returns String text
 */
function checkageinfo(age){
    if(age > 0 && age <= 10){
        return {
            status : 'babu',
            alert : 'primary'
        };
    }else if(age > 10 && age <= 25){
        return {
            status : 'Kisor',
            alert : 'info'
        };
    }else if(age > 25 && age <= 40){
        return {
            status : 'jubok',
            alert : 'success'
        };
    }else if(age > 40 && age <= 60){
        return {
            status : 'Boysko',
            alert : 'warning'
        };
    }else if(age > 60 && age >= 90){
        return {
            status : 'Bitho',
            alert : 'danger'
        };
    }else{
        return {
            status : 'Jin/Booth',
            alert : 'dark'
        };
    }
};



/**
 * Currency convert
 * @param {*} amount 
 * @param {*} currency 
 * @returns Number
 */
// function cc_cal(amount, currency){

//     if(currency == 85){
//         return amount * 85 ;
//     }
//     else if(currency == 67){
//         return amount * 67 ;
//     }
//     else if(currency == 91){
//         return amount * 91 ;
//     }
//     else if(currency == 104){
//         return amount * 104 ;
//     }else{
//         return ``
//     }
// }
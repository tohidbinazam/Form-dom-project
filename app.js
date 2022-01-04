/**
 * Agecal Calculator call
 */
const age_in = document.querySelector('.age_in');
let name = age_in.firstElementChild;
let year = age_in.firstElementChild.nextElementSibling;
let button = age_in.lastElementChild;
const agecal_res = document.querySelector('.agecal_res');



/**
 * Form validation call
 */
const signupform = document.querySelector('.signup_form');
const formname = signupform.children[0];
const foremail = signupform.children[1];
const formuname = signupform.children[2];
const formuname_res = signupform.children[3];
const formbutton = signupform.children[4];
const form_res = document.querySelector('.form_res');



/**
 * Agecal event
 */
button.addEventListener('click', function() {
    agecal_res.innerHTML = agecal(name.value, year.value);
    name.value = '';
    year.value = '';
});



/**
 * Form username validation
 */
formuname.addEventListener('keyup', () => {

    let pattern = /^[a-z0-9_-]{5,12}$/;
    
    formuname_res.innerHTML = (formuname.value) ? '' : 'Set a username <br>';
    formuname_res.innerHTML += (pattern.test(formuname.value)) ? `Done` : `Min 5 & max 12 character`;

})



/**
 * Form Validation event
 * @param {*} e 
 */
signupform.onsubmit = (e) => {
   e.preventDefault();
   let name = formname.value;
   let email = foremail.value;
   let uname = formuname.value;

   formname.style.borderColor = (name) ? '' : 'red';
   foremail.style.borderColor = (email) ? '' : 'red';
   formuname.style.borderColor = (uname) ? '' : 'red';

   let form_single_res = (name) ? '' : 'Name required, ';
   form_single_res += (email) ? '' : 'E-mail required, ';
   form_single_res += (uname) ? '' : 'Username required';

   if(name && email && uname){
        form_res.innerHTML = `<p class = 'alert alert-success'>All Done, Thanks</p>`;
   }else{
        form_res.innerHTML = `<p class = 'alert alert-danger'>All Fields are required. Such as ${form_single_res}</p>`;
   }
};



/**
 * Currency converter event
 */
const cc_name = document.querySelector('#cc_name');
const cc_amount = document.querySelector('#cc_amount');
const cc_main = document.querySelector('#cc_main');
const cc_button = document.querySelector('.cc_button');
const cc_result = document.querySelector('.cc_result');

cc_button.onclick = () => {

    // if(cc_name.value == '' || cc_amount == ''){
    //     cc_result.innerHTML = `<p class = 'alert alert-danger'>All Fields are required.</p>`
    // }else{
    // cc_result.innerHTML = `<p class = 'alert alert-success'>Hi, ${cc_name.value} your converting amount is ${cc_cal(cc_amount.value, currency.value)} TAKA</p>`
    // }

    let cc_convert = cc_amount.value * cc_main.value;

    cc_result.innerHTML = (cc_name.value == '' || cc_amount == '' || cc_main.value == '') ? `<p class = 'alert alert-danger'>All Fields are required.</p>` : `<p class = 'alert alert-success'>Hi, ${cc_name.value} your converting amount is ${cc_convert} TAKA</p>`;

};



/**
 * Marriage age event
 */

const mar_name = document.querySelector('.mar_name');
const mar_option = document.querySelector('.mar_option');
const mar_date = document.querySelector('.mar_date');
const mar_button = document.querySelector('.mar_button');
const mar_result = document.querySelector('.mar_result');


mar_button.onclick = () => {
    
    let date = new Date();
    let age = date.getFullYear() - mar_date.value;
    let mar_res;

    let mar_dif = (mar_option.value == 'Male') ? 21 - age : 18 - age;

    if(age >= 18 && mar_option.value == 'Female' && mar_name.value){
        mar_res = `<p class = 'alert alert-success'>Hi ${mar_name.value}, your age is ${age} years old. Now you can marry anyone </p>`;
    }else if(age >= 21 && mar_option.value == 'Male' && mar_name.value){
        mar_res = `<p class = 'alert alert-success'>Hi ${mar_name.value}, your age is ${age} years old. Now you can marry anyone </p>`;
    }else if(mar_date.value == '' || mar_option.value == '' || mar_name.value == ''){
        mar_res = `<p class ='alert alert-danger'>All Fields are required.</p>`;
    }else{
        mar_res = `<p class = 'alert alert-success'>Hi ${mar_name.value}, your age is ${age} years. Sorry, you can marriage after <b>${mar_dif}</b> <b>${mar_dif < 2 ? 'year' : 'years'} </b></p>`;
    }

    mar_result.innerHTML = mar_res;

};



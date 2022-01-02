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
button.addEventListener('click', () => {
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
    formuname_res.innerHTML += (pattern.test(formuname.value)) ? `Done` : `Min 5 & max 12 character`

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

   if(name == '' || email == '' || uname == ''){
        form_res.innerHTML = `<p class = 'alert alert-danger'>All Fields are required. Such as ${form_single_res}</p>`;
   }else{
        form_res.innerHTML = `<p class = 'alert alert-success'>All Done, Thanks</p>`;
   }
};



/**
 * Currency converter event
 */
const cc_name = document.querySelector('#cc_name');
const cc_amount = document.querySelector('#cc_amount');





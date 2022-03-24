function validateName() {
    const name = document.getElementById('name');

    const regex = /^[a-zA-Z]{2,15}$/;

    if(!regex.test(name.value)){
        const errorMsg = document.getElementById('nameError');
        errorMsg.innerText = 'name contain letters only between 2 to 15 characters';
        //add error border
        name.classList.add('error');
      }
      else{
        const errorMsg = document.getElementById('nameError');
        errorMsg.innerText = '';
        //remove error border
        name.classList.remove('error');
      }
}

function validateCompany() {
    const company = document.getElementById('companyName');
    
    let len = company.value.length;
    
    if(len<=0){
        const errorMsg = document.getElementById('companyError');
         errorMsg.innerHTML = 'Company field cannot be empty!!';
        //add error border
        company.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('companyError');
         errorMsg.innerHTML = '';
         //remove error border
        company.classList.remove('error');
    }
}

function validateEmail() {
    const email = document.getElementById('email');

    const regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    
    if(!regex.test(email.value)) {
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = 'Enter valid Email and cannot be empty';
        //add error border
        email.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = '';
         //remove error border
        email.classList.remove('error');
    }
}

function validatePassword() {
    const password = document.getElementById('password');

    const regex = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\.\$\^\*])){7,14}$/;
    
    if(!regex.test(password.value)) {
        const errorMsg = document.getElementById('passwordError');
        errorMsg.innerHTML = 'Password should contain atleast one upper case, lower case letter and special Character with minimum 7 to 14 charcter ';
        //add error border
        password.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = '';
         //remove error border
        password.classList.remove('error');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    
    const regex = /^[6-9]{1}[0-9]{9}$/;
    
    if(!regex.test(phone.value)){
        const errorMsg = document.getElementById('phoneError');
        errorMsg.innerHTML = 'Enter valid Phone number Start with (6-9) with 10 numbers only!! and cannot be empty';
        //add error border
        phone.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('phoneError');
        errorMsg.innerHTML = '';
         //remove error border
        phone.classList.remove('error');
    }
}

function validateDate() {
    const date = document.getElementById('birthDate');
    
    let len = date.value.length;
    
    if(len<=0){
        const errorMsg = document.getElementById('dateError');
         errorMsg.innerHTML = 'Please fill Birth Date';
        //add error border
        date.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('dateError');
         errorMsg.innerHTML = '';
         //remove error border
        date.classList.remove('error');
    }
}

function validateAge() {
    const age = document.getElementById('age');
    
    if(!(age.value >= 18 && age.value <= 60)){
        const errorMsg = document.getElementById('ageError');
         errorMsg.innerHTML = 'Age should be greater than 18 and less than 60 ';
        //add error border
        age.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('ageError');
         errorMsg.innerHTML = '';
         //remove error border
        age.classList.remove('error');
    }
}

function validateUrl() {
    const url = document.getElementById('myUrl');

    const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

    if(!regex.test(url.value)){
        const errorMsg = document.getElementById('urlError');
        errorMsg.innerHTML = 'Enter a proper github url and cannot be empty';
        //add error border
        url.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('urlError');
        errorMsg.innerHTML = '';
         //remove error border
        url.classList.remove('error');
    }
}

function validateFile() {
    const file = document.getElementById('myFile');

    const regex = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;

    if(!regex.exec(file.value)) {
        const errorMsg = document.getElementById('fileError');
        errorMsg.innerHTML = 'Ivalid file type';
    }
    else{
        const errorMsg = document.getElementById('fileError');
        errorMsg.innerHTML = '';
    }
}

function validateCheckBox(e){
    let check = document.getElementById('checkBox').checked;
    
    if(check == false){
        const errorMsg = document.getElementById('checkBoxError');
         errorMsg.innerHTML = 'Please tick the Checkbox';
        e.preventDefault();
    }
    else{
        const errorMsg = document.getElementById('checkBoxError');
         errorMsg.innerHTML = '';
    }
}
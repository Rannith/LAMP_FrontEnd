//Form blur event
document.getElementById('firstName').addEventListener('blur',validatefirstName);
document.getElementById('lastName').addEventListener('blur',validatelastName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);
document.getElementById('companyName').addEventListener('blur',validateCompany);
document.addEventListener('submit', validateCheckBox);


function validatefirstName(){
    const name = document.getElementById('firstName');
    
    const regex = /^[a-zA-Z]{2,15}$/;
    
    if(!regex.test(name.value)){
      //alert("name contain letters only between 2 to 15 characters");
        const errorMsg = document.getElementById('firstNameError');
        errorMsg.innerHTML = 'name contain letters only between 2 to 15 characters';
        //add error border
        name.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('firstNameError');
        errorMsg.innerHTML = '';
        //remove error border
        name.classList.remove('error');
    }
}

function validatelastName(){
    const name = document.getElementById('lastName');
    
    const regex = /^[a-zA-Z]{1,15}$/;
    
    if(!regex.test(name.value)){
      
        const errorMsg = document.getElementById('lastNameError');
        errorMsg.innerHTML = 'Last name contain letters only and cannot be empty';
        //add error border
        name.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('lastNameError');
        errorMsg.innerHTML = '';
        //remove error border
        name.classList.remove('error');
    }
}

function validateEmail(){
   const name = document.getElementById('email');
    
    const regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    
    if(!regex.test(name.value)){
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = 'Enter valid Email and cannot be empty';
        //add error border
        name.classList.add('error');
       
    }
    else{
        const errorMsg = document.getElementById('emailError');
        errorMsg.innerHTML = '';
         //remove error border
        name.classList.remove('error');
    }
}

function validatePhone(){
    const name = document.getElementById('phone');
    
    const regex = /^[6-9]{1}[0-9]{9}$/;
    
    if(!regex.test(name.value)){
        const errorMsg = document.getElementById('phoneError');
        errorMsg.innerHTML = 'Enter valid Phone number Start with (6-9) with 10 numbers only!! and cannot be empty';
        //add error border
        name.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('phoneError');
        errorMsg.innerHTML = '';
         //remove error border
        name.classList.remove('error');
    }
}

function validateCompany(){
    const name = document.getElementById('companyName');
    
    let len = name.value.length;
    
    if(len<=0){
        const errorMsg = document.getElementById('companyError');
         errorMsg.innerHTML = 'Company field cannot be empty!!';
        //add error border
        name.classList.add('error');
    }
    else{
        const errorMsg = document.getElementById('companyError');
         errorMsg.innerHTML = '';
         //remove error border
        name.classList.remove('error');
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

function changeBackColor(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${Math.random()*100})`;
}

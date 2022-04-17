const multiStepForm = document.querySelector(".form-container");
// console.log(multiStepForm)
const formStep = [...multiStepForm.querySelectorAll(".container")];
// console.log(formStep)
var currentTab = formStep.findIndex(step => {
    return step.classList.contains("active");
})

// console.log(currentTab)

if(currentTab < 0) {
    currentTab = 0;
    // formStep[currentTab].classList.add("active");
    showCurrentTab();
}

multiStepForm.addEventListener('click', event => {
    event.preventDefault();
    let tab
    if(event.target.matches("[data-next]")){
        // currentTab += 1;
        tab = 1;
    }
    else if(event.target.matches("[data-previous]")){
        // currentTab -= 1;
        tab = -1;
    }
    if(tab == null){
        return
    }
    const inputs = [...formStep[currentTab].querySelectorAll("input")];
    console.log("inputs "+inputs.length);
    let valid = true;
    inputs.forEach(input => {
        console.log(input);
        if(input.getAttribute('name') == 'Email') {
            const userInput = document.getElementById('email');
    
            const regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
            
            if(!regex.test(userInput.value)){
                const errorMsg = document.getElementById('emailError');
                errorMsg.innerHTML = 'Enter valid Email and cannot be empty';
                //add error border
                userInput.classList.add('error');
                valid = false;
                console.log('Enter valid Email and cannot be empty')
            }
            else{
                const errorMsg = document.getElementById('emailError');
                errorMsg.innerHTML = '';
                //remove error border
                userInput.classList.remove('error');
                valid = true;
                console.log('ok')
            }
        }
        else if(input.getAttribute('name') == 'Password') {
            const userInput = document.getElementById('password');
    
            let len = userInput.value.length;
            
            if(len<=0){
                const errorMsg = document.getElementById('passwordError');
                errorMsg.innerHTML = 'Password field cannot be empty!!';
                //add error border
                userInput.classList.add('error');
                valid = false;
                console.log('Password field cannot be empty')
            }
            else{
                if(len<=7) {
                    const errorMsg = document.getElementById('passwordError');
                    errorMsg.innerHTML = 'Password must be grater than 7 characters';
                    //add error border
                    userInput.classList.add('error');
                    valid = false;
                }
                else{
                    const errorMsg = document.getElementById('passwordError');
                    errorMsg.innerHTML = '';
                    //remove error border
                    userInput.classList.remove('error');
                    valid = true;
                    console.log('ok')
                }
            }
        }
        else if(input.getAttribute('name') == 'confirm_password') {
            const userInput = document.getElementById('confirm-password');

            let len = userInput.value.length;

            if(len <= 0){
                const errorMsg = document.getElementById('confirmPasswordError');
                errorMsg.innerHTML = 'Confirm Password field cannot be empty!!';
                //add error border
                userInput.classList.add('error');
                valid = false;
                console.log('Password field cannot be empty')
            }
            else{
                const password = document.getElementById('password');

                if(userInput.value !== password.value){
                    const errorMsg = document.getElementById('confirmPasswordError');
                    errorMsg.innerHTML = 'Password and confirm password must be same';
                    //add error border
                    userInput.classList.add('error');
                    valid = false;
                    console.log('Password and confirm password must be same');
                }
                else{
                    const errorMsg = document.getElementById('confirmPasswordError');
                    errorMsg.innerHTML = '';
                    //remove error border
                    userInput.classList.remove('error');
                    valid = true;
                    console.log('ok')
                }
            }
        }
        else if(input.getAttribute('name') == 'firstName') {
            const name = document.getElementById('first-name');
    
            const regex = /^[a-zA-Z]{2,15}$/;
            
            if(!regex.test(name.value)){
            //alert("name contain letters only between 2 to 15 characters");
                const errorMsg = document.getElementById('firstNameError');
                errorMsg.innerHTML = 'name contain letters only between 2 to 15 characters';
                //add error border
                name.classList.add('error');
                valid = false;
                console.log('name not ok')
            }
            else{
                const errorMsg = document.getElementById('firstNameError');
                errorMsg.innerHTML = '';
                //remove error border
                name.classList.remove('error');
                valid = true;
                console.log('ok')
            }
        }
        else if(input.getAttribute('name') == "dob") {
            const userInput = document.getElementById('date-birth');
            
            const regex = /^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;

            const current = new Date();
            const birthDate = new Date(userInput.value);
            const daysBetween = Math.round((current.getTime() - birthDate.getTime()) / (1000*60*60*24));
            const age = daysBetween/365;
            console.log(age)
            if(userInput.value == ""){
                // this.user.dateError = "Birth date required";
                // this.displayErrorMessage(2,this.user.dateError);
                const errorMsg = document.getElementById('dobError');
                errorMsg.innerHTML = 'Birth date required';
                //add error border
                userInput.classList.add('error');
                valid = false;
                console.log('name not ok')
                }
                else if(regex.test(userInput.value) == false){
                const errorMsg = document.getElementById('dobError');
                errorMsg.innerHTML = 'Invalid date format(dd/mm/yyy)';
                //add error border
                userInput.classList.add('error');
                valid = false;
                console.log('name not ok')
                }
                else if(age < 20){
                // this.user.dateError = "Eligible once you are 20";
                // this.displayErrorMessage(2,this.user.dateError);
                const errorMsg = document.getElementById('dobError');
                errorMsg.innerHTML = 'Eligible once you are 20';
                //add error border
                userInput.classList.add('error');
                valid = false;
                console.log('name not ok')
                }
                else{
                errorMsg = document.getElementById('dobError');
                errorMsg.innerHTML = '';
                //remove error border
                userInput.classList.remove('error');
                valid = true;
                console.log('ok')
            }
        }

    });

    console.log(valid)
    
    if(valid){
        currentTab += tab;
        showCurrentTab();
    }
})

function showCurrentTab() {
    formStep.forEach((step,index) => {
        // console.log("index : "+index);
        if(currentTab == index){
            step.classList.add("active");
        }
        else{
            step.classList.remove("active");
        }
    })
}

// console.log(formStep)



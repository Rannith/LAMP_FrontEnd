//-----------------------------------
//Create Element
//-----------------------------------

//const li = document.createElement('li');
//
//li.className = 'collection-item';
//
//li.id = 'new-item';
//
//li.setAttribute('title','new-element');
//
//li.appendChild(document.createTextNode('hello world'));
//
//const link = document.createElement('a');
//
//link.className = 'delete-item secondary-content';
//
//link.innerHTML = '<i class="fa fa-remove"></i>';
//
//li.appendChild(link);
//
//document.querySelector('ul.collection').appendChild(li);
//
//console.log(link);


//======================
//Replace element
//======================


//const newHeading = document.createElement('h3');
//
//newHeading.id = 'task-title';
//
//newHeading.append(document.createTextNode('Tasks'));
//
//const oldHeading = document.getElementById('task-title');
//
//const cardAction = document.querySelector('.card-action');
//
//cardAction.replaceChild(newHeading,oldHeading);
//
//console.log(cardAction);

//=======================
//Remove Element
//=======================

//const list = document.querySelectorAll('li');
//
//const lis = document.querySelector('ul');
//
//list[0].remove();
//
//lis.removeChild(list[3]);
//
//console.log(lis);

//=======================
//Event Listener
//=======================

//document.querySelector('.clear-tasks').addEventListener('click',onClick);
//
//function onClick(e){
////    console.log('Hello every one');
//    
//    let val;
//    
//    val = e.target.className;
//    val = e.target.
//    
//    val = e.timeStamp;
//    
//    val = e.clientX;
//     val = e.clientY;
//    
//    val = e.offsetX;
//    val = e.offsetY;
//    
//    console.log(val);
//    e.preventDefault();
//}

//=========================
//Mouse Events
//=========================

//const clrBtn = document.querySelector('.clear-tasks');
//const card = document.querySelector('.card-action');
//const head= document.querySelector('h5');

//clrBtn.addEventListener('click',eventAction);
//clrBtn.addEventListener('dblclick', eventAction);
//
//card.addEventListener('mousedown', eventAction);
//card.addEventListener('mouseup', eventAction);

//card.addEventListener('mouseenter',eventAction);
//card.addEventListener('mouseleave',eventAction);

//clrBtn.addEventListener('mouseover',eventAction);
//clrBtn.addEventListener('mouseout',eventAction);

//card.addEventListener('mousemove',eventAction);
//
////Event listner
//function eventAction(e){
//    
//    console.log(`Event Type :${e.type}`);
//    
//    head.textContent = `X-axis :${e.offsetX} Y-axis :${e.offsetY}`;
//    
//    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
//    
//    e.preventDefault();
//}
//
////console.log(head);

//=======================
//KEYBOARD INPUT EVENTS
//========================

//const form = document.querySelector('form');
//const taskInput = document.getElementById('task');
//const heading = document.querySelector('h5');

//form.addEventListener('submit', runEvent);
//taskInput.value = '';

//taskInput.addEventListener('keydown',runEvent);
//taskInput.addEventListener('keyup',runEvent);
//taskInput.addEventListener('focus',runEvent);
//taskInput.addEventListener('blur',runEvent);
//taskInput.addEventListener('cut',runEvent);
//taskInput.addEventListener('paste',runEvent);
/*---------------------------------------------
taskInput.addEventListener('select',runEvent);
this is used to change the selected event or see that value for selected event
---------------------------------------------*/
//
//function runEvent(e){
//    console.log(`type: ${e.type}`);
//    console.log(e.target.value);
    
//    heading.innerHTML = e.target.value;
//    console.log(taskInput.value);
  
    
   // e.preventDefault();
//}

//console.log(heading);


/*=====================
Event Bubbling and delegation
=======================*/


//Event bubbling

//document.querySelector('.card-title').addEventListener('click', function(e){
//    console.log('card-title');
//})
//
//document.querySelector('.card-content').addEventListener('click', function(e){
//    console.log('card-content');
//})
//
//document.querySelector('.card').addEventListener('click', function(e){
//    console.log('acrd');
//})
//
//document.querySelector('.col').addEventListener('click', function(e){
//    console.log('col');
//})

//Delegation

//const delItem = document.querySelector('.delete-item');
//
//delItem.addEventListener('click',eventAction);

//document.body.addEventListener('click', eventAction);
//
//function eventAction(e){
//
////    if(e.target.parentElement.className === 'delete-item secondary-content'){
////        console.log('delete item');
////    }
//        if(e.target.parentElement.classList.contains('delete-item')){
//        console.log('delete item');
//    }
//}

//
//let regex = /india/;
//
//let result = regex.exec('common india');
//
//console.log(result);




























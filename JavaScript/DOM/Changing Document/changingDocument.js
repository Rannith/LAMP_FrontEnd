changingDocument = function(){
    const content = document.getElementsByTagName('p');
    document.body.insertBefore(content[0],content[2]);
}

replaceNode = function(){
    const newNode = document.createTextNode('New Node was replaced Sucessfully');
    const element = document.getElementsByTagName('p')[0];

    element.replaceChild(newNode, element.childNodes[0]);
}
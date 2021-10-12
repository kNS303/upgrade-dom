

window.onload = function () {
    console.log('Ejercicio 2.1: ');
    addDivEmpty();

    console.log('Ejercicio 2.2: ');
    addDivAndP();

    console.log('Ejercicio 2.3: ');
    addDivAndPLoop();

    console.log('Ejercicio 2.4: ');
    addDivPAndText();
    
    console.log('Ejercicio 2.5: ');
    addTextH2();

    console.log('Ejercicio 2.6: ');
    addList();
    
    console.log('Ejercicio 2.7: ');
    removeClass();
    
    console.log('Ejercicio 2.8: ');
    addPText();

    console.log('Ejercicio 2.9: ');
    addTextIntoClass();
}


function addDivEmpty() {
    let newElem = document.createElement('div');
    document.body.appendChild(newElem);
}


function addDivAndP() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    let newP = document.createElement('p');
    newDiv.appendChild(newP);
}


function addDivAndPLoop() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    for (let index = 1; index < 7; index++) {
        let newP = document.createElement('p');
        newDiv.appendChild(newP);
    }
}


function addDivPAndText() {
    let newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    let newP = document.createElement('p');
    let newContent = document.createTextNode('Soy dinámico!');
    newP.appendChild(newContent);
    newDiv.appendChild(newP);
}


function addTextH2() {
    let elements = document.getElementsByClassName('fn-insert-here');
    elements[0].innerHTML += 'Wubba Lubba dub dub';
}


function addList() {
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    let newElem = document.createElement('ul');
    for (const app of apps) {
        let newContent = document.createElement('li');
        newContent.innerHTML += app;
        newElem.appendChild(newContent);
    }
    document.body.appendChild(newElem);
}


function removeClass() {
    let elements = document.getElementsByClassName('fn-remove-me');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function addPText() {
    let elements = document.querySelectorAll('div');
    const firstElementDiv = elements[0];
    const newP = document.createElement('p');
    newP.textContent = 'Voy en medio!'; 
    firstElementDiv.insertAdjacentElement("afterend", newP);
}


function addTextIntoClass() {
    let elements = document.getElementsByClassName('fn-insert-here');
    for (const element of elements) {
        const newP = document.createElement('p');
        newP.textContent = 'Voy en medio!'; 
        element.insertAdjacentElement("beforeend", newP);
    }
}

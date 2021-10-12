
const selectorButton = 'button';
const selectorH1 = 'h1';
const selectorP = 'p';

const claseOne = '.showme';
const claseTwo = '.pokemon';

const idOne = '#pillado';

const atribute = '[data-function="testMe"]';

const allPosition = 0;
const position = 3;

window.onload = function () {
    console.log('Ejercicio 1.1: ');
    showElement(selectorButton);
    showElement(claseOne);
    console.log('Ejercicio 1.2: ');
    showElement(selectorH1);
    showElement(idOne);
    console.log('Ejercicio 1.3: ');
    showElements(selectorP, allPosition);
    console.log('Ejercicio 1.4: ');
    showElements(claseTwo, allPosition);
    console.log('Ejercicio 1.5: ');
    showElements(atribute, allPosition);
    console.log('Ejercicio 1.6: ');
    showElements(atribute, position);
}


function showElement(selector) {
    let element = document.querySelector(selector);
    console.log(`El contenido del selector ${selector} es: ${element.textContent}`);
}


function showElements(selector, viewElement) {
    let elements = document.querySelectorAll(selector);
    console.log(`El contenido de los selectores ${selector} es:`);
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        let position = index + 1;
        if (viewElement == 0) {
            console.log(`Elemento ${position}: ${element.textContent}`);
        } else if (viewElement == (index+1)) {
            console.log(`Elemento ${position}: ${element.textContent}`);
        }
    }
}

// let element = document.querySelector('#idName');
// // element.remove();
// element.classList.add('className');


// let container = document.querySelector('.container');
// container.prepend(element);

// container.replaceWith(element);

// element.classList.add('NameForCSSAnimationClass');

// let items = document.querySelectorAll('.allElementsWithItemName');

// element.addEventListener('click', function(){
//     console.log('you clicked');
// });

const radioEventListener = () => {
    let radios = document.getElementsByClassName('radio-button');
    for(let i = 0, limit = radios.length; i < limit; i++){
        radios[i].addEventListener('click', function(){
            console.log(radios[i].value);
        });
    
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // let modalControls = document.querySelectorAll('.radio-button');
    radioEventListener();
});


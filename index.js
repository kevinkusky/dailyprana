document.addEventListener("DOMContentLoaded", () => {
    let animationParams;
    let form = document.querySelector(".app-director-form");

    const circleDirections = params => {
        // Destructure params and ensure int for calc
        let {breath, inhale, exhale, pause} = params;
        inhale = parseInt(inhale);
        exhale = parseInt(exhale);
        pause = parseInt(pause);

        let totTime, keyFrame, style, circleName;

        style = document.createElement('style');
        style.type = 'text/css';

        circleName = document.querySelector('.circle');
        circleName.classList.add(breath);
        
        switch(breath){
            case 'ocean':
                // Counts pause time for both inhale and exhale
                totTime = inhale + exhale + ( 2 * pause );

                // keyframe variable utilizes time params to calc %s allowing pausing to function
                keyFrame = `@keyframes ocean-breath {
                    0%,
                    ${( (( totTime - pause ) / totTime ) * 100 )}%,
                    100% {
                        height: 200px;
                        width: 200px;
                        border: 10px solid black;
                    }
                    ${(((inhale + pause + inhale) / 2 ) / totTime) * 100 }%,
                    ${ ( ( (totTime + totTime - pause) / 2) / totTime) * 100 }% {
                        border: 2px dashed rgb(42, 121, 134);
                    }
                    ${( ( inhale / totTime ) * 100 )}%,
                    ${( ( ( inhale + pause ) / totTime ) * 100 )}% {
                        height: 650px;
                        width: 650px;
                        border: 10px solid black;
                    }
                }`;

                // adds animation to be picked up by below CSS call
                style.innerHTML = keyFrame;
                document.getElementsByTagName('head')[0].appendChild(style);

                circleName.style.animation = `
                    ocean-breath ${totTime}s 2s linear infinite
                `;
                break;
            case 'alternate':
                // per side params => double time
                totTime =  2 * ( inhale + exhale + (2 * pause) );

                keyFrame = `@keyframes alt-breath {
                    0%,
                    ${50 - ((pause / totTime) * 100)}%,
                    50%,
                    ${(( totTime - pause) / totTime) * 100 }%,
                    100% {
                        width: 200px; 
                        height: 200px;
                        margin-left: 0;
                        margin-right: 0;
                        border: 10px solid black;
                    }
                    ${(inhale / totTime) * 100}%,
                    ${((inhale + pause) / totTime) * 100}% {
                        width: 600px;
                        height: 300px;
                        margin-left: 400px;
                        border: 10px solid black;
                    }
                    ${ ((inhale + (pause / 2)) / totTime) *100}% {
                        border: 3px dotted rgb(146, 70, 177);
                    }
                    ${ 50 + (((inhale + (pause / 2)) / totTime) * 100)}% {
                        border: 3px dotted rgb(150, 151, 57);
                    }
                    ${ 50 - (((pause/ 2) / totTime) * 100) }%,
                    ${ ((totTime - (pause / 2)) / totTime) * 100 }% {
                        border: 3px dotted whitesmoke;
                    }
                    ${ 50 + ((inhale / totTime) * 100)}%,
                    ${ 50 + (((inhale + pause)/ totTime) * 100)}% {
                        width: 600px;
                        height: 300px;
                        margin-right: 400px;
                        border: 10px solid black;
                    }
                }`;

                // adds animation to be picked up by below CSS call
                style.innerHTML = keyFrame;
                document.getElementsByTagName('head')[0].appendChild(style);

                circleName.style.animation = `
                    alt-breath ${totTime}s 2.5s linear infinite
                `;
                break;
            case 'fire':
                // while loop allows small %s for pulse effect
                // to be efficently destructured into the keyframe

                let bigPulse = [];
                let littlePulse = [];

                // time of pulse vs total time converted to a %
                let aggregator = ( 0.3 / 90 ) * 100;
                let arrayFlag = true;
                let i = 24.444;

                while (i < 91.111){
                    let percent = `${i}%`;
                    if (arrayFlag){
                        bigPulse.push(percent);
                    } else {
                        littlePulse.push(percent);
                    }
                    arrayFlag = !arrayFlag;
                    i += aggregator;
                }
            
                keyFrame = `@keyframes fire-breath {
                    0%,
                    15.556%, 17.778%,
                    97.778%, 100% {
                        height: 200px;
                        width: 200px;
                        border: 10px solid black; 
                    }
                    7.778%, 16.667% {
                        border: 4px dotted rgb(196, 68, 8);
                    }
                    6.667%, 8.889%, 
                    ${[...bigPulse]} {
                        border: 10px solid black; 
                        height: 650px;
                        width: 650px;
                    }
                    ${[...littlePulse]} {
                        height: 550px;
                        width: 550px;
                        border: 6px dashed rgb(212, 88, 31);
                    }
                }`;

                // adds animation to be picked up by below CSS call
                style.innerHTML = keyFrame;
                document.getElementsByTagName('head')[0].appendChild(style);

                circleName.style.animation = `
                    fire-breath 90s 3.5s linear infinite
                `;
                break;
            default: 
                // shouldn't get here - break incase
                break;
        }
    };

    const formValidation = params => {
        let {breath, inhale, exhale, pause} = params;

        if (breath === 'fire') return true;

        if([inhale, exhale, pause].every(val => Number.isInteger(val))){
            return true;
        } else {
            return false;
        }
    };
            
    // Handle Submit informing animations per user input
    const formSubmit = e => {
        e.preventDefault();

        // pass params to directions function to dynamically control animations

        if(formValidation(animationParams)){
            // removes the form from the DOM
            let modalForm = document.querySelector(".page-wrapper");
            modalForm.remove();

            // Queries circle div and renames for CSS display
            let circlePage = document.querySelector(".eventual-circle");
            circlePage.classList.add("circle-page-wrap");
            circlePage.classList.remove("eventual-circle");

            circleDirections(animationParams);
        } else {
            alert('Inputs must be Integers - Please enter correct values')
        }
    };

    form.addEventListener("submit", formSubmit);

    // Listens to Radio buttons and dynamically renders HTML
    const radioFormDirector = () => {
        let radios = document.getElementsByClassName("radio-button");

        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener("change", () => {
                // switch will listen for active button
                switch (radios[i].value) {
                    case "fire":
                        fireBreathForm();
                        break;
                    case "ocean":
                        oceanBreathForm();
                        break;
                    case "alternate":
                        altBreathForm();
                        break;
                }
            });
        }
    };

  radioFormDirector();
});
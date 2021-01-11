import altBreathForm from './src/forms/alt.js';
import fireBreathForm from './src/forms/fire.js';
import oceanBreathForm from './src/forms/ocean.js';
import circleDirections from './src/circle/directions.js'

document.addEventListener("DOMContentLoaded", () => {
    let animationParams;
    let form = document.querySelector(".app-director-form");

    const formValidation = params => {
        let {breath, inhale, exhale, pause} = params;
        inhale = parseInt(inhale);
        exhale = parseInt(exhale);
        pause = parseInt(pause);

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
        let inhaleInput, exhaleInput, pauseInput;

        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener("change", () => {
                // switch will listen for active button
                switch (radios[i].value) {
                    case "fire":
                        fireBreathForm();
                        // No user choice for this breath - passes name for switches
                        animationParams = { breath: "fire" };
                        break;
                    case "ocean":
                        oceanBreathForm();
                        inhaleInput = document.querySelector('.inhale-input');
                        inhaleInput.addEventListener('change', e => {
                            animationParams.inhale = e.target.value;
                        });

                        exhaleInput = document.querySelector('.exhale-input');
                        exhaleInput.addEventListener('change', e => {
                            animationParams.exhale = e.target.value;
                        });

                        pauseInput = document.querySelector('.pause-input');
                        pauseInput.addEventListener('change', e => {
                            animationParams.pause = e.target.value;
                        });

                        pauseInput.addEventListener('invalid', () => {
                            pauseInput.value = 0;
                            animationParams.pause = 0;
                            alert('Pause Input Defaults to 0 - Please ReSubmit');
                        });

                        animationParams = {
                            breath: "ocean",
                            inhale: inhaleInput,
                            exhale: exhaleInput,
                            pause: pauseInput,
                        };
                        break;
                    case "alternate":
                        altBreathForm();
                        inhaleInput = document.querySelector('.inhale-input');
                        inhaleInput.addEventListener('change', e => {
                            animationParams.inhale = e.target.value;
                        });

                        exhaleInput = document.querySelector('.exhale-input');
                        exhaleInput.addEventListener('change', e => {
                            animationParams.exhale = e.target.value;
                        });

                        pauseInput = document.querySelector('.pause-input');
                        pauseInput.addEventListener('change', e => {
                            animationParams.pause = e.target.value;
                        });

                        pauseInput.addEventListener('invalid', (e) => {
                            // e.target.setCustomValidity('Pause Input Defaults to 0 - Please ReSubmit');
                            pauseInput.value = 0;
                            animationParams.pause = 0;
                            alert('Pause Input Defaults to 0 - Please ReSubmit');
                        });

                        animationParams = {
                            breath: "alternate",
                            inhale: inhaleInput,
                            exhale: exhaleInput,
                            pause: pauseInput,
                        };
                        break;
                }
            });
        }
    };

  radioFormDirector();
});
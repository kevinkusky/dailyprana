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
        if (pause === '') {
            let pauseInput = document.querySelector('.pause-input');
            pauseInput.value = '0';
            animationParams.pause = 0;
            pause = 0;
        }

        console.log(pause);
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

    // Specifications for Ujjayi Breathing
    const oceanBreathForm = () => {
        let descriptorPar = document.querySelector(".selected-breath-description");
        descriptorPar.innerHTML = `
            <p class='breath-descriptor'>
                The Ujjayi breathing technique might be familiar if you have practiced yoga before.
                Ujjayi breath is sometimes refered to as a breath of victory or an oceanic breath.  The inhale is an audible breath
                with some constriction from the back of the throat.  Your exhales can be thought of as trying to fog up a mirror.  
                To begin your practice, please fill out the form for inhale and exhale times. 
                If you wish, I have also included a pause time if you wish to add an apnea to your practice.
            </p>
        `;

        let breathParamsField = document.querySelector(".breath-specific-options");

        // inserts inputs and adds event listeners
        breathParamsField.innerHTML = `
            <div class='input-group'>
                <div class='input-container'>
                    <input 
                        type = "text" 
                        name = 'inhale' 
                        class = 'inhale-input' 
                        required
                    >
                    <label for="inhale">Inhale</label>
                </div>
                <div class='input-container'>
                    <input type="text" name='exhale' class='exhale-input' required >
                    <label for="exhale">Exhale</label>
                </div>
                <div class='input-container'>
                    <input 
                        type = "text" 
                        name = 'pause' 
                        class = 'pause-input' 
                        required
                        oninvalid = 'value = 0'
                    >
                    <label for="pause">Pause</label>
                </div>
            </div>
        `;

        let inhaleInput = document.querySelector('.inhale-input');
        inhaleInput.addEventListener('change', e => {
            animationParams.inhale = e.target.value;
        });

        let exhaleInput = document.querySelector('.exhale-input');
        exhaleInput.addEventListener('change', e => {
            animationParams.exhale = e.target.value;
        });

        let pauseInput = document.querySelector('.pause-input');
        pauseInput.addEventListener('change', e => {
            animationParams.pause = e.target.value;
        });

        let oceanFormSubmit = document.querySelector(".inactive-submit");
        oceanFormSubmit.classList.add("show-submit");
        
        animationParams = {
            breath: "ocean",
            inhale: inhaleInput,
            exhale: exhaleInput,
            pause: pauseInput,
        };
    };

    // Fire breath specifications
    const fireBreathForm = () => {
        let descriptorPar = document.querySelector(".selected-breath-description");
        descriptorPar.innerHTML = `
            <p class='breath-descriptor'>
                Kapalabhati, or skull shining breath, is a yogic breathing technique aimed to clear the mind, 
                energize the body, and stimulate digestion.  To practice this breath, 
                first start with a long inhale and exhale to prepare for the practice.
                Next, take a deep inhale to set up the breath which should have the following intentions:
                The exhalation is a forceful contracting of the abdomen, while the inhale is more of a passive and automatic response to the exhale.
                While the cues should assist, the intention should be to follow a steady and rigorous rythm that is not strenuous 
                to maintain.  To start your practice, you only need to press the Start button and enjoy your practice.
                <a target='_blank' href='https://youtu.be/y364TyKk5Fg?t=131'>Follow video for further instruction</a>
            </p>
        `;

        let breathParamsField = document.querySelector(".breath-specific-options");
        breathParamsField.innerHTML = "";

        // No user choice for this breath - passes name for switches
        animationParams = { breath: "fire" };

        let fireFormSubmit = document.querySelector(".inactive-submit");
        fireFormSubmit.classList.add("show-submit");
    };

    // Alt Nost Breathing Specifications 
    const altBreathForm = () => {
        // modal descriptor and append for animation details

        let descriptorPar = document.querySelector(".selected-breath-description");
        descriptorPar.innerHTML = `
            <p class='breath-descriptor'>
                Nadi Shodhana is known as Alternate Nostril Breathing.  As the name might suggest,
                this breath will involve using the hands as a way of restricting the breath in and out of one nostral at a time.
                This type of breathing can help balance the hemispheres of the brain as well as help focus the mind and purify
                the central nervous system. This is a great breath to practice before a meditation practice. As a suggestion,
                begin your practice with an inhale from the left nostral with your right thumb blocking the right nasal passage.
                Each inhale is to be followed with an exhale through the opposite nostral. To start your practice, please fill out 
                the form for inhale and exhale times.  Also, there is an optional pause time which will add an apnea after each inhalation.
                <a target='_blank' href='https://youtu.be/l11qFpRqhIQ?t=122'>Follow video for further instruction</a>
            </p>
        `;

        // Inserts inputs and adds event listeners
        let breathParamsField = document.querySelector(".breath-specific-options");
        breathParamsField.innerHTML = `
            <div class='input-group'>
                <div class='input-container'>
                    <input type="text" name='inhale' class='inhale-input' required>
                    <label for="inhale">Inhale</label>
                </div>
                <div class='input-container'>
                    <input type="text" name='exhale' class='exhale-input' required>
                    <label for="exhale">Exhale</label>
                </div>
                <div class='input-container'>
                    <input type="text" name='pause' class='pause-input' required oninvalid = 'value = 0' >
                    <label for="pause">Pause</label>
                </div>
            </div>
        `;

        let inhaleInput = document.querySelector('.inhale-input');
        inhaleInput.addEventListener('change', e => {
            animationParams.inhale = e.target.value;
        });

        let exhaleInput = document.querySelector('.exhale-input');
        exhaleInput.addEventListener('change', e => {
            animationParams.exhale = e.target.value;
        });

        let pauseInput = document.querySelector('.pause-input');
        pauseInput.addEventListener('change', e => {
            animationParams.pause = e.target.value;
        });

        animationParams = {
            breath: "alternate",
            inhale: inhaleInput,
            exhale: exhaleInput,
            pause: pauseInput,
        };

        let altFormSubmit = document.querySelector(".inactive-submit");
        altFormSubmit.classList.add("show-submit");
    };

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
// Specifications for Ujjayi Breathing
export const oceanBreathForm = () => {

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
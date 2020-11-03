// container.prepend(element);
// container.replaceWith(element);

// create 1 submit handle
let animationParams;

const formSubmit = (params) => {
    let form = document.querySelector('.app-director-form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let radios = document.getElementsByClassName('radio-button');
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked && radios[i].value === params.breath){
                console.log(params);
            }
        }

        let modalForm = document.querySelector('.page-wrapper');
        modalForm.remove();

        let circlePage = document.querySelector('.eventual-circle');
        circlePage.classList.remove('eventual-circle');
        circlePage.classList.add('circle-page-wrap');
    });
};

const oceanBreathForm = () => {
    let descriptorPar = document.querySelector('.selected-breath-description');
    descriptorPar.innerHTML = `
    <p class='breath-descriptor'>
        The Ujjayi breathing technique might be familiar if you have practiced yoga before.
        Ujjayi breath is sometimes refered to as a breath of victory or an oceanic breath.  The inhale is an audible breath
        with some constriction from the back of the throat.  Your exhales can be thought of as trying to fog up a mirror.  
        To begin your practice, please fill out the form for inhale and exhale times. 
        If you wish, I have also included a pause time if you wish to add an apnea to your practice.
    </p>
    `;

    let breathParamsField = document.querySelector('.breath-specific-options');
    breathParamsField.innerHTML = `
        <div class='input-group'>
            <div>
                <input type="text" name='inhale' class='inhale-input' >
                <label for="inhale">Inhale</label>
            </div>
            <div>
                <input type="text" name='pause' class='pause-input' >
                <label for="pause">Pause</label>
            </div>
            <div>
                <input type="text" name='exhale' class='exhale-input'>
                <label for="exhale">Exhale</label>
            </div>
        </div>
    `;
        // saved incase needed
        // <div>
        //     <input type="text" name='total'>
        //     <label for="total">Total Time</label>
        // </div>

    let oceanFormSubmit = document.querySelector('.inactive-submit');
    oceanFormSubmit.classList.add('show-submit');

    animationParams = {
        breath: 'ocean',
        // inhale: inhaleInput.value,
        inhale: 5,
        // exhale: exhaleInput.value,
        exhale: 5,
        // pause: pauseInput.value ? pauseInput.value : 0,
        pause: 5,
    };

    formSubmit(animationParams);

};

const fireBreathForm = () => {
    // if selected add the descriptor to the modal and
    // append submit button - defaults for animations

    let descriptorPar = document.querySelector('.selected-breath-description');
    descriptorPar.innerHTML = `
    <p class='breath-descriptor'>
        Kapalabhati, or skull shining breath, is a yogic breathing technique aimed to clear the mind, 
        energize the body, and stimulate digestion.  To practice this breath, 
        first start with a long inhale and exhale to prepare for the practice.
        Next, take a deep inhale to set up the breath which should have the following intentions:
        The exhalation is a forceful contracting of the abdomen, while the inhale is more of a passive and automatic response to the exhale.
        While the cues should assist, the intention should be to follow a steady and rigorous rythm that is not strenuous 
        to maintain.  To start your practice, you only need to press the Start button and enjoy your practice.
    </p>`;

    let breathParamsField = document.querySelector('.breath-specific-options');
    breathParamsField.innerHTML = '';

    animationParams = {
        breath: 'fire',
        inhale: 5,
        exhale: 5,
        cycle: 60,
    };

    let fireFormSubmit = document.querySelector('.inactive-submit');
    fireFormSubmit.classList.add('show-submit');

    formSubmit(animationParams);
};

const altBreathForm = () => {
    // modal descriptor and append for animation details
    // optional pause time, breath time
    let descriptorPar = document.querySelector('.selected-breath-description');
    descriptorPar.innerHTML = `
    <p class='breath-descriptor'>
        Nadi Shodhana is known as Alternate Nostril Breathing.  As the name might suggest,
        this breath will involve using the hands as a way of restricting the breath in and out of one nostral at a time.
        This type of breathing can help balance the hemispheres of the brain as well as help focus the mind and purify
        the central nervous system. This is a great practice to add before a meditation practice.  To practice this breath
        a good cue is to place your pointer and middle fingers in the spot your eyebrows would meet and to utilize
        the thumb and knuckle of your ring finger to block each side of your nose as necissary.  As a suggestion,
        begin your practice with an inhale from the left nostral with your right thumb blocking the right nasal passage.
        Each inhale is to be followed with an exhale through the opposite nostral.  
        To start your practice, please fill our the form for inhale and exhale times.  Also, there is an optional pause time
        which will add an apnea after each inhalation.
    </p>
    `;

    animationParams = {
        breath: 'alternate',
        // inhale: inhaleInput.value,
        inhale: 5,
        // exhale: exhaleInput.value,
        exhale: 5,
        // pause: pauseInput.value ? pauseInput.value : 0,
        pause: 5,
    };

    let breathParamsField = document.querySelector('.breath-specific-options');
    breathParamsField.innerHTML = '';

    let altFormSubmit = document.querySelector('.inactive-submit');
    altFormSubmit.classList.add('show-submit');


    formSubmit(animationParams);
};

const radioFormDirector = () => {
    let radios = document.getElementsByClassName('radio-button');
    for(let i = 0; i < radios.length; i++){
        radios[i].addEventListener('change', () => {
            switch(radios[i].value){
                case('fire'):
                    fireBreathForm();
                    break;
                case('ocean'):
                    oceanBreathForm();
                    break;
                case('alternate'):
                    altBreathForm();
                    break;
                default:
                    // console.log('broke');
                    break;
            }
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    radioFormDirector();
});
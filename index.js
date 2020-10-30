// let container = document.querySelector('.container');
// container.prepend(element);

// container.replaceWith(element);

let animationParams;

const oceanBreathForm = () => {
    let descriptorPar = document.querySelector('.breath-descriptor');
    descriptorPar.innerHTML = `The Ujjayi breathing technique might be familiar if you have practiced yoga before.
    Ujjayi breath is sometimes refered to as a breath of victory or an oceanic breath.  The inhale is an audible breath
    with some constriction from the back of the throat.  Your exhales can be thought of as trying to fog up a mirror.  
    To begin your practice, please fill out the form for inhale and exhale times. 
    If you wish, I have also included a pause time if you wish to add an apnea to your practice.`;

    let breathParamsField = document.querySelector('.breath-specific-options');

    breathParamsField.insertAdjacentHTML('afterbegin', `
        <div>
            <input type="text" name='inhale' >
            <label for="inhale">Inhale</label>
        </div>
        <div>
            <input type="text" name='pause' >
            <label for="pause">Pause</label>
        </div>
        <div>
            <input type="text" name='exhale'>
            <label for="exhale">Exhale</label>
        </div>
        <div>
            <input type="text" name='total'>
            <label for="total">Total Time</label>
        </div>
    `);

    let oceanFormSubmit = document.querySelector('.inactive-submit');
    oceanFormSubmit.classList.add('show-submit');


    let oceanForm = document.querySelector('.app-director-form');

    oceanForm.addEventListener('submit', e => {
        e.preventDefault();
        animationParams = {
            breath: 'ocean',
            // inhale: inhaleInput.value,
            inhale: 5,
            // exhale: exhaleInput.value,
            exhale: 5,
            // pause: pauseInput.value ? pauseInput.value : 0,
            pause: 5,
        };
        console.log(animationParams);
    });
};

const fireBreathForm = () => {
    // if selected add the descriptor to the modal and
    // append submit button - defaults for animations

    let descriptorPar = document.querySelector('.breath-descriptor');

    descriptorPar.innerHTML = `Kapalabhati, or skull shining breath, is a 
        yogic breathing technique aimed to clear the mind, energize the body, and stimulate digestion.
        To practice this breath, first start with a long inhale and exhale to prepare for the practice.
        Next, take a deep inhale to set up the breath which should have the following intentions:
        The exhalation is a forceful contracting of the abdomen, while the inhale is more of a passive and automatic response to the exhale.
        While the cues should assist, the intention should be to follow a steady and rigorous rythm that is not strenuous 
        to maintain.  To start your practice, you only need to press the Start button and enjoy your practice.`;

    // let breathParamsField = document.querySelector('.breath-specific-options');

    let fireForm = document.querySelector('.app-director-form');

    fireForm.addEventListener('submit', e => {
        e.preventDefault();
        animationParams = {
            breath: 'fire',
            inhale: 5,
            exhale: 5,
            cycle: 60,
        };
        console.log(animationParams);
    });

    let fireFormSubmit = document.querySelector('.inactive-submit');
    fireFormSubmit.classList.add('show-submit');
};

const altBreathForm = () => {
    // modal descriptor and append for animation details
    // optional pause time, breath time
    let descriptorPar = document.querySelector('.breath-descriptor');

    descriptorPar.innerHTML = `Nadi Shodhana is known as Alternate Nostril Breathing.  As the name might suggest,
        this breath will involve using the hands as a way of restricting the breath in and out of one nostral at a time.
        This type of breathing can help balance the hemispheres of the brain as well as help focus the mind and purify
        the central nervous system. This is a great practice to add before a meditation practice.  To practice this breath
        a good cue is to place your pointer and middle fingers in the spot your eyebrows would meet and to utilize
        the thumb and knuckle of your ring finger to block each side of your nose as necissary.  As a suggestion,
        begin your practice with an inhale from the left nostral with your right thumb blocking the right nasal passage.
        Each inhale is to be followed with an exhale through the opposite nostral.  
        To start your practice, please fill our the form for inhale and exhale times.  Also, there is an optional pause time
        which will add an apnea after each inhalation.`;

    // let breathParamsField = document.querySelector('.breath-specific-options');
    let altForm = document.querySelector('.app-director-form');

    altForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Nadi Submit');
    });

    let altFormSubmit = document.querySelector('.inactive-submit');
    altFormSubmit.classList.add('show-submit');
};

const radioFormDirector = () => {
    let radios = document.getElementsByClassName('radio-button');
    for(let i = 0; i < radios.length; i++){
        radios[i].addEventListener('click', () => {
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
            // activeVal = radios[i].checked ? radios[i].value : '';
            // // activeVal = '';
            // // activeVal = radios[i].value;
            // switch(activeVal){
            //     case('fire'):
            //         fireBreathForm();
            //         break;
            //     case('ocean'):
            //         oceanBreathForm();
            //         break;
            //     case('alternate'):
            //         altBreathForm();
            //         break;
            //     default:
            //         // console.log('broke');
            //         break;
            // }
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    radioFormDirector();
});
document.addEventListener("DOMContentLoaded", () => {

let animationParams;
let form = document.querySelector(".app-director-form");

// Handle Submit for taking user data and informing animations
const formSubmit = e => {
    e.preventDefault();
    let modalForm = document.querySelector(".page-wrapper");
    modalForm.remove();
    
    console.log(animationParams); 
    
    let circlePage = document.querySelector(".eventual-circle");
    circlePage.classList.add("circle-page-wrap");
    circlePage.classList.remove("eventual-circle");

    let circleName = document.querySelector('.circle');
    circleName.classList.add(animationParams.breath);

    // if animationParams.cycle
    circleName.dataset.inhale = animationParams.inhale;
    circleName.dataset.exhale = animationParams.exhale;
    circleName.dataset.pause = animationParams.pause;
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
  breathParamsField.innerHTML = `
        <div class='input-group'>
            <div class='input-container'>
                <input type="text" name='inhale' class='inhale-input' required=' '>
                <label for="inhale">Inhale</label>
            </div>
            <div class='input-container'>
                <input type="text" name='exhale' class='exhale-input' required=' '>
                <label for="exhale">Exhale</label>
            </div>
            <div class='input-container'>
                <input type="text" name='pause' class='pause-input' required=' '>
                <label for="pause">Pause</label>
            </div>
        </div>
    `;
  // saved incase needed
  // <div>
  //     <input type="text" name='total'>
  //     <label for="total">Total Time</label>
  // </div>

  let oceanFormSubmit = document.querySelector(".inactive-submit");
  oceanFormSubmit.classList.add("show-submit");

  
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
        animationParams.pause = e.target.value.length > 0 ? e.target.value : 0;
  });
    
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
    </p>`;

  let breathParamsField = document.querySelector(".breath-specific-options");
  breathParamsField.innerHTML = "";

//   No user choice for this breath - current placeholder until more complete.
  animationParams = {
    breath: "fire",
    inhale: 5,
    exhale: 5,
    cycle: 60,
  };

  let fireFormSubmit = document.querySelector(".inactive-submit");
  fireFormSubmit.classList.add("show-submit");

};

// Alt Nost Breathing Specifications 
const altBreathForm = () => {
  // modal descriptor and append for animation details
  // optional pause time, breath time
  let descriptorPar = document.querySelector(".selected-breath-description");
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

  let breathParamsField = document.querySelector(".breath-specific-options");
  breathParamsField.innerHTML = `
        <div class='input-group'>
            <div class='input-container'>
                <input type="text" name='inhale' class='inhale-input' required=' '>
                <label for="inhale">Inhale</label>
            </div>
            <div class='input-container'>
                <input type="text" name='exhale' class='exhale-input' required=' '>
                <label for="exhale">Exhale</label>
            </div>
            <div class='input-container'>
                <input type="text" name='pause' class='pause-input' required=' '>
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
      animationParams.pause = e.target.value.length > 0 ? e.target.value : 0;
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
        //   console.log(radios[i].value);
          fireBreathForm();
          break;
        case "ocean":
        //   console.log(radios[i].value);
          oceanBreathForm();
          break;
        case "alternate":
        //   console.log(radios[i].value);
          altBreathForm();
          break;
        default:
          break;
      }
    });
  }
};

  radioFormDirector();
});
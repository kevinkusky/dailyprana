// Fire breath specifications
export const fireBreathForm = () => {
    let animationParams;

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
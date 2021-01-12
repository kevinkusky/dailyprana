// Fire breath specifications
const fireBreathForm = () => {
    let descriptorPar = document.querySelector(".selected-breath-description");
    descriptorPar.innerHTML = `
            <span class='breath-descriptor'>
                Kapalabhati breath is also known as skull shining breath
                <br>
                <br>
                Kapalabhati is a yogic breathing technique aimed to clear the mind, 
                energize the body, and stimulate digestion.
                <br>
                <br>
                To practice this breath, Follow these instructions with the animation:
                <br>
                <a target='_blank' href='https://youtu.be/y364TyKk5Fg?t=131'>Follow video for more in debth breath description</a>
                <ul>
                    <li>Start with a long inhale and exhale to prepare for the practice.</li>
                    <li>Take one more deep inhale to set up the breath</li>
                    <li>Begin the Kapalabhati which should have the following intentions:
                        <ul>
                            <li>Exhalations have a forceful contraction of the abdomen</li>
                            <li>Inhalations are more passive - like an automatic response to the exhale</li>
                            <li>Together, your breaths should follow a steady and rigorous rythem that is not stenuous to maintain</li>
                        </ul>
                    </li>
                </ul>
                To start your practice, you only need to press the Start button and enjoy your practice.  
                <br>
                At any time you may press the SPACE BAR key to pause the display and access a menu or press the R key to navigate back to the home form.
            </span>
        `;

    let breathParamsField = document.querySelector(".breath-specific-options");
    breathParamsField.innerHTML = "";

    let fireFormSubmit = document.querySelector(".inactive-submit");
    fireFormSubmit.classList.add("show-submit");
};

export default fireBreathForm;
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
                <br>
                At any time you may press the SPACE BAR key to pause the display and access a menu.
                <br>
                <a target='_blank' href='https://youtu.be/l11qFpRqhIQ?t=122'>Follow video for a more in depth instruction on this breath</a>
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
                    <input type="text" name='pause' class='pause-input' required>
                    <label for="pause">Pause</label>
                </div>
            </div>
        `;

    let altFormSubmit = document.querySelector(".inactive-submit");
    altFormSubmit.classList.add("show-submit");
};

export default altBreathForm;
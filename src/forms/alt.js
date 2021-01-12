// Alt Nost Breathing Specifications 
const altBreathForm = () => {
    // modal descriptor and append for animation details
    let descriptorPar = document.querySelector(".selected-breath-description");
    descriptorPar.innerHTML = `
            <span class='breath-descriptor'>
                Nadi Shodhana is known as Alternate Nostril Breathing.
                <br>
                <br>
                As the name might imply, this breath will involve using the hands 
                as a way of restricting the breath in and out of one nostral at a time.
                <br>
                <br>
                This type of breathing can help balance the hemispheres of the brain as well as help focus the mind and purify
                the central nervous system.
                <br>
                This is a great breath to practice before a meditation practice. 
                To follow along with the animation to practice this breath follow these instructions:
                <br>
                <a target='_blank' href='https://youtu.be/l11qFpRqhIQ?t=122'>Follow video for a more in depth instruction on this breath</a>
                <ul>
                    <li>Utilize your right thumb and ring finger to alternate blocking your left and right nasal passages</li>
                    <li>Begin your practice with your thumb blocking your right nostral - inhaling into the left nasal passage</li>
                    <li>On the exhale, block your left nostral with your ring finger and release the right nasal passage - exhaling out</li>
                    <li>If you added a pause or apnea to your practice, you may wish to hold or release both nasal passages</li>
                </ul>
                To start your practice, please fill out the form for inhale and exhale times.  Also, there is an optional pause time which will add an apnea after each part of the breath.
                <br>
                At any time you may press the SPACE BAR key to pause the display and access a menu or press the R key to navigate back to the home form.
            </span>
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
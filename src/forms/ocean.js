// Specifications for Ujjayi Breathing
const oceanBreathForm = () => {

    let descriptorPar = document.querySelector(".selected-breath-description");
    descriptorPar.innerHTML = `
        <span class='breath-descriptor'>
            The Ujjayi breathing technique might be familiar if you have practiced yoga before.
            <br>
            Ujjayi breath is sometimes refered to as a breath of victory or an oceanic breath.  
            
            To practice the breath with the animation:
            <ul>
                <li>
                    Audibly inhale through the nose with a slight 
                    constriction from the back of the throat
                </li>
                <li>
                    Exhales can come out of the mouth or nose, but the intention
                    of the breath would be as if you were trying to fog up a mirror
                </li>
            </ul> 
            To start your practice, please fill out the form for inhale and exhale times.  Also, there is an optional pause time which will add an apnea after each part of the breath.
            <br>
            At any time you may press the SPACE BAR key to pause the display and access a menu or press the R key to navigate back to the home form.
        </span>
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
                <input 
                    type = "text" 
                    name = 'exhale' 
                    class = 'exhale-input' 
                    required 
                >
                <label for="exhale">Exhale</label>
            </div>
            <div class='input-container'>
                <input 
                    type = "text" 
                    name = 'pause' 
                    class = 'pause-input' 
                    required
                >
                <label for = "pause">Pause</label>
            </div>
        </div>
    `;

    let oceanFormSubmit = document.querySelector(".inactive-submit");
    oceanFormSubmit.classList.add("show-submit");
};

export default oceanBreathForm;
const circleDirections = ({ breath, inhale, exhale, pause }) => {
    // Ensure int for calc
    inhale = parseInt(inhale);
    exhale = parseInt(exhale);
    pause = parseInt(pause);

    let totTime, keyFrame, styleElement, circleName;

    styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    circleName = document.querySelector('.circle');
    circleName.classList.add(breath);

    const modal = document.querySelector(".modal");
    const modalDescriptor = document.querySelector(".in-breath-about");

    switch (breath) {
        case 'ocean':
            // this line fixes incorrect color and border behavior 
            // with no pauseInput from user
            if (pause === 0) pause = 0.00001;
            // Counts pause time for both inhale and exhale
            totTime = inhale + exhale + (2 * pause);

            // keyframe variable utilizes time params to calc %s allowing pausing to function
            keyFrame = `@keyframes ocean-breath {
                    0%,
                    ${(((totTime - pause) / totTime) * 100)}%,
                    100% {
                        height: 200px;
                        width: 200px;
                        border: 10px solid black;
                    }
                    ${(((inhale + pause + inhale) / 2) / totTime) * 100}%,
                    ${(((totTime + totTime - pause) / 2) / totTime) * 100}% {
                        border: 2px dashed rgb(42, 121, 134);
                    }
                    ${((inhale / totTime) * 100)}%,
                    ${(((inhale + pause) / totTime) * 100)}% {
                        height: 650px;
                        width: 650px;
                        border: 10px solid black;
                    }
                }`;

            // adds animation to be picked up by below CSS call
            styleElement.innerHTML = keyFrame;
            document.getElementsByTagName('head')[0].appendChild(styleElement);

            modal.style.display = 'inline-block';
            modalDescriptor.innerHTML = `
                    <span class='current-animation-descriptor'>
                        You are currently practicing the Ujjayi Breath with:
                        <ul>
                            <li>Inhale: ${inhale} seconds</li>
                            <li>Exhale: ${exhale} seconds</li>
                            <li>Pause: ${pause} seconds</li>
                        </ul>
                        <br>
                        If you would like to practice a different breath or change 
                        the parameters press the R key
                        <br>
                        <br>
                        If you would like either continue the breath or return to 
                        this menu at any time, please press the SPACEBAR
                        <br>
                        <br>
                        If you'd like to learn more about me or this project, 
                        please view the links to the right
                    </span>
                `;

            const checkWetKeyPress = key => {
                if (key.keyCode == '32') {
                    const playState = circleName.style.animationPlayState === 'paused' ? 'running' : 'paused';

                    circleName.style.animationPlayState = playState;

                    if (playState === 'paused') {
                        modal.style.display = 'inline-block';
                    } else {
                        modal.style.display = 'none';
                    }
                } else if (key.keyCode == '82') {
                    location.reload();
                }
            };

            window.addEventListener('keydown', checkWetKeyPress, false);

            circleName.style.animation = `
                    ocean-breath ${totTime}s linear infinite
                `;

            circleName.style.animationPlayState = 'paused'
            break;
        case 'alternate':
            // per side params => double time
            if (pause === 0) pause = 0.00001;
            totTime = 2 * (inhale + exhale + (2 * pause));

            keyFrame = `
                    @keyframes alt-breath {
                        0%,
                        ${50 - ((pause / totTime) * 100)}%,
                        50%,
                        ${((totTime - pause) / totTime) * 100}%,
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
                        ${((inhale + (pause / 2)) / totTime) * 100}% {
                            border: 3px dotted rgb(146, 70, 177);
                        }
                        ${50 + (((inhale + (pause / 2)) / totTime) * 100)}% {
                            border: 3px dotted rgb(150, 151, 57);
                        }
                        ${50 - (((pause / 2) / totTime) * 100)}%,
                        ${((totTime - (pause / 2)) / totTime) * 100}% {
                            border: 3px dotted whitesmoke;
                        }
                        ${50 + ((inhale / totTime) * 100)}%,
                        ${50 + (((inhale + pause) / totTime) * 100)}% {
                            width: 600px;
                            height: 300px;
                            margin-right: 400px;
                            border: 10px solid black;
                        }
                    }
                `;

            // adds animation to be picked up by below CSS call
            styleElement.innerHTML = keyFrame;
            document.getElementsByTagName('head')[0].appendChild(styleElement);

            modal.style.display = 'inline-block';
            modalDescriptor.innerHTML = `
                    <span class='current-animation-descriptor'>
                        You are currently practicing the Nadi Shudhana Breath with:
                        <ul>
                            <li>Inhale: ${inhale} seconds</li>
                            <li>Exhale: ${exhale} seconds</li>
                            <li>Pause: ${pause} seconds</li>
                        </ul>
                        <br>
                        If you would like to practice a different breath or change 
                        the parameters press the R key
                        <br>
                        <br>
                        If you would like either continue the breath or return to 
                        this menu at any time, please press the SPACEBAR
                        <br>
                        <br>
                        If you'd like to learn more about me or this project, 
                        please view the links to the right
                    </span>
                `;

            const checkAltKeyPress = key => {
                if (key.keyCode == '32') {
                    const playState = circleName.style.animationPlayState === 'paused' ? 'running' : 'paused';

                    circleName.style.animationPlayState = playState;

                    if (playState === 'paused') {
                        modal.style.display = 'inline-block';
                    } else {
                        modal.style.display = 'none';
                    }
                } else if (key.keyCode == '82') {
                    location.reload();
                }
            };
            window.addEventListener('keydown', checkAltKeyPress, false);

            circleName.style.animation = `
                    alt-breath ${totTime}s linear infinite
                `;

            circleName.style.animationPlayState = 'paused';
            break;
        case 'fire':
            // while loop allows small %s for pulse effect
            // to be efficently destructured into the keyframe

            let bigPulse = [];
            let littlePulse = [];

            // time of pulse vs total time converted to a %
            let aggregator = (0.3 / 90) * 100;
            let arrayFlag = true;
            let i = 24.444;

            while (i < 91.111) {
                let percent = `${i}%`;
                if (arrayFlag) {
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
            styleElement.innerHTML = keyFrame;
            document.getElementsByTagName('head')[0].appendChild(styleElement);

            modal.style.display = 'inline-block';
            modalDescriptor.innerHTML = `
                    <span class='current-animation-descriptor'>
                        You are currently practicing the Kapalabhati Breath
                        <br>
                        Due to the intention of the breath, there is no user 
                        input for this breath, however to follow with the animation:
                        <ul>
                            <li>Breath Prep:
                                <ul>
                                    <li>6 second Inhale</li>
                                    <li>2 second Pause</li>
                                    <li>6 second Exhale</li>
                                    <li>2 second Pause</li>
                                </ul>
                            </li>
                            <li>6 second Inhale to prepare for the practice</li>
                            <li>60 seconds of steady forceful breaths
                                <ul>
                                    <li>
                                        The timing of this breath should be steady 
                                        and rigerous.  A pair of inhalations and exhalations
                                        spans 0.6 seconds to keep pace with the animation.
                                        Remember to contract the abdomen while exhaling
                                    </li>
                                </ul>
                            </li>
                            <li>6 second Exhale</li>
                            <li>2 second Pause</li>
                        </ul>
                        If you would like to practice a different breath or 
                        change the parameters press the R key
                        <br>
                        <br>
                        If you would like either continue the breath or return to 
                        this menu at any time, please press the SPACEBAR
                        <br>
                        <br>
                        If you'd like to learn more about me or this project, 
                        please view the links to the right.
                    </span>
                `;

            const checkHotKeyPress = key => {
                if (key.keyCode == '32') {
                    let playState = circleName.style.animationPlayState === 'paused' ? 'running' : 'paused';

                    circleName.style.animationPlayState = playState;

                    if (playState === 'paused') {
                        modal.style.display = 'inline-block';
                    } else {
                        modal.style.display = 'none';
                    }
                } else if (key.keyCode == '82') {
                    location.reload();
                }
            };
            document.addEventListener('keydown', checkHotKeyPress, false);

            circleName.style.animation = `
                    fire-breath 90s linear infinite
                `;

            circleName.style.animationPlayState = 'paused';
            break;
        default:
            // shouldn't get here - break incase
            break;
    }
};

export default circleDirections
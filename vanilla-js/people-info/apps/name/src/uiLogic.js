import { envStatusChecking } from '../../util/envCheck';
import Chance from 'chance';
const chance = new Chance();

const mountName = (el) => {
    let personName = '';

    for (let i = 0; i < 5; i++) {
        const randomName = chance.name();
        personName = personName + `<div>${randomName}</div>`;
    }

    el.innerHTML = personName;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'name'
// We want to immediately render our app into that element
envStatusChecking(mountName, 'name');

// Context/Situation #2
// We are running this file in develpment or production through the CONTAINER app
// NO GUARANTEE that an element with an id of 'name' exists
// WE DO NOT WANT try to immediately render the app
export { mountName }
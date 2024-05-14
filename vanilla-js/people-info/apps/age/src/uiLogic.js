import { envStatusChecking } from '../../util/envCheck';
import Chance from 'chance';
const chance = new Chance();

const mountAge = (el) => {
    let age = '';

    for (let i = 0; i < 5; i++) {
        const randomAge = chance.age();
        age = age + `<div>${randomAge}</div>`;
    }

    el.innerHTML = age;
}

envStatusChecking(mountAge, 'age');

export { mountAge }
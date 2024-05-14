import { envStatusChecking } from '../../util/envCheck';
import Chance from 'chance';
const chance = new Chance();

const mountIp = (el) => {
    let ip = '';

    for (let i = 0; i < 5; i++) {
        const randomIp = chance.ip();
        ip = ip + `<div>${randomIp}</div>`;
    }

    el.innerHTML = ip;
}

envStatusChecking(mountIp, 'ip');

export { mountIp };
import { mountName } from 'nameMF/NameIndex';
import { mountAge } from 'ageMF/AgeIndex';
import { mountIp } from 'ipMF/IpIndex';

mountName(document.getElementById('containerName'));
mountAge(document.getElementById('containerAge'));
mountIp(document.getElementById('containerIp'));

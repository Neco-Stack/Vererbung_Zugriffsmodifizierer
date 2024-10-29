import Alien from './alien';

const alien1 = new Alien("Daniel", "Neptun", "Milkyway", "oceanblue");
const alien2 = new Alien("Necati", "Jupiter", "Antarticusa", "white");
const alien3 = new Alien("Danny", "Uniper", "Unipasgalaktos", "pink");

console.log(`Alien names: ${alien1._name}`)
const alienNames = [alien1._name, alien2._name, alien3._name];
console.log(`Alien names: ${alienNames}`);

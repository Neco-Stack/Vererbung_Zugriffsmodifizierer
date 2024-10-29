import Alien from './AlienClass';
import Song from './Songs';
import { SongWithUnknownArtist } from './SongWithUnknownArtist';
import { Tea, TeaFlavor } from './Tea';
import { Coffee, CoffeeType } from './Coffee';

const alien1 = new Alien("Daniel", "Neptun", "Milkyway", "oceanblue");
const alien2 = new Alien("Necati", "Jupiter", "Antarticusa", "white");
const alien3 = new Alien("Danny", "Uniper", "Unipasgalaktos", "pink");

console.log(`Alien names: ${alien1._name}`)
const alienNames = [alien1._name, alien2._name, alien3._name];
console.log(`Alien names: ${alienNames}`);

const song1 = new Song("Dear Mama", "Tupac");
song1._durationInSeconds = 330;
const song2 = new Song("Sikidim", "Tarkan"); 
song2._durationInSeconds= 450;

const song3 = new SongWithUnknownArtist("jabadibadu"); 
song3.setArtist("Necati");
console.log(song3);

const tea1 = new Tea('Green Tea', 1.5, TeaFlavor.Green);
const tea2 = new Tea('Turkish Cay', 2.0, TeaFlavor.Chai);

const coffee1 = new Coffee("Espresso", 3.5, CoffeeType.Espresso);
const coffee2 = new Coffee("FlatWhite", 4.5, CoffeeType.Cappuccino)

console.log(tea1);console.log(tea2);console.log(coffee2);console.log(coffee1);










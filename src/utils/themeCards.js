import dog from '../assets/images/animals/dog.jpg';
import lion from '../assets/images/animals/animal-8748794_1280.jpg';
import bear from '../assets/images/animals/bear-8845470_1280.jpg';
import bird from '../assets/images/animals/bird-7073243_1280.jpg';
import cat from '../assets/images/animals/cat-8361048_1280.jpg';
import fox from '../assets/images/animals/fox-8016957_1280.jpg';
import meerkat from '../assets/images/animals/meerkat-8345747_1280.jpg';
import snake from '../assets/images/animals/snake-8282641_1280.jpg';
import bananas from '../assets/images/fruits/bananas-8364511_1280.jpg';
import fruit from '../assets/images/fruits/fruit-6630377_1280.jpg';
import kiwi from '../assets/images/fruits/kiwifruit-400143_1280.jpg';
import lemon from '../assets/images/fruits/lemon-8544476_1280.jpg';
import mirabelle from '../assets/images/fruits/mirabelle-plum-7605256_1280.jpg';
import pineapple from '../assets/images/fruits/pineapple-8440180_1280.jpg';
import raspberries from '../assets/images/fruits/raspberries-7313700_1280.jpg';
import tangerines from '../assets/images/fruits/tangerines-1721566_1280.jpg';
import airbus from '../assets/images/transports/airbus-4454338_1280.jpg';
import blur from '../assets/images/transports/blur-1239439_1280.jpg';
import bus from '../assets/images/transports/bus-277191_1280.jpg';
import car from '../assets/images/transports/car-8948809_1280.jpg';
import highway from '../assets/images/transports/highway-3392100_1280.jpg';
import md500 from '../assets/images/transports/md500-8068034_1280.jpg';
import passenger from '../assets/images/transports/passenger-ship-8555025_1280.jpg';
import truck from '../assets/images/transports/truck-1565478_1280.jpg';

const defaultState = { flipped: false, removed: false };

const animalsData = [
  { emoji: dog },
  { emoji: lion },
  { emoji: bear },
  { emoji: bird },
  { emoji: cat },
  { emoji: fox },
  { emoji: meerkat },
  { emoji: snake },
  // ... el resto de los animales
];

const fruitsData = [
  { emoji: bananas },
  { emoji: fruit },
  { emoji: kiwi },
  { emoji: lemon },
  { emoji: mirabelle },
  { emoji: pineapple },
  { emoji: raspberries },
  { emoji: tangerines },
  // ... el resto de los animales
];

const transportsData = [
  { emoji: airbus },
  { emoji: blur },
  { emoji: bus },
  { emoji: car },
  { emoji: highway },
  { emoji: md500 },
  { emoji: passenger },
  { emoji: truck },
  // ... el resto de los animales
];

export const animals = animalsData.map(animal => ({
  ...animal,
  ...defaultState
}));

export const fruits = fruitsData.map(fruit => ({
  ...fruit,
  ...defaultState
}));

export const transports = transportsData.map(transport => ({
  ...transport,
  ...defaultState
}));


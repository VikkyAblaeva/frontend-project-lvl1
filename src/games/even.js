import { getRandomNumber, isEven } from '../utils.js';
import { generateGameLogic } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangeOfRandom = 100;
const beginOfRandom = 0;

const generateRound = () => {
  const userQuestion = getRandomNumber(beginOfRandom, rangeOfRandom);
  console.log(`Question: ${userQuestion}`);
  const rightAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return rightAnswer;
};

const generateFinalGame = () => generateGameLogic(gameDescription, generateRound);

export { gameDescription, generateRound, generateFinalGame };

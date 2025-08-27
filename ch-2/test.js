import { evenNumbersWithin } from '../src/assignment.js';
import axios from 'axios';

const maybe = evenNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 2 : evenNumbersWithin can count, sum, arrayOfEvenNumbers from 0 to destination', async () => {
    const URL = 'https://randomapi.com/api/3ba71dfdc0144abba3452e039f210123';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(evenNumbersWithin(value)).toStrictEqual(correctFunction);
});

import { oddNumbersWithin } from '../src/assignment.js';
import axios from 'axios';

const maybe = oddNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 4 : oddNumbersWithin can count, sum, arrayOfOddNumbers from 0 to destination', async () => {
    const URL = 'https://randomapi.com/api/3cb28d213316d93149f190f0f9658920';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(sumOfNumbersTo(value)).toBe(correctFunction);
});

import { findPrimeNumbers } from '../src/assignment.js';
import axios from 'axios';

const maybe = findPrimeNumbers === undefined ? test.skip : test;

maybe('Challenge - 7 : findPrimeNumbers can find prime numbers in an array', async () => {
    const URL = 'https://randomapi.com/api/a3bdc611a553d860050b6a7c67c76a20';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(findPrimeNumbers(value)).toStrictEqual(correctFunction);
});

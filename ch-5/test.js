import { findMultiples } from '../src/assignment.js';
import axios from 'axios';

const maybe = findMultiples === undefined ? test.skip : test;

maybe('Challenge - 5 : findMultiples can find multiples of a factor in an array', async () => {
    const URL = 'https://randomapi.com/api/c8y5r182?key=1YGT-X0VZ-V2PC-TUK8';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(findMultiples(value[0], value[1])).toStrictEqual(correctFunction);
});

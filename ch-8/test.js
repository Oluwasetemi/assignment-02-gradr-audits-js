import { doubleTheValues } from '../src/assignment.js';
import axios from 'axios';

const maybe = doubleTheValues === undefined ? test.skip : test;

maybe('Challenge - 8 : doubleTheValues can double positive numbers', async () => {
    const URL = 'https://randomapi.com/api/ee3350e5057f1a55e3ddb26bb1d32df8';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(doubleTheValues(value)).toBe(correctFunction);
});

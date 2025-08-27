import { calculateFactorials } from '../src/assignment.js';
import axios from 'axios';

const maybe = calculateFactorials === undefined ? test.skip : test;

maybe('Challenge - 6 : calculateFactorials can calculate factorials for positive numbers', async () => {
    const URL = 'https://randomapi.com/api/xihpcl5f?key=1YGT-X0VZ-V2PC-TUK8';
    const { data: { results } } = await axios.get(URL);
    const [randomTestData] = results;
    const { value, correctFunction } = randomTestData;

    expect(calculateFactorials(value)).toBe(correctFunction);
});

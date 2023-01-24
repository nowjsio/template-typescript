import { jest } from '@jest/globals';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

test('makes correct call', async () => {
  mockedAxios.get.mockResolvedValue({ results: [{ name: { first: 'Bob' } }] });
  const json = await axios.get('test');
  expect(json).toEqual({ results: [{ name: { first: 'Bob' } }] });
});

import { jest } from '@jest/globals';
import HttpClient from '../../src/service/http-client';

jest.mock('../../src/service/http-client');
const mockedHttpClient = jest.mocked(HttpClient);

describe('HttpClient', () => {
  mockedHttpClient.getStatue.mockResolvedValue(200);
  test('run getStatus success test ', async () => {
    const successStatus: number = await HttpClient.getStatue('test');
    expect(successStatus).toBe(200);
  });
});

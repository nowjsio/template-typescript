import Logging from '../../src/service/logging';

describe('Logging', () => {
  test('run pritnOut success test', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    Logging.printOut('test');
    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(['test']);
  });
});

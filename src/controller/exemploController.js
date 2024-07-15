import { getMessageTest } from '../service/exemploService.js';

const test = (req, res) => {
  res.send('Hello, World!');
};

const testService = (req, res) => {
  const message = getMessageTest();
  res.send(message);
};

export { test, testService };

import Logging from '@/service/logging';
import HttpClient from '@/service/http-client';
// import Logging from './service/logging';
// import HttpClient from './service/http-client';

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

(async () => {
  const person: Person = new Person('tester');
  const personName: string = person.getName();

  const status = await HttpClient.getStatue(`https://api.github.com/users/${personName}`);

  Logging.printOut('status: ', status);
})();

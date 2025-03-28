import { faker } from '@faker-js/faker';

const generateUsers = (num) => {
  return Array.from({ length: num }, () => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 80 }),
    email: faker.internet.email(),
  }));
};

export const usersData = generateUsers(1000000);

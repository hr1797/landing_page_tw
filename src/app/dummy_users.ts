import { User, Langugaes } from './models/user.model';

export const users: User[] = [
  {
    name: 'Georg Friedrich Hegel',
    mail: 'hegel@mail.com',
    password: 'hegel',
    languages: [Langugaes.english, Langugaes.spanish],
    age: 60,
  },
  {
    name: 'Ludwig Wittgenstein',
    mail: 'ludwig@mail.com',
    password: 'ludwig',
    languages: [Langugaes.english],
    age: 30,
  },
  {
    name: 'Martin Heidegger',
    mail: 'martin@mail.com',
    password: 'martin',
    languages: [Langugaes.spanish],
    age: 40,
  },
  {
    name: 'Bertrand Russell',
    mail: 'bertrand@mail.com',
    password: 'bertrand',
    languages: [Langugaes.english],
    age: 65,
  },
];

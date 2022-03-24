export enum Langugaes {
  spanish = 'spanish',
  english = 'english',
}

export interface User {
  name: string;
  mail: string;
  password: string;
  languages: Langugaes[];
  age: number;
}

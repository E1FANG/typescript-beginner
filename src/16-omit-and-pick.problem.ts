import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Pick<User,'firstName' | 'lastName'>;

type MyType2 = Omit<User,'id'>

type tests = [Expect<Equal<MyType2, { firstName: string; lastName: string }>>];

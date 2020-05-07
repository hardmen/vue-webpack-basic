import * as faker from 'faker';

faker.locale = 'zh_CN';

interface UserInfo {
  id: string;
  name: string;
  phone: number;
  address: string;
}

function iterator<T>(n: number, fn: () => T) {
  const result: T[] = [];
  while (n > 0) {
    result.push(fn());
    n--;
  }
  return result;
}

export function fakerUserInfo(): UserInfo {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.city(),
  };
}

export function fakerUsers(n: number) {
  return iterator(n, fakerUserInfo);
}

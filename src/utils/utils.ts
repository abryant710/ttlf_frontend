import { random } from 'lodash';

export const test = null;

export function getImage({ num, rand }: { num?: number; rand?: boolean }): string {
  if (rand) {
    const newNum = random(1, 12);
    return `images/transparent/ttlf_00${newNum < 10 ? '0' : ''}${newNum}.png`;
  }
  if (num) {
    return `images/transparent/ttlf_00${num < 10 ? `0${num}` : num}.png`;
  }
  return `images/transparent/ttlf_0013.png`;
}

export function numberUpToMax(num: number, max: number): number {
  let counter = num;
  while (counter > max) {
    counter -= max;
  }
  return counter;
}

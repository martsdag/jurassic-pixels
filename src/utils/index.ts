import type { Nil } from '@/types';
import allDinos from '@/assets/data/data.json';

export const cloneDeep = <T>(original: T): T => JSON.parse(JSON.stringify(original));

export const isNil = <T>(argument: T | Nil): argument is Nil => argument == null;

export const isNotNil = <T>(argument: T | null | undefined): argument is T => !isNil(argument);

export const getRandomDino = () => {
  const randomIndex = Math.floor(Math.random() * allDinos.length);

  return allDinos[randomIndex];
};

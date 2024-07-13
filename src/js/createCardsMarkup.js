import { createCardMarkup } from './createCardMarkup';

export function createCardsMarkup(arr) {
  return arr.map(createCardMarkup).join('');
}

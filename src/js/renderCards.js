import { createCardsMarkup } from './createCardsMarkup';
import { localStorageAPI } from './localStorageAPI';
import { refs } from './refs';

export function renderCards() {
  const storedData = localStorageAPI.getAll();

  refs.taskList.insertAdjacentHTML('beforeend', createCardsMarkup(storedData));
}

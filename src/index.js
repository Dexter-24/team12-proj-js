//  * Розмітка картки задачі
//  * <li class="task-list-item">
//  *     <button class="task-list-item-btn">Удалить</button>
//  *     <h3>Заголовок</h3>
//  *     <p>Текст</p>
//  * </li>
//  *

import { refs } from './js/refs';
import { handlerSubmit } from './js/handlerSubmit';
import { renderCards } from './js/renderCards';
import { onDeleteBtnClick } from './js/onDeleteBtnClick';

refs.form.addEventListener('submit', handlerSubmit);
refs.taskList.addEventListener('click', onDeleteBtnClick);
renderCards();

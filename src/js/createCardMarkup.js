export function createCardMarkup({ taskName, taskText, id }) {
  return ` <li class="task-list-item">
<button class="task-list-item-btn" data-id='${id}'>Delete</button>
<h3>${taskName}</h3>
<p>${taskText}</p>
</li>`;
}

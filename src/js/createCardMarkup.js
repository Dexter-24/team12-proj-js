export function createCardMarkup({ taskName, taskText }) {
  return ` <li class="task-list-item">
<button class="task-list-item-btn">Delete</button>
<h3>${taskName}</h3>
<p>${taskText}</p>
</li>`;
}

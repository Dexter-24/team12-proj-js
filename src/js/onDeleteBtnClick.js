export function onDeleteBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const id = e.target.dataset.id;

  e.target.closest('li').remove();
}

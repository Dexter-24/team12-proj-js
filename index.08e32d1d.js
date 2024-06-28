!function(){function t(t){var n={};return new FormData(t.target).forEach((function(t,e){n[e]=t})),n}({form:document.querySelector("#task-form")}).form.addEventListener("submit",(function(n){n.preventDefault();var e=t(n);console.log(e)}))}();
//# sourceMappingURL=index.08e32d1d.js.map

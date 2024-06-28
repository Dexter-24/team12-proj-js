function t(t){const e={};return new FormData(t.target).forEach(((t,o)=>{e[o]=t})),e}({form:document.querySelector("#task-form")}).form.addEventListener("submit",(function(e){e.preventDefault();const o=t(e);console.log(o)}));
//# sourceMappingURL=index.9a5d7a45.js.map

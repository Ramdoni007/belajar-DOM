// let init;

// // Di dalam DOM kita bisa melakukan Melihat,akses,dan juga merubah
// // file html yang kita miliki .
// //contohnya seperti di bawah ini

// init = document;
// init = document.all;
// init = document.all[2];
// init = document.all.length;
// init = document.head;
// init = document.body;
// init = document.doctype;
// init = document.domain;
// init = document.URL;

// init = document.characterSet;
// init = document.contentType;
// init = document.forms;
// init = document.forms[0];
// init = document.forms[0].id;
// init = document.forms[0].method;
// init = document.forms[0].action;

// // init = document.links;
// // init = document.links[0].className;
// // init = document.links[0].id;
// // init = document.links[0].classList;

// // init = document.images;
// init = document.scripts;
// init = document.scripts[1];
// init = document.scripts[1].getAttribute("src");

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (scripts) {
//   console.log(scripts.getAttribute("src"));
// });

// console.log(init);

//Document getElementByid

console.log(document.getElementById("task-tittle"));
console.log(document.getElementById("task-tittle").id);
console.log(document.getElementById("task-tittle").className);

// Menggunakan variable sebagai ganti id di dalam html
const cardHeader = document.getElementById("task-tittle");

// Change Styling
document.getElementById("task-tittle").style.background = "#f7dad9";
document.getElementById("task-tittle").style.color = "#bc6ff1";
document.getElementById("task-tittle").style.padding = "5px";

//Change Content
// Jadi nya ringkas seperti ini tinggal manggil nama variable nya :)
cardHeader.textContent = "Task Tab";
cardHeader.innerText = "My Task";
cardHeader.innerHTML = '<span style="color: bluesky">TaskList</span>';

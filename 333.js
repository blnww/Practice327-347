// let table = document.querySelector('#table');
// let button = document.querySelector('#btn');
//     button.addEventListener('click',func)
//     function func(){
//         let tr = document.createElement('tr');
//         for (let i = 1; i <= 3; i++) {
//     let td = document.createElement('td');
// 	tr.appendChild(td);
// }
// table.appendChild(tr);
// }


let trs = document.querySelectorAll('#table tr');
let table = document.querySelector('#table');
let button = document.querySelector('#btn');
button.addEventListener('click',func)
function func(){
    let tr = document.createElement('tr');
    for (let i = 0; i <= 1; i++) {
    let td = document.createElement('td');
    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tr.appendChild(td);
    }
    table.appendChild(tr);    
}


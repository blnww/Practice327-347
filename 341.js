// let elems = document.querySelectorAll('#parent span');
// let elems2 = document.querySelectorAll('#parent p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }
// for(let elem of elems2){
//     let a = document.createElement('a')
//     a.href = ''
//     a.textContent = 'delete'
//     elem.appendChild(a)
//     a.addEventListener('click',func1)
//     function func1(event){
//         elem.remove()
//         event.preventDefault();
//     }

// }



// let elems = document.querySelectorAll('#parent p');
// for(let elem of elems){
    
//     let span = document.createElement('span')
//     let a = document.createElement('a')
//     span.textContent = elem.textContent
//     elem.textContent = ""
//     a.href = ''
//     a.textContent = 'delete'
//     elem.appendChild(span);
//     elem.appendChild(a)
    
//     a.addEventListener('click',func1)
//     function func1(event){
//         elem.remove()
//         event.preventDefault();
//     }

// }
// let elems2 = document.querySelectorAll('#parent span');

// for (let elem of elems2) {
    
// 	elem.addEventListener('click', function func() {
        
// 		let input = document.createElement('input');
		
//         input.value = elem.textContent
		
// 		elem.textContent = '';
        
// 		elem.appendChild(input);
        
        
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = input.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }
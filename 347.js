// №1

// let elem = document.querySelector('#elem')
// let arr = [1,2,3,4,5]
// for(let ar of arr){
//     let li = document.createElement('li')
//     li.textContent = ar
//     elem.appendChild(li)

// }


// №2

// let elem = document.querySelector('#elem')
// let arr = [1,2,3,4,5]
// for(let ar of arr){
//     let li = document.createElement('li')
//     li.textContent = ar
//     elem.appendChild(li)
// }
// let elems = document.querySelectorAll('li')
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


// №3



// let input = document.querySelector('input')
// let div = document.querySelector('div')
// let elem = document.querySelector('#elem')
// let arr = [1,2,3,4,5]
// for(let ar of arr){
//     let li = document.createElement('li')
//     li.textContent = ar
//     elem.appendChild(li)
// }
// let elems = document.querySelectorAll('li')
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
// input.addEventListener('blur',func1)
//     function func1(){
//         let lis = document.createElement('li')
//         lis.textContent = this.value
//         lis.addEventListener('click',func2)
//         function func2(){
//             let input = document.createElement('input');
//             input.value = lis.textContent;          
//             lis.textContent = '';
//             lis.appendChild(input);
//             input.addEventListener('blur', function() {
//                 lis.textContent = this.value;
//                 lis.addEventListener('click', func2);
//             });          
//             lis.removeEventListener('click', func2);
//         }
//         elem.appendChild(lis)       
//     }
















// №4


// let input = document.querySelectorAll('input')
// let div = document.querySelector('div')
// let elem = document.querySelector('#elem')
// let arr = [1,2,3,4,5]
// for(let ar of arr){
//     let li = document.createElement('li')
//     li.textContent = ar
//     elem.appendChild(li)
// }
// let elems = document.querySelectorAll('li')
// for (let elem of elems) {
//     let span = document.createElement('span')
//     let a = document.createElement('a')
//     span.textContent = elem.textContent
//     elem.textContent = ""
//     a.href = ''
//     a.textContent = 'delete'
//     elem.appendChild(span);
//     elem.appendChild(a)
    
//     a.addEventListener('click',func2)
//     function func2(event){
//         elem.remove()
//         event.preventDefault();
//     }
// 	span.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = span.textContent;		
// 		span.textContent = '';
// 		span.appendChild(input);	
// 		input.addEventListener('blur', function() {
// 			span.textContent = this.value;
// 			span.addEventListener('click', func);
// 		});		
// 		span.removeEventListener('click', func);
// 	});
// }
// for (let inputs of input) {
    
// inputs.addEventListener('blur',func1)
//     function func1(){
//         let lis = document.createElement('li')
//         lis.textContent = this.value

//         let span = document.createElement('span')
//         let a = document.createElement('a')
//         span.textContent = lis.textContent
//         lis.textContent = ""
//         a.href = ''
//         a.textContent = 'delete'
//         lis.appendChild(span);
//         lis.appendChild(a)
        
//         a.addEventListener('click',func3)
//         function func3(event){
//             lis.remove()
//             event.preventDefault();
//         }
//         span.addEventListener('click',func2)
        
//         function func2(){
//             let input = document.createElement('input');
//             input.value = span.textContent;          
//             span.textContent = '';
//             span.appendChild(input);
//             input.addEventListener('blur', function() {
//                 span.textContent = this.value;
//                 span.addEventListener('click', func2);
                
//             });          
//             span.removeEventListener('click', func2);
//         }
//         elem.appendChild(lis)       
//     }
// }


    




















// №5

// let input = document.querySelectorAll('input')
// let div = document.querySelector('div')
// let elem = document.querySelector('#elem')
// let arr = [1,2,3,4,5]
// for(let ar of arr){
//     let li = document.createElement('li')
//     li.textContent = ar
//     elem.appendChild(li)
// }
// let elems = document.querySelectorAll('li')
// for (let elem of elems) {
//            let span = document.createElement('span')
//     let a = document.createElement('a')
//     span.textContent = elem.textContent
//     elem.textContent = ""
//     a.href = ''
//     a.textContent = 'link'
//     elem.appendChild(span);
//     elem.appendChild(a)
    
//     a.addEventListener('click',func1)
//     function func1(event){
//         span.classList.add('a')
//         event.preventDefault();
//     }
// }

// let elems2 = document.querySelectorAll('#elem span');

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

// for (let inputs of input) {
    
// inputs.addEventListener('blur',func1)
//     function func1(){
//         let lis = document.createElement('li')
//         lis.textContent = this.value
//         let span = document.createElement('span')
//     let a = document.createElement('a')
//     span.textContent = lis.textContent
//     lis.textContent = ""
//     a.href = ''
//     a.textContent = 'link'
//     lis.appendChild(span);
//     lis.appendChild(a)
    
//     a.addEventListener('click',func1)
//     function func1(event){
//         span.classList.add('a')
//         event.preventDefault();
//     }
//     span.addEventListener('click', function func1() {
// 		let input = document.createElement('input');
//         input.value = span.textContent
// 		span.textContent = '';
// 		span.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			span.textContent = input.value;
// 			span.addEventListener('click', func1);
// 		});
		
// 		span.removeEventListener('click', func1);
// 	});


//     elem.appendChild(lis)       
//     }
// }



// №6




// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }








// №7
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);

//     td1.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = td1.textContent;
		
// 		td1.textContent = '';
// 		td1.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			td1.textContent = this.value;
// 			td1.addEventListener('click', func);
// 		});
		
// 		td1.removeEventListener('click', func);
// 	});

// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	td2.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = td2.textContent;
		
// 		td2.textContent = '';
// 		td2.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			td2.textContent = this.value;
// 			td2.addEventListener('click', func);
// 		});
		
// 		td2.removeEventListener('click', func);
// 	});
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	td3.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = td3.textContent;
		
// 		td3.textContent = '';
// 		td3.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			td3.textContent = this.value;
// 			td3.addEventListener('click', func);
// 		});
		
// 		td3.removeEventListener('click', func);
// 	});
// 	table.appendChild(tr);
// }





// №8
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');

// for (let user of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);

//     td1.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = td1.textContent;
		
// 		td1.textContent = '';
// 		td1.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			td1.textContent = this.value;
// 			td1.addEventListener('click', func);
// 		});
		
// 		td1.removeEventListener('click', func);
// 	});

// 	let td2 = document.createElement('td');
// 	td2.textContent = user.age;
// 	tr.appendChild(td2);
// 	td2.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = td2.textContent;
		
// 		td2.textContent = '';
// 		td2.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			td2.textContent = this.value;
// 			td2.addEventListener('click', func);
// 		});
		
// 		td2.removeEventListener('click', func);
// 	});
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.salary;
// 	tr.appendChild(td3);
// 	td3.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = td3.textContent;
		
// 		td3.textContent = '';
// 		td3.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			td3.textContent = this.value;
// 			td3.addEventListener('click', func);
// 		});
		
// 		td3.removeEventListener('click', func);
// 	});


//     let td4 = document.createElement('td');
// 	td4.textContent 
// 	tr.appendChild(td4);


//     let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	td4.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		tr.remove();
// 		event.preventDefault();
// 	});
// 	table.appendChild(tr);
// }



// №9
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let button = document.querySelector('#elem4');
// let table = document.querySelector('#table');
// button.addEventListener('click',func)
// function func(){
// let tr = document.createElement('tr');

// for (let i = 1; i <= 1; i++) {
// 	let td1 = document.createElement('td');
//     td1.textContent = elem1.value
// 	tr.appendChild(td1);
// }
// for (let i = 1; i <= 1; i++) {
// 	let td2 = document.createElement('td');
//     td2.textContent = elem2.value
// 	tr.appendChild(td2);
// }
// for (let i = 1; i <= 1; i++) {
// 	let td3 = document.createElement('td');
//     td3.textContent = elem3.value
// 	tr.appendChild(td3);
// }

// table.appendChild(tr);
// }




// №10
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let elem = document.querySelector('#elem')
// for(let a of employees){
//     let li = document.createElement('li')
//     li.textContent = a.name + " " + a.age + " " + a.salary
//     elem.appendChild(li)

// }


// №11
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let elem = document.querySelector('#elem')
// for(let a of employees){
//     let li = document.createElement('li')
//     li.textContent = a.name + " " + a.age + " " + a.salary
//     li.addEventListener('click',func)
//     function func(){
//         let input = document.createElement('input')
//         input.value = li.textContent
//         li.textContent = ''
//         li.appendChild(input);
//         input.addEventListener('blur',func1)
//         function func1(){
//             li.textContent = input.value
//             li.addEventListener('click', func);
//         }
//         li.removeEventListener('click', func);

//     }
//     elem.appendChild(li)

// }


// №12

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let elem = document.querySelector('#elem')
// for(let a of employees){
//     let span = document.createElement('span')
//     let li = document.createElement('li')
//     span.textContent = a.name + " " + a.age + " " + a.salary
//     span.addEventListener('click',func)
//     function func(){
//         let input = document.createElement('input')
//         input.value = span.textContent
//         span.textContent = ''
//         span.appendChild(input);
//         input.addEventListener('blur',func1)
//         function func1(){
//             span.textContent = input.value
//             span.addEventListener('click', func);
//         }
//         span.removeEventListener('click', func);

//     }
//     elem.appendChild(li)
//     li.appendChild(span)
// }
// let elems = document.querySelectorAll('#elem li')
// for (let elem1 of elems) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     elem1.appendChild(remove);
    
//     remove.addEventListener('click', function(event) {
//         elem1.remove();
//         event.preventDefault();
//     });
// }




// №13

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let elem = document.querySelector('#elem')
// let form1 = document.querySelector('#form1')
// let form2 = document.querySelector('#form2')
// let form3 = document.querySelector('#form3')
// for(let a of employees){
//     let li = document.createElement('li')
//     li.textContent = a.name + " " + a.age + " " + a.salary
//     li.addEventListener('click',func)
//     function func(){
//         let input = document.createElement('input')
//         input.value = li.textContent
//         li.textContent = ''
//         li.appendChild(input);
//         input.addEventListener('blur',func1)
//         function func1(){
//             li.textContent = input.value
//             li.addEventListener('click', func);
//         }
//         li.removeEventListener('click', func);

//     }
//     elem.appendChild(li)
// }
// form3.addEventListener('blur',func1)
// function func1(){
//     let li = document.createElement('li')
//     li.textContent = form1.value + " " + form2.value + " " +form3.value
//     elem.appendChild(li)
// }
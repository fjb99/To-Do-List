const addForm = document.querySelector('.add'); 
const list = document.querySelector('.todos'); 
const search = document.querySelector('.search input'); 

const generateTemplate = todo1 => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-item-center">
            <span> ${todo1}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `; 
    list.innerHTML += html; 
}; 


addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();//merr ca shkruhet brenda

    
    if(todo.length){
        generateTemplate(todo);
        addForm.reset(); //pasi ben enter heq ate qe u shtua
    }
     
}); 

//delete todos
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove(); //delete parent te atij te voglit qe ka klasen delete
         
    }
}); 


//per ate posht
const filterTodos = (term) =>{

    Array.from(list.children)
        .filter((todo1) => !todo1.textContent.toLowerCase().includes(term))
        .forEach((todo1) => todo1.classList.add('filtered'));  

    Array.from(list.children)
        .filter((todo1) => todo1.textContent.toLowerCase().includes(term))
        .forEach((todo1) => todo1.classList.remove('filtered'));  
}; 


//keyup event
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase(); 
    filterTodos(term); 
}); 




































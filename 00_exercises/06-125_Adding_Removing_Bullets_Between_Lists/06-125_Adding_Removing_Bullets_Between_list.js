/*

 === EXERCISE REQUIREMENTS ===

1. Use vanillaJS
2. When a item is clicked, it has to be removed from the DOM
3. Not Hide. Removed.

VARS from the starter code:

PENDING TODOS
wrapper     class todos
li          class todo-item


COMPLETED TODOS

ul          completedTodoWrapper
ul content  div class completed
*/



// testing forEach Onlick


/* EXERCISE 1 -> Complete REMOVE 
const pendingLi = document.querySelectorAll('.todoItem')

pendingLi.forEach( li => {
        
    li.addEventListener('click', (e) => {

        li.remove()

    })

})*/

/* EXERCISE 2 -> MOVE to another section (completedTodo) 
const pendingLi = document.querySelectorAll('.todoItem')

pendingLi.forEach ( li => {

    li.addEventListener('click', (e) => {

        const completeTodo = document.querySelector('.completed')

        completeTodo.appendChild(li);
        
        //  So important to .. 
        //      1.  REMOVE EVENT LISTER 
        //          or
        //      2. Set as ONCE in order to avoid event inheritance!!
        
    }, { once : true} )

})*/

/* EXERCISE 3 -> MOVE to Completed, an return if re-clicked */


const pendingLi = document.querySelectorAll('.todoItem')
const completeTodo = document.querySelector('.completed')

const pendingUl = document.querySelector('.todos ul')


pendingLi.forEach( li => {

    li.addEventListener('click', element => {

        const li = element.currentTarget
        const parent = li.parentElement

        if ( parent === pendingUl ) {

            completeTodo.appendChild(li)

        } else {

            pendingUl.appendChild(li)
        }

    })

})
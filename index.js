const bookCard=document.querySelector(".bookcard");
const bookAddButton=document.querySelector(".book-add-button");
// add book button inside the card
const addnewbook=document.querySelector(".submit-book");
const cancelcard=document.querySelector(".cancel-btn");




// when click add-book button book card will pop up 
bookAddButton.addEventListener('click',function(){
    bookCard.style.display='block';

});

// cancel the book card 

cancelcard.addEventListener('click', ()=>{
    bookCard.style.display='none';
})



// data structure
// array use to store all input values i.e books
const my_Library=[];


// book constructor

function Book(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
}



// using html input element in javascript
const book_title=document.querySelector('#title');
const book_author=document.querySelector('#author');
const book_pages=document.querySelector('#Total-pages');







//  function to add new book to my_Library array

function addBookToMyLibrary(){
    if(book_title && book_author && book_pages){
        const book1= new Book(book_title,book_author,book_pages);

        // push new book to my_Library array
        my_Library.push(book1);
    }else{
        alert('enter valid values');
    }

}

addnewbook.addEventListener('click',addBookToMyLibrary);







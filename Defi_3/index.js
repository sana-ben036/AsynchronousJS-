// 1- methode xmlhttprequest
//----------------- afficher all books  (get)------------------------------------

/*
var show= document.getElementById('show');
show.addEventListener('click',showList);

var xhr1= new XMLHttpRequest();

function showList(){

xhr1.onload= function(){
    var data = this.response;
    if(data.length>0){
        var output= "";

        // star for loop

        data.forEach((u)=>{
            output += `<tr>`;
            output += `<td>${u.id}</td>`;
            output += `<td>${u.author}</td>`;
            output += `<td>${u.country}</td>`;
            output += `<td>${u.imageLink}</td>`;
            output += `<td>${u.language}</td>`;
            output += `<td>${u.link}</td>`;
            output += `<td>${u.pages}</td>`;
            output += `<td>${u.title}</td>`;
            output += `<td>${u.year}</td></tr>`;
        })
        // close for loop
        document.getElementById("data").innerHTML= output;
    }
};
xhr1.open('get','http://localhost:3000/books');
xhr1.responseType='json';
xhr1.send();
}

// -------------------add new book  (post)---------------------



var add= document.getElementById('add');
add.addEventListener('click',addBook);
var xhr2= new XMLHttpRequest();

function addBook(){

    var book = {
        "id" : 21,
        "author" : "samia",
        "country" : "morocco",
        "imageLink" : "",
        "language" : "arabic",
        "link" : "",
        "pages":"", 
        "title":"biography",
        "year" :2020
    
    };

    const jasonString = JSON.stringify(book);

    
        
    

xhr2.open('POST','http://localhost:3000/books');
xhr2.setRequestHeader('Content-Type','application/json');
xhr2.send(jasonString)


}

    

// -------------------update a book  (put)---------------------

var update= document.getElementById('update');
update.addEventListener('click',updateBook);
var xhr3= new XMLHttpRequest();

function updateBook(){

    var book = {
        "id" : 21,
        "author" : "sana BENGANNOUNE",
        "country" : "morocco",
        "imageLink" : "",
        "language" : "arabic",
        "link" : "",
        "pages":"300", 
        "title":"biography",
        "year" :2020
    
    };

const jasonString = JSON.stringify(book);

xhr3.open('PuT','http://localhost:3000/books/21');
xhr3.setRequestHeader('Content-Type','application/json');
xhr3.send(jasonString)
}

// -------------------update a book  (delete)---------------------

var delet= document.getElementById('delet');
delet.addEventListener('click',deletBook);
var xhr4= new XMLHttpRequest();

function deletBook(){

    var book={};




const jasonString = JSON.stringify(book);

xhr4.open('DELETE','http://localhost:3000/books/21');
xhr4.setRequestHeader('Content-Type','application/json');
xhr4.send()
}
*/

// 2- methode fetch:
//----------------- afficher all books  (get)------------------------------------
/*
let url = "http://localhost:3000/books"
var show = document.getElementById('show')
show.addEventListener('click',showList)

function showList(){
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        var output= "";
        data.forEach((u)=>{
            output += `<tr>`;
            output += `<td>${u.id}</td>`;
            output += `<td>${u.author}</td>`;
            output += `<td>${u.country}</td>`;
            output += `<td>${u.imageLink}</td>`;
            output += `<td>${u.language}</td>`;
            output += `<td>${u.link}</td>`;
            output += `<td>${u.pages}</td>`;
            output += `<td>${u.title}</td>`;
            output += `<td>${u.year}</td></tr>`;
        
        })

        document.getElementById("data").innerHTML= output;

    })
    .catch((err)=>{
        console.error(err)
    })

}

//----------------- add new book  (post)------------------------------------

var add = document.getElementById('add');
add.addEventListener('click',addBook);

function addBook(){
    fetch(url,{
        method: 'POST',
        headers:{
           'content-type': 'application/json'
        },
        body: JSON.stringify({
            "id" : 21,
            "author" : "sana",
            "country" : "morocco",
            "imageLink" : "",
            "language" : "arabic",
            "link" : "",
            "pages":"300", 
            "title":"biography",
            "year" :2020
        }) 
    })  
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        document.getElementById("data").innerHTML= data;

    })
    
    .catch((err)=>{
        console.error(err)
    })
}

//----------------- update a book (put)------------------------------------
var update = document.getElementById('update');
update.addEventListener('click',updateBook);


function updateBook(){
    let url = 'http://localhost:3000/books/21'
    fetch(url,{
        method: 'PuT',
        headers:{
           'content-type': 'application/json'
        },
        body: JSON.stringify({
            "id" : 21,
            "author" : "sana BENGANNOUNE",
            "country" : "canada",
            "imageLink" : "",
            "language" : "arabic",
            "link" : "",
            "pages":"300", 
            "title":"biography",
            "year" :2020
        }) 
    })  
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        document.getElementById("data").innerHTML= data;

    })
    
    .catch((err)=>{
        console.error(err)
    })
}

//----------------- delet a book (delete)------------------------------------

var delet = document.getElementById('delet');
delet.addEventListener('click',deletBook);


function deletBook(){
    let url = 'http://localhost:3000/books/21'
    fetch(url,{
        method: 'DELETE'
        
    })  
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        document.getElementById("data").innerHTML= data;

    })
    
    .catch((err)=>{
        console.error(err)
    })
}
*/

// 3- methode async/await:
//----------------- afficher all books  (get)------------------------------------
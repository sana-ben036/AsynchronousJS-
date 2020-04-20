
//----------------- afficher all books  (get)------------------------------------

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

xhr4.open('DELETe','http://localhost:3000/books/1');
xhr4.setRequestHeader('Content-Type','application/json');
xhr4.send()
}
























/*function newBook(){

    var FormData = {};

    FormData["id"] = document.getElementById("id").value;
    FormData["author"] = document.getElementById("author").value;
    FormData["country"] = document.getElementById("country").value;
    FormData["imageLink"] = document.getElementById("imageLink").value;
    FormData["language"] = document.getElementById("language").value;
    FormData["link"] = document.getElementById("link").value;
    FormData["pages"] = document.getElementById("pages").value;
    FormData["title"] = document.getElementById("title").value;
    FormData["year"] = document.getElementById("year").value;

    return newBook();

    
}
*/




/*var submit= document.getElementById("send")
submit.addEventListener('click',sendBook);

function sendBook(){

    var toSend = {
        id:21,
        author:"sana"
    };
 const jasonString = JSON.stringify(toSend);
 var xhr2= new XMLHttpRequest();



 xhr2.open('POST','http://localhost:3000/books');
 xhr2.setRequestHeader('Content-Type','application/json');
 xhr2.send(jasonString)
}
*/












/*fetch("http://localhost:3000/books").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
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
            }
        )
    }
)
*/



/*function sendData(){
  
    var XHR= new XMLHttpRequest();
    var FD= new FormData(form);
    XHR.addEventListener("load", function(event) {
        alert(event.target.responseText);
      });
    XHR.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passé.');
      });
    XHR.open("POST", "http://localhost:3000/books");
    XHR.send(FD);
  
  }
  var form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      sendData();
    });
    */
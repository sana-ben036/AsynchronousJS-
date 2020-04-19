
var showlist= document.getElementById('show');
var xhr= new XMLHttpRequest();
showlist.addEventListener('click',showList);

function showList(){

xhr.onload= function(){
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
xhr.open('get','http://localhost:3000/books');
xhr.responseType='json';
xhr.send();
}












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
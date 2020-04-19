fetch("http://localhost:3000/books").then(
    res=>{
        res.json().then(
            data=>{
                console.log(data);
                if(data.length>0){
                    var book= "";

                    // star for loop

                    data.forEach((u)=>{
                        book += `<tr>`;
                        book += `<td>${u.id}</td>`;
                        book += `<td>${u.author}</td>`;
                        book += `<td>${u.country}</td>`;
                        book += `<td>${u.imageLink}</td>`;
                        book += `<td>${u.language}</td>`;
                        book += `<td>${u.link}</td>`;
                        book += `<td>${u.pages}</td>`;
                        book += `<td>${u.title}</td>`;
                        book += `<td>${u.year}</td></tr>`;
                    })
                    // close for loop
                    document.getElementById("data").innerHTML= book;
                }
            }
        )
    }
)




var request = new XMLHttpRequest();
request.open("POST", "http://localhost:3000/books");
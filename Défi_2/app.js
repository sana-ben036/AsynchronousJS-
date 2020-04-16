// declaration de l'element ou on va mettre l'event

var btn1 = document.getElementById('button1');

var btn2 =  document.getElementById ('button2');

// creation event 'click'
btn1.addEventListener('click', loadCustomer);

btn2.addEventListener('click', loadCustomers);


// declaration de l'element ou on va afficher le resultat de la requete
var output1 = document.getElementById('customer');

var output2 = document.getElementById('customers');

// fonction loadCustomer
function loadCustomer() {

    let request1 = new XMLHttpRequest();
    
    request1.onload = function () {

        console.log(this);
        
        if(this.readyState == 4 && this.status == 200){
            var customer = this.response; 
            output1.innerHTML= `<ul><li> id : ${customer.id}  </li><li> name :  ${customer.name} </li><li> company : ${customer.company} </li><li> phone : ${customer.phone} </li></ul>`

        }else if(this.readyState == 4 && this.status == 404){
            alert('Erreur 404');
        }
            
    };

    request1.open('GET', 'customer.json');
    request1.responseType='json';
    request1.send();


   }

   // fonction loadCustomers 
function loadCustomers() {

    let request2 = new XMLHttpRequest();


    request2.onload = function () {

        console.log(this);

        if(this.readyState == 4 && this.status == 200){
            var customers =this.response; 

            for( var i in customers ){

                output2.innerHTML = `<ul><li> id : ${customers[0].id}  </li><li> name :  ${customers[0].name} </li><li> company : ${customers[0].company} </li><li> phone : ${customers[0].phone} </li></ul>
                                     <br><ul><li> id : ${customers[1].id}  </li><li> name :  ${customers[1].name} </li><li> company : ${customers[1].company} </li><li> phone : ${customers[1].phone} </li></ul>
                                     <br><ul><li> id : ${customers[2].id}  </li><li> name :  ${customers[2].name} </li><li> company : ${customers[2].company} </li><li> phone : ${customers[2].phone} </li></ul>`

            
            }

        }else if(this.readyState == 4 && this.status == 404){
            alert('Erreur 404');
        }
            
    };

    request2.open('GET', 'customers.json');
    request2.responseType='json';
    request2.send();


}
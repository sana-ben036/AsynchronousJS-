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
            output1.innerHTML= '<ul><li> id :' + customer.id +'</li><li> name :' + customer.name +'</li><li> company :' + customer.company +'</li><li> phone :' + customer.phone +'</li></ul>'

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
            var data =this.response; 
            var customer = data.customer;

            for( var i=0; i<customer.length; i++){

                output2.innerHTML = '<ul><li> id :' + customer[0].id +'</li><li> name :' + customer[0].name +'</li><li> company :' + customer[0].company +'</li><li> phone :' + customer[0].phone +'</li></ul>'

               


            }

        }else if(this.readyState == 4 && this.status == 404){
            alert('Erreur 404');
        }
            
    };

    request2.open('GET', 'customers.json');
    request2.responseType='json';
    request2.send();


}
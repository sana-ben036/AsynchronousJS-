// declaration de l'element ou on va mettre l'event

var btn1 = document.getElementById('button1');

var btn2 =  document.getElementById ('button2');

// creation event 'click'
btn1.addEventListener('click', loadCustomer);

btn2.addEventListener('click', loadCustomers);


// declaration de l'element ou on va afficher le resultat de la requete
var result1 = document.getElementById('customer');

var result2 = document.getElementById('customers');

// fonction loadCustomer
function loadCustomer() {


    let request1 = new XMLHttpRequest();


    request1.onload = function () {

       result1.innerHTML=this.responseText;

    };
    request1.open('GET', 'customer.json');
    request1.send();


   }

   // fonction loadCustomers
function loadCustomers() {

    let request2 = new XMLHttpRequest();


    request2.onload = function () {

    result2.innerHTML= this.responseText;

    };
    request2.open('GET', 'customers.json');
    request2.send();


}
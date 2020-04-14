var btn1 = document.getElementById('button1');

var btn2 =  document.getElementById ('button2');


btn1.addEventListener('click', loadCustomer);

btn2.addEventListener('click', loadCustomers);



var result1 = document.getElementById('customer');

var result2 = document.getElementById('customers');


function loadCustomer() {


    let request = new XMLHttpRequest();


    request.onreadystatechange = function () {

       result1.innerHTML=this.responseText;

    }
    request.open('GET', 'customer.json');
    request.send();


   }

function loadCustomers() {


    let request = new XMLHttpRequest();


    request.onreadystatechange = function () {

    result2.innerHTML= this.responseText;

    }
    request.open('GET', 'customers.json');
    request.send();


}
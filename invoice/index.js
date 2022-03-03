let form = document.querySelector('.order');
let details = [];
let total = document.querySelector('.total');
let name1 = document.getElementById('nameOfItem');
let quantity = document.getElementById('quantity');
let rate = document.getElementById('rate');
let amount = document.getElementById('amount');
let finalTotal = document.querySelector('.subTotal');
let finalTax = document.querySelector('.totalTax');
let vat = document.getElementById('tax');
let totalDue = document.querySelector('.totalDue');
let currency = document.getElementById('currency');
let totalAmt = document.querySelector('.totalAmt');
let curr = document.querySelector('.curr');
let invoice = document.getElementById('invoice');


let subTotal = 0;
let tax = 0;


const currencyRate = {
    'INR': {
        'USD': 0.013408214,
        'EUR': 0.011808502,
        'AED': 0.049244522,
    },
    'USD':{
        'INR': 74.585299,
        'EUR': 0.88083805,
        'AED': 3.6725,
    },
    'EUR':{
        'INR': 84.671123,
        'USD': 1.1351855,
        'AED': 4.1689688,
    },
    'AED':{
        'INR': 20.311863,
        'EUR': 0.23990733,
        'USD': 0.27229408,
    },
};
// let oldCurrency = currency.value;
// currency.addEventListener('change',()=>{
//     let newCurrency = currency.value; 
//     let multiplier = currencyRate[oldCurrency][newCurrency];    
    
//     window.mult = multiplier;
//     oldCurrency = newCurrency;
//     subTotal = subTotal*window.mult;

    
      
// })
rate.addEventListener('change', ()=>{
    amount.value = (rate.value)*(quantity.value);
    amount.innerHTML = amount.value;
})
vat.addEventListener('change', ()=>{
    vat = parseInt(vat.value,10);
    tax=parseInt(subTotal*(vat/100),10);   
    finalTax.innerHTML = tax; 
    totalDue.innerHTML = subTotal+tax;
    curr.innerHTML = currency.value;
    totalAmt.innerHTML = subTotal+tax;
})
document.getElementById('copyButton').addEventListener('click', ()=>{
    let temp=[];
    temp.push(name1.value);
    temp.push(quantity.value);
    temp.push(rate.value);
    temp.push(amount.value);
    details.push(temp); 
    subTotal+=parseInt(amount.value,10);    
    finalTotal.innerHTML = subTotal;   
    console.log(details);
    let html = '';
    html += `<table class="table table-striped">
 <thead>
 <th style="width: 40%;" scope="col">Name</th>
 <th  scope="col">Quantity</th>
 <th  scope="col">Rate</th>
 <th  scope="col">Amount</th>
 </thead>
 <tbody>`
 details.forEach(function(element,index){ 
 
html +=
 `<tr>
 
 <td scope="row">${element[0]}</td>
 <td>${element[1]}</td>
 <td>${element[2]}</td> 
 <td>${element[3]}</td>
 </tr>`
}); html+=` </tbody> </table>`

    total.innerHTML = html;
})

document.getElementById('newRowButton').addEventListener('click', ()=>{
    // console.log(window.mult);
    // if(window.mult===undefined) window.mult=1;    
    let temp=[];
    temp.push(name1.value);
    temp.push(quantity.value);
    temp.push(rate.value);
    temp.push(amount.value);
    subTotal+=parseInt(amount.value,10);    
    finalTotal.innerHTML = subTotal;    
    details.push(temp);
    let html = '';
    html += `<table class="table table-striped">
 <thead>
 <th style="width: 40%;" scope="col">Name</th>
 <th  scope="col">Quantity</th>
 <th  scope="col">Rate</th>
 <th  scope="col">Amount</th>
 </thead>
 <tbody>`
 details.forEach(function(element,index){ 
 
html +=
 `<tr>
 
 <td scope="row">${element[0]}</td>
 <td>${element[1]}</td>
 <td>${element[2]}</td> 
 <td>${element[3]}</td>
 </tr>`
}); html+=` </tbody> </table>`

    total.innerHTML = html;
    name1.value = ' ';
    quantity.value = ' ';
    rate.value = ' ';
    amount.value = ' ';
    // console.log(details);
})

// window.jsPDF = window.jspdf.jsPDF;
//         var doc = new jsPDF();
        
//         var elementHandler = {
//         '#editor': function (element, renderer) {
//             return true;
//         }
//         };
//         document.getElementById('download').addEventListener('click',()=>{
            
            
//             doc.fromHTML(invoice,15,15,
//                 {
//                 'width': 180,'elementHandlers': elementHandler
//                 });     
//             doc.save('invoice.pdf');

//         });
       
       



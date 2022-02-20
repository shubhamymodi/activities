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
let subTotal = 0;
let tax = 0;
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
    console.log(details);
})
function generatePDF(){
    
    const element = document.getElementById('invoice');
    html2pdf().from(element).save();
    console.log('clicked');
}

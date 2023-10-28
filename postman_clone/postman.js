const input = document.querySelector('.input');
const send = document.querySelector('#send');
const method = document.querySelector('#method');
const tableBody = document.querySelector('.tbody');

send.addEventListener('click',async function () {
    let url = input.value

    let response = await fetch(url);
    let products =  await response.json()
    
    showData(products);
})

// async function getData(data) {
//     let result = await fetch(data);
//     // console.log(result);
//     let obj = await result.json()
//     return obj;
// }

function showData(products) {
    let html =" ";
    for (const product of products) {
        console.log(product.id);

         html += `<tr class="data">
                  <td>${product.id}</td>
                  <td>${product.title}</td>
                  <td>${product.image}</td>
                 </tr>`
    }
     tableBody.innerHTML = html;
}
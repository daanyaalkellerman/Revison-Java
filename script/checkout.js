let purchased = JSON.parse(localStorage.getItem('purchased'))

let table = document.querySelector('table')

table.innerHTML= purchased.map((item,index) =>{
    return `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>R${item.price}</td>
            <td><img src="${item.url}"</td>
        </tr>
    `
})
//this is basically the cart without the sorting function
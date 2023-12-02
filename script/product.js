//add to cart
//can use reduce to add all the amount of price together
let purchased = [];
let main = document.querySelector('main')
let items = JSON.parse(localStorage.getItem('items'))
main.innerHTML = items.map(function(item,index){
    return `
        <div>
            <h2>${item.name}</h2>
            <p><img src = '${item.url}'</p>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button value= '${index}' data-add >ADD TO CART</button>
        </div>
    `
}).join('')

function add(index){
    purchased.push(items[index])
    localStorage.setItem('purchased', JSON.stringify(purchased))
}
//check for this event
main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
        // alert('button clicked')
        add(event.target.value)
    }
})

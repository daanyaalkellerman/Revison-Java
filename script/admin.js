//array of items/leave it blank so that the items can be stored>>>>>>>>>>>>
let items = [];


//what not to do /object created manually
let object1 = {
    id : 1,
    name:'Nike Shoe',
    description: 'This is better',
    price: 800,
    url: 'https://static.nike.com/a/images/t_default/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png'
};

//constructor function to create objects>>>>>>>>>>>>>>>>>>>>>>>>>>
//use pascal case
//DO THIS!!!!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Constructor(id,name,description,price,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
};
//creating objects/products second item created using constructor

let item2 = new Constructor(2,'AnotherNike','This is another nike',700,'https://static.nike.com/a/images/t_default/q3tx0zbjfdhuayuuqtj4/ebernon-low-shoe-04dgFq.png');

//pushes items into array
items.push(object1, item2);

//getting the tag
let table = document.querySelector('table')
//setting data to variable and display>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//items is the array
//map takes two parameters and creates a new array
//referring to the parameters that youve given
//these are keywords

function daanyaal(){
    //as the page loads its going to print
    let products = items.map(function(item,index){
        // console.log(item);
        // console.log(index);
        //return template literal
        return `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>R${item.price}</td>
                <td>${item.description}</td>
                <td><img src="${item.url}"></img></td>
                <td><button>EDIT</button></td>
                <td><button class='delete' value='${index}'>DELETE</button></td>
            </tr>
            `
        })
        table.innerHTML = products.join('')


        let deleteButton = document.querySelector('.delete')
        function remove(position){
           items.splice(position,1)
           //sets the data in the localstorage/NESTED FUNCTION
           favourite()
           //call the function to view the data resetting the array /NESTED FUNCTION
           daanyaal()
        }
        table.addEventListener('click',function(){
            //event.target will pick up every click
            //class of delete classList lets you call on the class specifically
            if(event.target.classList.contains('delete')){
                //event.target targets your button accessing the value
            //    alert(event.target.value)
                remove(event.target.value,daanyaal())
            }
        })
}daanyaal()

//localstorage function
function favourite(){
    //localstorage will be run in an add/submit item function
    //sets the array in local storage
    localStorage.setItem('items',JSON.stringify(items));
    //sets array from the local storage tp array(items) in code
    //JSON.parse turns the string into an object
    items = JSON.parse(localStorage.getItem('items'));

}
//to style in javascript
table.style.backgroundColor='teal'
//SPINNER!!!!!>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//use conditional statement to display the spinner
//this has to be the else
// table.style.display='none'
//For delete button>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//will use splice to delete the item


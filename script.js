console.log("Hello world");

const salad = ['🍌', '🥔', '🍅', '🥒', '🥦', '🍄']

// console.log(salad[0]);

for (let i=0; i<3; i++)
{
    console.log(i * 2);// 0, 2, 4
    // console.log(salad[i])
}
// console.log(i);


for (let i=0; i < salad.length; i++){
    console.log(salad[i]);
}

// Another way to do array.reduce method 
const students = ['aaaa', 'bbbb', 'csadqweqwe', 'dsfreyystryufghh']
let finalValue = 0;
for (let i=0; i<students.length; i++){
    finalValue += students[i].length;
} 
console.log(finalValue);


// Excersize 
// array with three shops, using loop output their name
const shops = ['Zara', 'Netto', 'Amazon'];
for (let k=0; k<shops.length; k++)
{
    console.log(shops[k]);
}

// We can use different conditions, different way of changing iterator
for (let i=50; i==0; i--)
{
    // Do something
}

// This loop creates a list of shop names using innerHtml as adding html elements
// Links are constructed with assumtion that the website exists
let myList = document.querySelector("#my-list");
for (let shop of shops)
{
    let shopNode = document.createElement('li');
    // shopNode.innerText = shop;
    shopNode.innerHTML = `<a href='https://www.${shop}.com'>${shop}</a>`;
    myList.appendChild(shopNode);
}

const superShops = [
    {
        name: "Zara",
        url: "https://www.zara.com",
        picture: "https://pbs.twimg.com/profile_images/1677292395199709184/xWH-1CRw_400x400.jpg"
    },
    {
        name: "Netto",
        url: "https://www.netto.dk",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/NettoLogo2019-S.svg/1920px-NettoLogo2019-S.svg.png"
    },
    {
        name: "Amazon",
        url: "https://wwww.amazon.de",
        picture: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
]

// This loop using javaScript HTMLElements in order to create images of the shops that acts as links.
for (let shop of superShops)
{
    let shopNode = document.createElement('li');
    let shopImage = document.createElement('img');
    shopImage.src=shop.picture;
    shopImage.width=100;
    let shopLink = document.createElement('a');
    shopLink.href = shop.url;

    shopLink.appendChild(shopImage);
    shopNode.appendChild(shopLink);
    myList.appendChild(shopNode);
}




document.body.innerHTML=`<div class="heading-container">
<h1>An Ice and Fire<h1>

</div>
<div id="mainContainer" class="main-container"></div>`;

const getData=async() => {
    try{
    const data=await fetch("https://www.anapioficeandfire.com/api/books")
    const books= await data.json()
    mainContainer.innerHTML="";
    books.forEach(book => {
        displayData(book)
        
    });
}catch(error) {
    console.log(error)
}
};
getData();



const displayData=(obj)=> {
    mainContainer.innerHTML+=`
    <div class="container">
    <h1 class="css1">Name:<span>${obj.name}</span>, ISBN:<span> ${obj.isbn}</span></h1>
    <h2 class="css2"> Authors:<span>${obj.authors}</span></h2>
    <h3 class="cs3"> Number of Pages:<span>${obj.numberOfPages}</span><h3>
     
    <h4 class="css5">Publisher Name:<span>${obj.publisher}</span> , Release Date:<span>${obj.released}</span></h4>
    <h4 class="css6">Characters${obj.characters}</span></h4>
     </div>`
}
let url="https://www.themealdb.com/api/json/v1/1/search.php?s="
let search_url=`https://www.themealdb.com/api/json/v1/1/search.php?s=`





let output="";
let outputFav="";
let res=[]
let menu_name=[]
let inp=""
let fil=[]
let favList=[]
let favour=[]
let val= document.querySelector(".cards");
let valFav= document.querySelector("#wishlist");
console.log(valFav)

let wishList=[];


function getData() {
    return false
}

let searchButton=document.getElementById("search-button")


//get api data and display the data

const search_api=async()=>{
    let z=document.getElementById('search-box')
    let search=z.value
   
    if(search !==""){
        val.innerHTML="";

    let data1=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
   // console.log(data)
    
        let result1=await data1.json();
        console.log(result1)
    

   for (let i in result1.meals){
        fil.push(result1.meals[i]);
   }
    
    
   
    
    console.log(fil)

    for (let item of fil){
       // console.log(item[0])
         output=`
                 <div id="${item.idMeal}" class="product my-3 " >
                 <div id=${item.idMeal} display="none">
                    <img  src="${item.strMealThumb}" class="card-img-top" alt="">
                    <h5 class="title">${item.strMeal}</h5>
                    <p class="description"><b>Instruction--</b>${item.strInstructions !=null? item.strInstructions.slice(0,500):item.strInstructions}...</p>
                    <a href="${item.strSource}" target="_blank" class="button">Read More</a>
                    </div>
                    <input type="button" id="${item.idMeal}"   class="favourite"  value="Add To Fav"  title="Add to Favourite" ></input>
                </div>
               
    
        `;
        
        //console.log(output)
        
        val.innerHTML+=output;
        wishlist()
       
    }
    
    console.log(fil)
}
else{
     val.innerHTML="";
    // console.log(val)

    let data=await fetch(url);
    let result=await data.json();
    
    for (let i in result.meals){
        res.push(result.meals[i])
    }
   
    for(let i=0;i<res.length;i++){
        menu_name.push(res[i].strMeal)
    }
    //console.log(menu_name)

    for (let item of res){
        //console.log(item)
         output=`
                 <div id="${item.idMeal}"  >
                 <div id="${item.idMeal}" class="product my-3" display="none">
                    <img  src="${item.strMealThumb}" class="card-img-top" alt="">
                    <h5 class="title">${item.strMeal}</h5>
                    <p class="description"><b>Instruction--</b>${item.strInstructions !=null? item.strInstructions.slice(0,500):item.strInstructions}...</p>
                    <a href="${item.strSource}" target="_blank" class="button">Read More</a>
                    </div>
                    <input type="button" id="${item.idMeal}"   class="favourite"  value="Add To Fav" title="Add to Favourite" ></input>
                </div>
                
    
        `;
        
      // console.log(output)
        
        val.innerHTML+=output;
        wishlist()
       
       


}

//favour=res;

res=[]
    // for(let i=0;i<result.length;i++){
    //     menu_name.push(result[i].strMeal)
    // }
    
// displayData();

}

}


searchButton.addEventListener("click",search_api())

//add and remove from favlist
function wishlist(){
    let products=document.querySelectorAll('.favourite')
console.log(products)
for (let i = 0; i < products.length; i++)
    {
        products[i].onclick = function(e) {
            addItem(e);
        }
    }
   function addItem (e) {
        let productId = e.target.getAttribute("id");
        if(!wishList.find(element => element === productId)){
            
            let productDiv = document.getElementById(productId);
    
            let wishDiv = document.createElement("div");
            wishDiv.setAttribute("id",  "wish" + productId);
            wishDiv.setAttribute("class", "product");
            wishDiv.setAttribute("style", "margin-bottom: 10px;")
            let rem=document.getElementById(productId)
            rem.lastElementChild.disabled=true
            
       
            wishDiv.innerHTML += productDiv.innerHTML;
            let removeBtn = document.createElement("input");
            removeBtn.setAttribute("id", "remove"+ productId);
            removeBtn.setAttribute("type", "button");
            removeBtn.setAttribute("value", "Remove");
            
            // removeBtn.setAttribute("class", "removebut");
            removeBtn.onclick = () => removeItem(productId);
            wishDiv.appendChild(removeBtn);
          
           
    
            let aside = document.getElementById("wishlist");
            
            aside.appendChild(wishDiv);
            
            wishList.push(productId);

           
            
           // console.log(wishList)
        }
    }
    function removeItem(productId) {
        document.getElementById("wish" + productId).remove();

        let addBut=document.getElementById(productId)
        addBut.lastElementChild.disabled=false
       
        
        wishList = wishList.filter(element => element !== productId)
    }

}
   



   
    
    






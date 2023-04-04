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



function ac(value) {
    let z=document.getElementById('search-box')
    let search=z.value
    
    document.getElementById('datalist').innerHTML = '';
    //setting datalist empty at the start of function
    //if we skip this step, same name will be repeated
      
    l=value.length;
    //input query length
for (var i = 0; i<menu_name.length; i++) {
    if(((menu_name[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
    {
        //comparing if input string is existing in tags[i] string
  
        var node = document.createElement("option");
        node.setAttribute("value",menu_name[i])
        var val = document.createTextNode(menu_name[i]);
        node.appendChild(val);
  
        document.getElementById("datalist").appendChild(node);
            //creating and appending new elements in data list
        }
    }

    //let data=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    //let result=data.json();
    
   // console.log(result.meals)
    
}




// const fav=()=>{
//    // e.preventDefault();
//     console.log("thanks")

//     let icon=document.querySelectorAll(".product")
//     console.log(icon.length)

//     for (let i = 0; i < icon.length; i++) {
//         console.log(icon[i])
//         icon[i].addEventListener("click", function (event) {
//             if(event.currentTarget.classList.contains('product')){
//                 if(event.currentTarget.classList.contains('is-favourite')){
//                     //remove the class
//                     event.currentTarget.classList.remove('is-favourite')
//                     //event.currentTarget.textContent='Add To Fav'

//                 }else{
//                     //add the class
//                     event.currentTarget.classList.add('is-favourite')
//                     //event.currentTarget.textContent='Remove'
//                     let proID=event.target.getAttribute('id')
//                     // console.log(proID)
//                    // console.log(favour)
                   
//                     for(let i=0;i<favour.length;i++){
//                         // console.log(favour[i].idMeal)
//                         if(proID==favour[i].idMeal){
//                             let wishDiv = document.createElement("div");
//                              wishDiv.setAttribute("id", proID);
//                              wishDiv.setAttribute("class", "product");
//                              wishDiv.setAttribute("style", "margin-bottom: 10px;")
//                              valFav.innerHTML += val.innerHTML;
//                              let aside = document.getElementById("wishlist");
//                             aside.appendChild(wishDiv);



//                             // outputFav= ` <div id="${favour[i].idMeal}" class="product1 " >
//                             //     <p id=${favour[i].idMeal} display="none"></p>
//                             //     <img  src="${favour[i].strMealThumb}" class="card-img-top" alt="">
//                             //     <h5 class="title">${favour[i].strMeal}</h5>
                                
//                             //     <a display="none" href="${favour[i].strSource}" target="_blank" class="button">Read More</a>
//                             //     <button id="${favour[i].idMeal}"   class="favourite" onClick="fav()"  title="Add to Favourite" >Add To Fav</button>
//                             // </div>`;


//                             console.log(outputFav)
//                             valFav.innerHTML+=outputFav;
                            
//                             //op.innerHTML+=val.innerHTML

//                         }
                        
                        
//                     }
//                     // console.log(valFav)
                    

                


//                 }
                

//             }
              
//         });

//     }
    
    
    
// }

    
        


















































///do not touch


let searchButton=document.getElementById("search-button")

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
       
       
            
        


        


}
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

            localStorage.setItem("favList",wishList)
            console.log(favList)
            
           // console.log(wishList)
        }
    }
    function removeItem(productId) {
        document.getElementById("wish" + productId).remove();

        let addBut=document.getElementById(productId)
        addBut.lastElementChild.disabled=false
       
        
        wishList = wishList.filter(element => element !== productId)
    }



favour=res;

res=[]
    // for(let i=0;i<result.length;i++){
    //     menu_name.push(result[i].strMeal)
    // }
    
// displayData();

}

}


searchButton.addEventListener("click",search_api())

localStorage.getItem(favList)
console.log(favList)


   




//fetch the api
//  const response=async()=>{
    

//     let data=await fetch(url);
//     let result=await data.json();
    
//     for (let i in result.meals){
//         res.push(result.meals[i])
//     }
   
//     for(let i=0;i<res.length;i++){
//         menu_name.push(res[i].strMeal)
//     }
//     console.log(menu_name)

// displayData();

// }
//to display the data from 

// function displayData(){
//     for (let item of res){
//         //console.log(item)
//          output=`
//                  <div class="product my-3 " >
//                     <img  src="${item.strMealThumb}" class="card-img-top" alt="">
//                     <h5 class="title">${item.strMeal}</h5>
//                     <p class="description"><b>Instruction--</b>${item.strInstructions !=null? item.strInstructions.slice(0,780):item.strInstructions}...</p>
//                     <a href="${item.strSource}" target="_blank" class="button">Read More</a>
//                     <button id="favourite" class="favourite" title="Add to Favourite" >Add to Fav</button>
//                 </div>
    
//         `;
//         let val= document.querySelector(".cards");
//         val.innerHTML+=output;
//         var fav=document.getElementById("favourite")
//         console.log(fav)

//         fav.addEventListener("click",function(){
//             console.log("yes thanks you")
//         })

       
//         // <i class="fa-regular fa-bookmark" style="color: #0c0d0d;"></i>

       
    
//     }

// }


// function displayData(){
//     for (let item of res){
//         //console.log(item)
//          output=`
//                  <div class="product my-3 " >
//                     <img  src="${item.strMealThumb}" class="card-img-top" alt="">
//                     <h5 class="title">${item.strMeal}</h5>
//                     <p class="description"><b>Instruction--</b>${item.strInstructions !=null? item.strInstructions.slice(0,800):item.strInstructions}...</p>
//                     <a href="${item.strSource}" target="_blank" class="button">Read More</a>
//                     <a id="favourite" class="favourite" title="Add to Favourite"><i id="fav-button" class="fa-regular fa-bookmark" style="color: #0c0d0d;"></i></a>
//                 </div>
    
//         `;
       
//         let val= document.querySelector(".cards");
//         val.innerHTML+=output;
       
    
//     }
    

// }




 
 //response();



   
    
    






console.log("dht sale");
displayItems();
function book(title,author,type){
    this.title=title;
    this.author=author;
    this.type=type;
}


function displayItems(){
    let item=document.getElementById("tbody");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    bookObj=[];
    else{
        bookObj=JSON.parse(notes);
    }
    let str="";
    bookObj.forEach((element,index) => {
        str+= `<tr>
        <th scope="row">${index+1}</th>
        <td>${element.title}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        <td><button type="button" id="${index}" onclick="deleteItem(this.id)" class="btn border border-danger text-danger"  id="delete"><i class="fas fa-times"></i></button></td>
      </tr>`
    });
    item.innerHTML=str;
}
//<i class="fas fa-times"></i>
//<button type="button"   class="btn border border-danger text-danger"  id="delete"><i class="fas fa-times"></i></button>
function add (obj){
    let notes=localStorage.getItem("notes");
    if(notes==null)
    bookObj=[];
    else{
        bookObj=JSON.parse(notes);
    }
    bookObj.push(obj);
    localStorage.setItem("notes",JSON.stringify(bookObj));
    displayItems();
   
  
}
function clear(){
    console.log("adwe");
    let btn=document.getElementById("formhead");
    btn.reset();
}

let btn=document.getElementById("formhead");
btn.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    let name=document.getElementById("name").value;
    let author =document.getElementById("author").value;
     let f=document.getElementById("check1");
     let c=document.getElementById("check2");
     let h=document.getElementById("check3");
     let type
     if(f.checked){
         type=f.value;
     }
     else if(c.checked){
         type=c.value;
     }else if(h.checked){
         type=h.value;
     }
     
       let bobj=new book(name,author,type);
       add(bobj);
       clear();
       console.log(bobj);
       
})

let delb=document.getElementById("delete");
delb.addEventListener("click",deleteItem())

function deleteItem(ele){
    
    let notes=localStorage.getItem("notes");
    if(notes==null)
    bookObj=[];
    else{
        bookObj=JSON.parse(notes);
    }
    bookObj.splice(ele,1);
    localStorage.setItem("notes",JSON.stringify(bookObj));
    displayItems();
}
function convertS(seconds) {
   
   const h = Math.floor(seconds / 3600); 
   const m = Math.floor((seconds % 3600) / 60); 
 
   return { h, m };
 }

function getData (id=1000,sort){
   
   document.getElementById("all-btn").className="btn btn-light m-3";
   document.getElementById("draw-btn").className="btn btn-light m-3";
   document.getElementById("music-btn").className="btn btn-light m-3";
   document.getElementById("comedy-btn").className="btn btn-light m-3";
   if(id==1000){

    let a = document.getElementById("all-btn");
    a.className="btn btn-danger m-3"

   }
   else if(id==1001){

      let a = document.getElementById("music-btn");
      a.className="btn btn-danger m-3";
   }
   else if(id==1003){
      let a = document.getElementById("comedy-btn");
      a.className="btn btn-danger m-3";

   }
   else{
      let a = document.getElementById("draw-btn");
      a.className="btn btn-danger m-3";
   }


    let hmdiv = document.getElementById("home-data");
    hmdiv.innerHTML=``;
     
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res=> res.json())
    .then(data=>{
    console.log(data)
    
   if ( data.status==false){

    hmdiv.innerHTML=`
    <h1 class="text-center mt-5">
    <img class="w-25" style="width: 200px;" src="https://github.com/phitronio/PHero-Tube/blob/main/Icon.png?raw=true" alt="">
</h1>
    
    `
    return;
   }
   

    const span = document.createElement("span");
    let img= document.createElement("img");
    img.src="594-5944278_instagram-verified-badge-png-file-blue-tick-in.png";

    img.style="width:24px;"
    span.appendChild(img);

    let newArray = data.data;

   //  for(let i=0;i<newArray.length;i+=1){


   //    for(let j=1;j<newArray.length;j+=1){

   //       let view1 =parseFloat(newArray[i].others.views);
   //       let view2 =parseFloat(newArray[j].others.views);
   //       console.log(view1);
   //       console.log(view2);
      
   //       if(view1<view2){

   //        let temp = newArray[i];
   //        newArray[i]=newArray[j];
   //        newArray[j]=temp;

   //       }
   //    }
   

   //  }

    if(sort==true){
      let sortedArray = data.data.sort((a,b)=>(parseInt(a.others.views) < parseInt(b.others.views)) ? -1 : (parseInt(a.others.views) >parseInt(b.others.views)) ? +1 : 0
      )
    }
     
    

     
 const a = data.data.forEach(d=>{

   const time = parseInt(d.others.posted_date)
  
   const {h,m} = convertS(time);
   console.log(h,m)
   const myDiv = document.createElement("div");

   myDiv.className="col-lg-3 col-md-3 col-sm-12"
   myDiv.innerHTML=`
   
   <div class="col mt-3" >
   <div class="card " >
     <img style=" height: 135px;" src="${d.thumbnail}" class="card-img-top" alt="...">
     <p style="position: absolute; top: 45%; left:65%;color: white;background-color: black;">${h?h+"h "+m+ "m":""}</p>
     <div class="card-body ">
     <div class="d-flex ">

     <div><img style="border-radius: 50%; width:40px; height: 40px;" src="${d.authors[0].profile_picture}" class="" alt="..."> </div>
     <div class="ms-3"> <h5 class="card-title fw-bold">${d.title}<p class="h6 fw-light">${d.authors[0].profile_name}  ${d.authors[0].verified
        ?span.outerHTML:""}</p> <p class="h6 fw-light">${d.others.views+" Views"} </p></h5>


     
     
     </div>

  </div>
     

      
    
   
   
   `;

   hmdiv.appendChild(myDiv);



 })
  
   
    
    
    })
    
    
    
    }
    
   

   getData(1000);
   
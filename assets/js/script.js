let uploadIcon=document.getElementById("upload");
uploadIcon.onclick=function(){
    this.nextElementSibling.click()
}



let icon = document.createElement("i");
icon.className = "fas fa-trash-alt";

uploadIcon.nextElementSibling.onchange=function(e){
    Upload(e.target.files)
}


 let area=document.querySelector(".item");
 area.ondragover=function(e){
    e.preventDefault();
 }


 area.ondrop=function(e){
    e.preventDefault();
    Upload(e.dataTransfer.files)
 }

 let fileCount = 0;
 function Upload(files){
    Array.from(files).forEach(file=>{
        let reader=new FileReader();
        reader.onloadend=function(e){
            
        
           
            
            let tr=document.createElement("tr");

            
            
            let td=document.createElement("td");
            td.innerText = ++fileCount;
                 

            let tdName=document.createElement("td");
            tdName.innerText=file.name;

            let tdImage=document.createElement("td");
            let img=document.createElement("img");
            img.setAttribute("src", e.target.result);
            img.style.width="100px";
            img.style.height="100px";
            tdImage.append(img);
            

            

            let tdSize=document.createElement("td");
            let fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB";
            tdSize.innerText=fileSize;

            let tdDelete = document.createElement("td");
            tdDelete.style.cursor="pointer"
            let icon = document.createElement("i");
            icon.className = "fas fa-trash-alt";
            tdDelete.appendChild(icon);

            tdDelete.onclick=function(){
                
                this.parentElement.remove();
                tdDelete.remove=fileCount--;
                
                
            }

            tr.append(td,tdName,tdImage,tdSize,tdDelete);

            table.lastElementChild.append(tr);

        }
        reader.readAsDataURL(file)
    })
 }

 
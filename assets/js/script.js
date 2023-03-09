let hide = document.querySelector("#head");
let hide1 = document.querySelector("#removeAll");

let arr = [];

let uploadIcon=document.getElementById("upload");
uploadIcon.onclick=function(){
    this.nextElementSibling.click()
}


let removeAll = document.getElementById('removeAll');
removeAll.onclick = function() {
    
  let tableRows = document.querySelectorAll('table tr');
  for (let i = 1; i < tableRows.length; i++) {
    tableRows[i].remove();
    fileCount--;
                let files = table.lastElementChild.getElementsByTagName("tr");
                for(let i = 0; i < files.length; i++) {
                    files[i].getElementsByTagName("td")[0].innerText = i+1;
                }
  }
  
  hide.classList.add("rem");
  hide1.classList.add("rem");

};


let icon = document.createElement("i");
icon.className = "fas fa-trash-alt";

uploadIcon.nextElementSibling.onchange=function(e){
    let input = document.querySelector(".file");
    Upload(e.target.files)
    input.value="";
}


 let area=document.querySelector(".item");
 area.ondragover=function(e){
    e.preventDefault();
 }


 area.ondrop=function(e){
    e.preventDefault();
    Upload(e.dataTransfer.files)
 }

 let fileCount = 1;
 function Upload(files){
    Array.from(files).forEach(file=>{
        let reader=new FileReader();
        reader.onloadend=function(e){
            
                
            hide.classList.remove("rem");
            hide1.classList.remove("rem");
           
            
            let tr=document.createElement("tr");

            
            
            let td=document.createElement("td");
            
            td.innerText = fileCount++;

                 
    
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
            icon.style.color="red"
            icon.className = "fas fa-trash-alt";
            tdDelete.appendChild(icon);

            arr.push(tr)

            tdDelete.onclick=function(){                
                this.parentElement.remove();
                fileCount--;
                let files = table.lastElementChild.getElementsByTagName("tr");
                for(let i = 0; i < files.length; i++) {
                    files[i].getElementsByTagName("td")[0].innerText = i+1;
                }
                
                arr.pop();
            console.log(arr);

                if(arr.length<1){
                    hide.classList.add("rem");
                    hide1.classList.add("rem");
                }
            }

            tr.append(td,tdName,tdImage,tdSize,tdDelete);

            table.lastElementChild.append(tr);

        }
        reader.readAsDataURL(file)
    })
 }

 
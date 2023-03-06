let uploadIcon=document.getElementById("upload");
uploadIcon.onclick=function(){
    this.nextElementSibling.click()
}

uploadIcon.nextElementSibling.onchange=function(e){
    Array.from(e.target.files).forEach(file=>{
        let reader=new FileReader();
        reader.onloadend=function(e){

            
            
            let tr=document.createElement("tr");
            let td=document.createElement("td")

            let tdName=document.createElement("td");
            tdName.innerText=file.name;

            let tdImage=document.createElement("td");
            let img=document.createElement("img");
            img.setAttribute("src", e.target.result);
            img.style.width="100px";
            img.style.height="100px";
            tdImage.append(img);

            let tdSize=document.createElement("td");
            tdSize.innerText=file.size;

            let tdDelete=document.createElement("td");
            tdDelete.innerText=("X")
            tr.append(td,tdName,tdImage,tdSize,tdDelete);

            table.lastElementChild.append(tr);

        }
        reader.readAsDataURL(file)
    })
}
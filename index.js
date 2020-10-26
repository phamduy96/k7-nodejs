
function save(){
    var liSearched = document.createElement("LI");
    var text = document.getElementById("input").value;
    liSearched.innerHTML = `
        <i class="fas fa-times button"></i>
        <span class="input">${text}</span>
    ` 
    document.getElementById("myList").appendChild(liSearched);   
    var iSearch = document.getElementsByClassName("fa-times");
    for(i = 0; i < iSearch.length; i++){
        iSearch[i].addEventListener("click", function(){
            this.parentElement.style.display = 'none';
        })
    } 
    var input = document.getElementById("input");
    input.addEventListener("blur", function(){
        for(var j = 0; j < liSearched.length; j++){
            liSearched[j].style.display = "none";
        }
    });
    
}
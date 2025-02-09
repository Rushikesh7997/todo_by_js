var social_media = document.getElementById("social_media")
var select_text = document.getElementById("select_text")
var options = document.getElementsByClassName("options")
var list = document.getElementById("list")
var rotateIcon = document.getElementById("rotateIcon")

social_media.onclick = function(){
    list.classList.toggle('hide')
    rotateIcon.classList.toggle("rotate");

}

for(option of options){
    option.onclick = function(){
        select_text.innerHTML = this.textContent;
        list.classList.toggle('hide') 
        rotateIcon.classList.toggle("rotate");
    }
}
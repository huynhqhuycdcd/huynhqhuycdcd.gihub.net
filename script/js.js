const itemSlidebar=document.querySelectorAll(".cartegory-left-li")
itemSlidebar.forEach(function(menu,index){
    menu.addEventListener("click", function(){
        menu.classList.toggle("block")
    })
})
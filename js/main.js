//Global variable for starting page
var currentPageId = "page-home";
var currentSelectorId = "home";

//Function for getting the button ids
function getButtons(){
    //List of button ids
    var list = ["home", "page", "feed", "about", "discover1", "discover2", "discover3", "discover4", "article1", "article2", "article3", "article4", "article5", "article6", "article7", "article8", "article9", "article10"];
    return list;
}

//Make sure the window is loaded before we add listeners
window.onload = function(){
    var pageIdList = getButtons();
    //Add an event listener to each button
    pageIdList.forEach(function(page){
        document.getElementById(page).addEventListener("click", changePage, false);
    });
}

function changePage(){
    var currentSelector = document.getElementById(currentSelectorId);
    var currentPage = document.getElementById(currentPageId);
    var pageId = "page-"+this.id;
    var page = document.getElementById(pageId);
    var pageSelector = document.getElementById(this.id);
    
    if(page.classList.contains("active")){
        return;
    }

    currentSelector.classList.remove("button-active");
    currentSelector.classList.add("button-inactive");
    currentPage.classList.remove("active");
    currentPage.classList.add("inactive");

    pageSelector.classList.remove("button-inactive");
    pageSelector.classList.add("button-active");

    page.classList.remove("inactive");
    page.classList.add("active");

    //Need to reset the scroll
    window.scrollTo(0,0); 

    currentSelectorId = this.id;
    currentPageId = pageId;
}
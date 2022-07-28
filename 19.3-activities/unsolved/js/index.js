//create event listener for any element with the toggle class

$(".toggle").click(function() {
    $(this).find(".toggleContainer").toggleClass("active");

    $(this).siblings(".toggle").find("toggleContainer").removeClass("active");
    //siblings locates neighboring DOM elements that have the"toggle" class
    //find directs a command to a specific child element. in this case anything with the "toggleContainer" class
    //removeClass makes sure that every other sibling LOSES the active class

});

$(".searchButton").on("click", function () {
    
    $(".searchButton").toggleClass("active");
    
    if ($(".searchButton").hasClass("active")) { 

        $(".searchBar").css("height", "100vh");
        $("#searchForm").css("opacity", "1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");
    }

    else {

        $(".searchBar").css("height", "0vh");
        $("#searchForm").css("opacity", "0");
        $("#searchIcon").removeClass("fa-times").addClass("fa-search");

    }
});

function fade (){
$(".preloader").fadeOut("slow");

}
setTimeOut(fade,3000);
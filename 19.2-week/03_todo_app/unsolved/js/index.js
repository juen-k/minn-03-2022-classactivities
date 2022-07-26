// Create event listener to enter items below
$("#enter").on("click", function() {
    var task=$("#todoItem").val();
    $("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'></div></div>");

    console.log("Someone added a task");
});
// Create event listener to delete items below
$(document).on("click", ".x", function() {
    $(this).parent().remove();

    console.log("Someone removed a task")
});

// Create event listener to toggle 
$(document).on("click", ".task", function() {
    $(this).toggleClass("done");

    if ($(this).hasClass("done")) {
        $(this).find("div").removeClass("fa-times");
        $(this).find("div").addClass("fa-check");

        console.log("Someone marked a task completed")
    }
    
    else {
        $(this).find("div").addClass("fa-time")

        console.log("Someone marked a task as incomplete");

    };

});
$(document).ready(function() {
    $(".what-we-do-item").click(function() {
        // Toggle the description visibility
        $(this).find(".description").slideToggle();
        // Toggle bold font-weight for service name
        $(this).find(".service-name").toggleClass("bold");
    });
});
$(document).ready(function() {
    $(".what-we-do-item").click(function() {
        // Toggle the description visibility
        var description = $(this).find(".description");
        description.slideToggle();
        
        // Toggle bold font-weight for service name
        var serviceName = $(this).find(".service-name");
        serviceName.toggleClass("bold");
        
        // Hide other descriptions
        $(".description").not(description).slideUp();
        
        // Remove bold from other service names
        $(".service-name").not(serviceName).removeClass("bold");
    });
});
/*=======================================================
        show and hide tab content of aside(sidebar)
=======================================================*/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





/*=======================================================
    show and hide user profile on header profile image
=======================================================*/
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#user_profile").toggleClass("toggled");
    $("#three_column").toggleClass("main-wrapper");
});




/*=======================================================
        aside(sidebar) dropdown hide and show
=======================================================*/
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

$(".nav-item .nav-link").on("click", function () {
    $(".nav-item .nav-link").removeClass("active");
    $(this).addClass("active");
});




/*=======================================================
                    dropdown of ul
=======================================================*/
$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});




/*=======================================================
                    income/expense
=======================================================*/
$(document).ready(function () {
    $("#btn-close").click(function () {
        $("#income-expense-btn-toggle").hide();
        $("#income-expense-toggle").removeClass("income-expense-toggle");
    });
    $(".showSection").click(function () {
        $("#income-expense-btn-toggle").show();
        $("#income-expense-toggle").addClass("income-expense-toggle");
    });
});





/*=======================================================
                    dropdown with checkbox
=======================================================*/
$(".multiple_select").mousedown(function (e) {
    if (e.target.tagName == "OPTION") {
        return; //don't close dropdown if i select option
    }
    $(this).toggleClass('multiple_select_active'); //close dropdown if click inside <select> box
});

$(".multiple_select").on('blur', function (e) {
    $(this).removeClass('multiple_select_active'); //close dropdown if click outside <select>
});

$('.multiple_select option').mousedown(function (e) { //no ctrl to select multiple
    e.preventDefault();
    $(this).prop('selected', $(this).prop('selected') ? false : true); //set selected options on click
    $(this).parent().change(); //trigger change event
});

$("#myFilter").on('change', function () {
    var selected = $("#myFilter").val().toString(); //here I get all options and convert to string
    var document_style = document.documentElement.style;
    if (selected !== "")
        document_style.setProperty('--text', "'" + " " + selected + " " + "'");
    else
        document_style.setProperty('--text', "'Select values'");
});
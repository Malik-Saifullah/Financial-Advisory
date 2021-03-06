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
        $("#journal-transaction-btn-toggle").hide();
        $("#income-expense-btn-toggle").show();
        $("#income-expense-toggle").addClass("income-expense-toggle");
    });
});

$(document).ready(function () {
    $("#btn-journal-close").click(function () {
        $("#journal-transaction-btn-toggle").hide();
        $("#income-expense-toggle").removeClass("income-expense-toggle");
    });
    $(".showJournalSection").click(function () {
        $("#income-expense-btn-toggle").hide();
        $("#journal-transaction-btn-toggle").show();
        $("#income-expense-toggle").addClass("income-expense-toggle");
    });
});

$(document).ready(function () {
    $(".btn-delete").click(function () {
        $("#journal-transaction-btn-toggle").hide();
        $("#income-expense-btn-toggle").hide();
        $("#income-expense-toggle").removeClass("income-expense-toggle");
    });
});





/*=======================================================
        dropdown with checkbox of filter section
=======================================================*/
$(function () {
    $("#checkbox-select ").bsMultiSelect({
        placeholder: "Search . . ."
    });
});




/*=======================================================
            show/hide more filter section
=======================================================*/
$(".filter-btn-box-container").click(function (f) {
    f.preventDefault();
    $("#filter-outer-box").toggleClass("filter-box");
});

$(document).ready(function () {
    $("#show-hide-section-third").click(function () {
        jQuery(".thired-row").css({ //this is used for multiple values
            "display": "flex"
        });
        jQuery("#show-hide-section-third").css({ //this is used for multiple values
            "display": "none"
        });
    });
});




/*=======================================================
                    custom select
=======================================================*/
$(".selected-option-text").click(function (d) {
    d.preventDefault();
    $("#options-box").toggleClass("filter-box");
});




/*=======================================================
        bank-statement page dropdown sub-menu
=======================================================*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}





/*=======================================================
            transaction input search field
=======================================================*/
$(".search-btn-box").click(function () {
    $(".transactions-list-header-search-wrapper").toggle();
    $(".search-btn-box").toggle();
    $("#income-expense-btn-toggle").hide();
    $("#journal-transaction-btn-toggle").hide();
    $("#income-expense-toggle").removeClass("income-expense-toggle");
});
$("#input-field-close-btn").click(function () {
    $(".transactions-list-header-search-wrapper").toggle();
    $(".search-btn-box").toggle();
});





$(function () {
    $('[data-toggle="popover"]').popover();
});




$("#add-one-now-btn").click(function () {
    $('.add-one-now-btn-tooltip').toggle();
});
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


function goToAboutPage() {
    window.location.href = "about.html";
  }

$(document).ready(function () {
    //add class - underline 
    $(".add-class").on("click", function () {
        $("#hi-shiru").toggleClass("underline-h2");
    });
    //resize image 
    $("#resizebtn").on("click", function () {
        var setwidth = $("#setWidth").val();
        var setheight = $("#setHeight").val();

        $(".slide").width(setwidth);
        $(".slide").height(setheight);
    });
    //read more paragraphs
    $(".read-more-btn").on("click", function() {
        $(".moretext").toggle();
        if ($(this).text() === "Read more") {
          $(this).text("Read less");
        } else {
          $(this).text("Read more");
        }
      });
      //alert email
      $("#submitbtn").click(function () {
        var nameValue = $("input[name='name']").val();
        var emailValue = $("input[name='email']").val();
        var messageValue = $("#message").val();

        if (nameValue === '' || emailValue === '' || messageValue === '') {
            alert("Please fill in all fields.");
        } else {
            alert("Message Sent!");
        }
    });
    
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByClassName("animated");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("show");
    }
    
  });
  

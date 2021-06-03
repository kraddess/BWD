
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot:true,
    autoplay: false,
    autoplayTimeout:5000,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1024: {
        items: 3
      },
      2000:{
        item:5
      }
    }
  })

  function closeNav(event){
    var con = document.getElementById("nav-container");
    var cl = document.getElementById("close");
    if(event.target == con || event.target == cl || event.target == cl.getElementsByTagName("i")[0])
    {
      con.style.display = "none";
      document.getElementsByClassName("nav")[0].style.display = "none";
    }
     
  }
  function openNav(){
    document.getElementsByClassName("nav")[0].style.display = "flex";
    document.getElementById("nav-container").style.display = "flex";
  }
  function redirect(url){
    window.location.href=url;
  }
// load more function
  $(function () {
    $(".post").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".post:hidden").slice(0, 3).slideDown();
        if ($(".post:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        
    });
});

//  
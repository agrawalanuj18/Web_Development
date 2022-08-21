// JQuery
$("h1").css("color", "red"); // to change the style
$("h1").addClass("heading"); // to add a class
$("h1").text("Bye"); // to chnage the text
$("button").html("<em>Hey</em>"); // to change the inner HTML

console.log($("a").attr("src")); // to get an attribute
$("a").attr("href", "https:/www.yahoo.com"); // to set an attribute

// AddEventListerner
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });
// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

$("input").keydown(function (event) {
  $("h1").text(event.key);
});

$("h2").on("mouseover", function(){
    $("h2").css("color", "purple");
})

// If we want too add the element 
$("h1").before("<button>Click me</button>")
$("h1").after("<button>Click me</button>")
$("h1").prepend("<button>Click me</button>")
$("h1").append("<button>Click me</button>")
// If we want too add the element
$("h3").remove();

// hide/ show button 
// we also use toggle element 

//fade 
// $("button").on("click", function(){
//     $("h1").fadeToggle();
// })
// slideToggle

// animation
// animate
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5 });
})

// There are so many method to animate With the help of JQuery
// There is no need to learn anything
// Everything is present on Internet
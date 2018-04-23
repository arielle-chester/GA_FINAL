var totalVideos = $("video").length;
var currentVideoIndex;

$(".prev").on("click", function(){
  currentVideoIndex = $(".active").prev().index();

  if (currentVideoIndex >= 0 && currentVideoIndex < totalVideos) {
    $(".active").removeClass("active").prev().addClass("active");
  }
});

$(".next").on("click", function(){
  currentVideoIndex = $(".active").next().index();
  // console.log(currentImageIndex, totalImages);

  if (currentVideoIndex >= 0 && currentVideoIndex < totalVideos) {
    $(".active").removeClass("active").next().addClass("active");
  }
});


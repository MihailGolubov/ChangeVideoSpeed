var videoElements = document.getElementsByTagName("video");

document.addEventListener("keydown", function(event) {
  if (event.altKey && event.keyCode === 49) { // Alt + 1
    for (var i = 0; i < videoElements.length; i++) {
      videoElements[i].playbackRate = 1;
    }
  } else if (event.altKey && event.keyCode === 50) { // Alt + 2
    for (var i = 0; i < videoElements.length; i++) {
      videoElements[i].playbackRate = 2;
    }
  }
});

document.addEventListener("mousemove", function() {
  for (var i = 0; i < videoElements.length; i++) {
    videoElements[i].addEventListener("loadedmetadata", function() {
      this.playbackRate = this.playbackRate;
    });
  }
});

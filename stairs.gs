var lines = 10;
var hashtag = "#";
for (var i = 0; i < lines; i++) {
  //Every iteration, I wil need to add a new "#" to my current "#"
  document.write(hashtag);
  document.write("<br/>");
  hashtag += "#";
}
for (var i = 0; i < lines; i++) {
  //You need to repeat document.write("#") lines-i-1 times
  for (var j = 0; j < lines - i - 1; j++) {
    document.write("#");
  }
  document.write("<br/>");
}

var lines = 11;

// I need to repeat this 11 times
for (var j = 0; j < lines; j++) {
  for (var i = 0; i < lines; i++) {
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 == 1)) {
      document.write("#");
    } else {
      document.write("0");
    }
  }
  document.write("<br/>");
}

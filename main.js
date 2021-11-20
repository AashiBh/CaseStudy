function setup() {
    headphones= document.getElementById("headphones");
    classifier = ml5.imageClassifier("Mobilenet");
    bottle = document.getElementById("WaterBottle");
  }
function draw(){
    classifier.classify(headphones, gotResult);
    classifier.classify(WaterBottle, gotResult2);
  }
  function gotResult(error, results){
    if (error) {
      console.log(error)
    } else {
      console.log(results)
      document.getElementById("Mobile").innerHTML="Mobilenet Model:" + results[0].label;
    }
    
  }
  function gotResult2(error, results){
    if (error) {
      console.log(error)
    } else {
      console.log(results)
      document.getElementById("Mobile2").innerHTML="Mobilenet Model:" + results[0].label;
    
    }
}
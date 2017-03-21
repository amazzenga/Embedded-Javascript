//declare samecolor() here
function samecolor(){
  let doc = document;
  let divs = doc.querySelectorAll("#samecolor div");

  divs[0].style.backgroundColor = "#556699";
  divs[1].style.backgroundColor = "#556699";
  divs[2].style.backgroundColor = "#556699";
  divs[3].style.backgroundColor = "#556699";
  divs[0].style.opacity = 0.3;
  divs[1].style.opacity = 0.5;
  divs[2].style.opacity = 0.7;
  divs[3].style.opacity = 0.9;
}
//declare diffcolor() here
function diffcolor(){
  let doc = document;
  let divs2 = doc.querySelectorAll("#diffcolor div");
}

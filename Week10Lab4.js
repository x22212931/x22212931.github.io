function array(){
	
	
	
let array = [4, 5, 6, 7, 8, 9, 3];
test = 0;



for (i=0;i<array.length;i++) {
  if (test < array[i]) {
    test = array[i];
  }
}

				document.getElementById("main").innerHTML+="<br />"+"The largest number in the array: "+test;
}
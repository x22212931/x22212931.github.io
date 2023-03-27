function scores(){

		var score = + 0;
		var summary = + 0;
		var num = + 0;
		
		 num = prompt("Please enter the number of subjects you take");

       
		for(i=1;i<=num;i++){
			score = prompt("Please enter your marks from 0 to 100 for subject number "+i);
			score = score * 1;
			summary= (score) + (summary);


		}

		document.getElementById("main").innerHTML+="<br />"+"Your average score is: "+ (summary/num);
		
}
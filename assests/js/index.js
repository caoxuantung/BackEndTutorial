//Bài 1
var number = prompt('Nhập số:');
if ((number%3==0) && (number%5==0)){
	document.write("Chia hết cho 3 và 5"+"<br>");
	if (number%2==0){
		document.write("Số đó là số chẵn"+"<br>")
	}else{
		document.write("Số đó là số lẻ"+"<br>")
	}
}else{
	document.write("Không chia hết cho 3 và 5"+"<br>")
}
if (number==Math.round(Math.sqrt(number))*Math.round(Math.sqrt(number))){
	document.write("Số đó là số chính phương"+"<br>")
}else{
	document.write("Số đó không phải số chính phương"+"<br>")
} 

//Bài 2




//Bài 3

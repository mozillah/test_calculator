
function char2num( character){
	if(character == "A" || character=="I"||character=="J"|| character=="Q"||character== "Y"){
		return 1;
	}
	else if(character == "B" || character=="K"||character=="R"){
		return 2;
	}
	else if(character == "C" || character=="G"||character=="L"||character == "S"){
		return 3;
	}
	else if(character == "D" || character=="M"||character=="T"){
		return 4;
	}
	else if(character == "E" || character=="H"||character=="N"||character=="X"){
		return 5;
	}
	else if(character == "U" || character=="V"||character=="W"){
		return 6;
	}
	else if(character == "O" || character=="Z"){
		return 7;
	}
	else if(character == "F" || character=="P"){
		return 8;
	}

}

function getNumberfromString(numbers){
	var temp ="";
	for (var i = 0; i < numbers.length; i++) {
		temp+= char2num(numbers[i].toUpperCase());
	  }
	  return parseInt(temp);
}

function calc(){
	let num1Input = document.getElementById('number1').value;
	let num1Value = getNumberfromString(num1Input);
	console.log(num1Value)
	let num2Input = document.getElementById('number2').value;
	let num2Value = getNumberfromString(num2Input);
	console.log(num2Value)
	
	let operator = document.getElementById('operator').value;

	if(num1Input == '' || num2Input == '' || operator == 'undefined'){
		console.log('invalid')
	}
	else{
		let calculate;
		if(operator == 'add'){
		calculate = num1Value + num2Value;
		}
		else if(operator == 'min'){
			calculate = num1Value - num2Value;
		}
		else if(operator == 'mul'){
			calculate = num1Value * num2Value;
		}
		else if(operator == 'div'){
			calculate = num1Value / num2Value;
		}

		document.getElementById('final-result').innerHTML = calculate;
		}


}

function resetBtn(){
	var r = document.getElementById('final-result').innerHTML = '';

	document.getElementById('number1').value = '';
	document.getElementById('number2').value = ''
	
	document.getElementById('operator').value = 'undefined'
}
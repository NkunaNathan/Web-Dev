	function displaycalculator(){
		var doc = document.getElementById("Calculator");
		if(doc.style.display === "none"){
			doc.style.display = "block";
		}else{
			doc.style.display = "none";
		}
	}
	var defaultvalue = '';
	function inputValues(calInput){
		defaultvalue += calInput;
		document.calculatorapp.userInput.value = defaultvalue;
		if(eval(defaultvalue) != "Infinity"){
			defaultvalue = eval(defaultvalue);
		}
	}
	function restartCalculator(){
		defaultvalue = '';
		document.calculatorapp.userInput.value = '0';
	}
	function varResults(){
		var equalsTo = document.calculatorapp.userInput.value;
		if(equalsTo){
			if(eval(equalsTo) != "Infinity"){
				document.calculatorapp.userInput.value = eval(equalsTo);
			}else{
				document.calculatorapp.userInput.value = "Cannot divide by zero";
			}
		}
	}
	
/*functions to take input and clear output*/
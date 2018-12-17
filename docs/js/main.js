// Запишем анонимную самовызывающуюся ф-ю в переменную counter

var counter = (function () {
	// Приватные переменные (начинаются с нижнего подчёркивания)
	var _number;

	// Приватные методы
	var _checkPositive = function(positiveNumber){
		if ( positiveNumber < 0 ) {
			return false;
		} else {
			return true;
		}
	}

	var setValue = function(positiveNumber){
		if ( _checkPositive(positiveNumber) ) {
			_number = positiveNumber;
		} else {
			console.log("Неверное значение. Должно быть больше или равно 0.")
		}
	}

	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}

	// Чтобы иметь доступ к внутренним переменным
	// их надо вернуть через return
	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}());

counter.setValue(5);
counter.printCounter(); // 7
counter.increaseCounter(); // 6
counter.increaseCounter(); // 7
counter.printCounter(); // 7

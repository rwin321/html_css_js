
let count = document.querySelector('#counterValue').value
function addCount (){
	return function (){
		return count++
	}
}

let plusCount = addCount()

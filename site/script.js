
let count = 0
function addCount (){
	return function (){
		return count++
	}
}

let plusCount = addCount()

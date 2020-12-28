let click = 0

const AddOne = () => {
	click += 1
	document.querySelector('#counterValue').innerHTML = click
}

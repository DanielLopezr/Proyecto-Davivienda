
var header = document.getElementsByTagName("header")[0];
var altura = header.clientHeight;
var padding = altura.toString() + "px";
document.getElementsByTagName("body")[0].style.paddingTop = padding;

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('select');
	var instances = M.FormSelect.init(elems, options);
});
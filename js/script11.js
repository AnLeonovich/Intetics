alert("hello");

function singUp() {
	localStorage.addItem("s",1);
}

function singIn() {
	var email = document.getElementById("emial").innerHTML;
	var password = document.getElementById("password").innerHTML;
	localStorage.addItem("email",email);
	localStorage.addItem("password",password);
}
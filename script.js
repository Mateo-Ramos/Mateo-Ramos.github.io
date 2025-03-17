function changeText() {
    var newText = document.getElementById("inputText").value;
    document.getElementById("changeableText").innerText = newText;

    var randomColor = '#' + Math.floor(Math.random() * 16777218).toString(16);

    document.querySelector(".container").style.backgroundColor = randomColor;
}


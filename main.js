var canvas = document.getElementById("myCanvas")

var ref = canvas.getContext("2d")
ref.beginPath();
ref.strokeStyle = "grey";
ref.lineWidth = 4;
ref.rect(150, 143, 430, 200);
ref.stroke();

ref.beginPath();
ref.strokeStyle = "blue";
ref.lineWidth = 4;
ref.arc(250, 210, 40, 0, 2 * Math.PI);
ref.stroke();

ref.beginPath();
ref.strokeStyle = "black";
ref.lineWidth = 4;
ref.arc(350, 210, 40, 0, 2 * Math.PI);
ref.stroke();

ref.beginPath();
ref.strokeStyle = "red";
ref.lineWidth = 4;
ref.arc(450, 210, 40, 0, 2 * Math.PI);
ref.stroke();

ref.beginPath();
ref.strokeStyle = "yellow";
ref.lineWidth = 4;
ref.arc(300, 250, 40, 0, 2 * Math.PI);
ref.stroke();

ref.beginPath();
ref.strokeStyle = "green";
ref.lineWidth = 4;
ref.arc(400, 250, 40, 0, 2 * Math.PI);
ref.stroke();


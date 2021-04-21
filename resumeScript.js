//document.getElementById("demo").innerHTML = "works";

 var doc_id = document.getElementById("circle1"); 
        var context = doc_id.getContext("2d"); 
        context.beginPath(); 
        context.strokeStyle = '#3D3D3D'; 
        context.lineWidth = 4;
        context.arc(85,80,70,0.5*Math.PI,1.5*Math.PI);
        context.stroke(); 

 var doc_id = document.getElementById("circle2"); 
        var context = doc_id.getContext("2d"); 
        context.beginPath(); 
        context.strokeStyle = '#3D3D3D'; 
        context.lineWidth = 4;
        context.arc(85,80,70,0.1*Math.PI,1.5*Math.PI);
        context.stroke(); 

var doc_id = document.getElementById("circle3"); 
        var context = doc_id.getContext("2d"); 
        context.beginPath(); 
        context.strokeStyle = '#3D3D3D'; 
        context.lineWidth = 4;
        context.arc(85,80,70,0.3*Math.PI,1.5*Math.PI);
        context.stroke();
var doc_id = document.getElementById("circle4"); 
        var context = doc_id.getContext("2d"); 
        context.beginPath(); 
        context.strokeStyle = '#3D3D3D'; 
        context.lineWidth = 4;
        context.arc(85,80,70,0.01*Math.PI,1.5*Math.PI);
        context.stroke();  
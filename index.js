function onCrime(){
    localStorage.setItem("topic","Crime");
    window.location.href = "topic.html"
}
function onTriller(){
    localStorage.setItem("topic","Thriller");
    window.location.href = "topic.html"
}
function onHistory(){
    localStorage.setItem("topic","Historical Fiction");
    window.location.href = "topic.html"
}
function onLiter(){
    localStorage.setItem("topic","Literary Fiction");
    window.location.href = "topic.html"
}
function onRomance(){
    localStorage.setItem("topic","Romance");
    window.location.href = "topic.html"
}
function onPer(){
    localStorage.setItem("topic","Personality Development");
    window.location.href = "topic.html"
}
function go(){
    window.location.href="index.html";
}
function show(){
    window.location.href="popup.html";
    document.body.style.opacity = 0.2;
    var orderno = Math.floor(Math.random() * 100000000) + 1;
    document.getElementById("mes").style.opacity = 1;
    document.getElementById("mes").innerHTML =` <div class="mess" style="background-color: aliceblue; margin-right:320pt; width: 500pt; height:180pt; border-radius: 10pt; margin-top: 250pt;">
    <h3 style="text-align: center; padding-top:40pt;font-size:20pt">Thank you</h3>
    <h3 style="text-align: center; padding-top:10pt; padding-left:20pt">Your order has been placed successfully.</h3>
    <h3 style="text-align: center; padding-top:10pt; padding-left:20pt; padding-right:20pt">Your order number is ${orderno}. We will immediatelly process your and it will be delivered in 2 - 5 business days.</h3>
</div>`
}
//====================Dynamic picture======================================

function dynamicImage() {//a function that shows different images each sec
   
    var ArrayPics = ["arabian-baklava.JPG", "arabian-falafel.JPG", "arabian food.JPG"];//array for different images all of them with the same size!

    var handle = document.getElementById("arabian");//from HTML "DOCUMENT" object get the image element by id

    var randomNum = Math.floor(Math.random() * 3); //random number using Math.random then floor it it will returnes the greatest Intger 

    handle.src = ArrayPics[randomNum];
}
setInterval("dynamicImage();", 1000);//cals dynamicImage function every 1 seconds =1000 milliseconds
//====================Change Image With Event================================
function ChangeImgWithEvent() {
    var imgeHandel = document.getElementById("FastFood");//get the pic by id
    imgeHandel.src = "chicken-vegetables.jpg";// change the src
}
//====================Form Validation (name & password & confirm Password )=====
function validateform() {
    var name = document.forms["contactform"]["name"].value;//get the value of each element in the form
    var password = document.forms["contactform"]["password"].value;
    var confirmPassword = document.forms["contactform"]["confirmPassword"].value;
    if (name == "" || confirmPassword == "" || password == "") {//check if the form filled 
        alert("The form must be filled out");//another way is "requierd" in html 
        return false;
    }
    else if (name.length < 2) {//beacause there is names with two characters such as FAI in arabic "في"
        alert("name should be at least 2 characters.");
    }
    else if (password.length <= 7) {
        alert("password should be at least 8 characters.");
    }
    else if (password != confirmPassword) {// check the password and confirm password fields should have the same data
        alert("the password and confirm password fields should have the same data");
    }


}
//====================Dynamic elements (createElement)============================
function createFunction() {
    var Paragh = document.createElement("P");//create Element paragraph
    Paragh.setAttribute("Id", "DynamicPara");//set id Attribute
    Paragh.innerText = "FireGrill,Abu Zaid, Buffalo Wings & Rings, McDonald's, Dunkin Donuts";//text in html 
    document.getElementById("LocationP").appendChild(Paragh);//get the paragraph by id and append child
    var button = document.getElementById("showButton");//get the button
    button.remove();// remove the button after create child 
 
}
//=====================Dynamic elements (dynamic select)============================
function showTotal() {
    var price = document.getElementById("itemPrice").value;// get the price 
    var quant = document.getElementById("QuantityOfItem").value;// get the Quantity
    var total = document.getElementById("totalPricePara");// var total that get empty paragraph by id 
    var DeliveryFee = 15;
    total.innerHTML = "The total price with DeliveryFee 15SR: " + (price * quant + DeliveryFee);// calculate the total by = price * Quantity +  DeliveryFee
}
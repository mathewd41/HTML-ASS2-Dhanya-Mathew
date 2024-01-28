function validation(){
   var a=document.getElementById("name").value;
   var b=document.getElementById("email").value;
   var c=document.getElementById("phno").value;
   var d=document.getElementById("msgid").value;
     if (a == null || a == "") {
        alert("Please Enter Name");
        return false;
    }
    if (b == null || b == "") {
        alert("Please Enter Email");
        return false;
    }
    if (c == null || c == "") {
        alert("Please Enter Phone Number");
        return false;
    }
    if (d == null || d == "") {
        alert("Please Enter Your Message");
        return false;
    }
}






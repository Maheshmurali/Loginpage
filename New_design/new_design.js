function get_form(){
   let para_g=document.getElementById("user_name").value;
   let para_2=document.getElementById("pass_word").value;
   document.getElementById("para").innerHTML=("user name:",para_g);
   document.getElementById("pass_w").innerHTML=("password :",para_2);
}
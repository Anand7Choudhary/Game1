var a = document.getElementById("main_screen");
var b = document.getElementById("game11");
var c = document.getElementById("game22");
function play_game(){
    a.style.display="none";
    b.style.display="block";
    c.style.display = "none";
}
function rules_page(){
    if(b.style.display=="block")
    {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    }
    else
    {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    }
}
function game_page(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    var x = document.getElementById("user_name").value;
    document.getElementById("p222").innerHTML = x;
}
var num;
var flag=0;



// function check(var user_value1,var comp_value1){

// }

// function game_backend(){
//     var count=0;
//     var message=document.getElementById("try_again");
//     var submit_button=document.getElementById("guess");
//     var box_colour=document.getElementById("user_number");
//     var comp_value = Math.floor(Math.random() * 11);
//     num=comp_value;
//     var user_value = document.getElementById("user_number").value;
//     while(count<3 && flag==0)
//     {         count++;
//         submit_button.onclick="check(user_value,comp_value)";
//     }
//     if(flag==1)
//     {
//         submit_button.innerHTML = "GUESS";
//         box_colour.style.backgroundColor = "white";
//         message.style.visibility = "hidden";
//     }
//     else{
//         submit_button.innerHTML = "GUESS";
//         box_colour.style.backgroundColor = "white";
//         message.style.visibility = "hidden";
//     }
// }




function game_backend(){
    var count=0;
    var message=document.getElementById("try_again");
    var submit_button=document.getElementById("guess");
    var box_colour=document.getElementById("user_number");
    var comp_value = Math.floor(Math.random() * 11);
    num=comp_value;
    var user_value = document.getElementById("user_number").value;
    while(count<3 && flag==0)
    {
        if(user_value==comp_value){
            box_colour.style.backgroundColor="green";
            flag=1;
            break;
        }
        else{
            box_colour.style.backgroundColor = "red";
            submit_button.innerHTML="AGAIN";
            message.style.visibility="visible";
        }
        submit_button.onclick.count++;
    }
    if(flag==1)
    {
        submit_button.innerHTML = "GUESS";
        box_colour.style.backgroundColor = "white";
        message.style.visibility = "hidden";
    }
    else{
        submit_button.innerHTML = "GUESS";
        box_colour.style.backgroundColor = "white";
        message.style.visibility = "hidden";
    }
}

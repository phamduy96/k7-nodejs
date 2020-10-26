var step1 = document.getElementsByClassName("step1")[0];
step1.addEventListener("click",function(){
    var form = document.getElementsByClassName("form")[0];
    form.classList.add("displayform");
    var checkimg = document.getElementsByClassName("checkimg")[0];
    var checkcode = document.getElementsByClassName("checkcode")[0];
    var confirm = document.getElementsByClassName("confirm")[0];
    checkimg.style.display = "none";
    checkcode.style.display = "none";
    confirm.style.display = "none";
    
});
// hết step1
var step2 = document.getElementsByClassName("step2")[0];
step2.addEventListener("click",function(){
    var user = document.getElementById("input1").value;
    var pasword = document.getElementById("input2").value;
    var form = document.getElementsByClassName("form")[0];
    var checkimg = document.getElementsByClassName("checkimg")[0];
    var checkcode = document.getElementsByClassName("checkcode")[0];
    var confirm = document.getElementsByClassName("confirm")[0];
    checkcode.style.display = "none";
    confirm.style.display = "none";
    if(user == "" || pasword.length < 8){
        alert("Vui lòng nhập lại thông tin, password ít nhất 8 ký tự")
    }else{
        form.classList.remove("displayform");
        checkimg.style.display = "flex"
    }
});
var img = document.getElementById("becycle");
img.addEventListener("click",function(){
    var image = document.getElementById("becycle");
    var valueimg = document.getElementById("valueimg");
    image.style.display = "none"
    valueimg.value = "ok"
});
// hết step 2
var step3 = document.getElementsByClassName("step3")[0];
step3.addEventListener("click",function(){
    var confirm = document.getElementsByClassName("confirm")[0];
    confirm.style.display = "none";
    if(valueimg.value == "ok"){
        var checkimg = document.getElementsByClassName("checkimg")[0];
        var checkcode = document.getElementsByClassName("checkcode")[0];
        checkimg.style.display = "none"
        checkcode.style.display = "block"
    }else{
        alert("Vui lòng chọn ảnh")
    }
});
// hết step3
var step4 = document.getElementsByClassName("step4")[0];
step4.addEventListener("click",function(){
    var valuecode = document.getElementById("valuecode");
    var confirm = document.getElementsByClassName("confirm")[0];
    var checkcode = document.getElementsByClassName("checkcode")[0];
    if(valuecode.value == "55555"){
        confirm.style.display = "block"
        checkcode.style.display = "none"
    }else{
        alert("Vui lòng nhập lại mã code")
    }
});
var btn_confirm = document.getElementById("btn-confirm");
btn_confirm.addEventListener("click",function(){
   var valueconfirm = document.getElementById("valueconfirm");
   if(valueconfirm.value == "abc123456"){
       window.open("file:///C:/Users/ADMIN/Desktop/DUY/WEB/btl-cutweb/index.html");
   }else{
       alert("Nhập lại password");
   }
});
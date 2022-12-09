
    var check = function() {
            if (document.getElementById('password').value ==
                document.getElementById('repassword').value) {
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = 'trùng khớp';
            } else {
                document.getElementById('message').style.color = 'blue';
                document.getElementById('message').innerHTML = 'không trùng khớp';
            }
        }

        function dangky() {
            var username = document.getElementById("username").value;
            var sdt = document.getElementById("sdt").value;
            var hoten = document.getElementById("hoten").value;
            var pw = document.getElementById("password").value;
            var repw = document.getElementById("repassword").value;

            var regemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            
            if (username.trim() == "") {
                alert("username không được để trống hoặc không hợp lệ");
                return false;
            }
            if(pw == "" || pw == null){
               alert("password không được để trống hoặc không hợp lệ");
               return false;
            }
            if (document.getElementById("message").innerHTML == 'không trùng khớp') {
               alert("password không trùng khớp");
               return false;
           }
            if (hoten.trim() == "") {
               alert("họ và tên không được để trống");
               return false;
           }
            alert("Đăng ký thành công");
            return true;
        }

        function dangnhap(){
          var username = document.getElementById("user").value;
          var password = document.getElementById("pw").value;

            if (username.trim() == "") {
                alert("username không được để trống hoặc không hợp lệ");
                return false;
            }
            if(password == "" || password == null ){
               alert("password không được để trống hoặc không hợp lệ");
               return false;
            }
            return true;
        }
        function dangnhapadmin(){
          var username = document.getElementById("useradmin").value;
          var password = document.getElementById("pwadmin").value;

            if (username.trim() == "") {
                alert("username không được để trống hoặc không hợp lệ");
                return false;
            }
            if(password == "" || password == null ){
               alert("password không được để trống hoặc không hợp lệ");
               return false;
            }
            return true;
        }
        

// function votetang(){
//     var input = document.getElementById('vote').value;
//     input = input + 1;
//     console.log(input);
//     return input;
// }
function tang(){
    document.getElementById("vote").innerHTML = "1";
}

function giam(){
    document.getElementById("vote").innerHTML = "0";
}


// bình chọn


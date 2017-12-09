        //驗證帳號有無重複
        function TestAccount(){
            //alert();
            $.ajax({
                url: "http://120.108.116.176:25080/RegReturn.php",
                data: {
			account: document.getElementById("account").value
		},
                type: "POST",
                success: function(response){
                    var str = response;
                    document.getElementById("confirm").innerHTML = str;
                },
                error: function(response){
                    var str = response;
       		    
	            document.getElementById("confirm").innerHTML = str;
                }
            });
        }
        
        
        //加入帳號
        
        
        function goReg(){
            
            var passwd = document.getElementById("password").value;
            
            //驗證密碼一致
            if(passwd != document.getElementById("Repassword").value){
                alert("密碼不一致，請重新輸入!!");
            }else{
            
                var form = $("#Rform");
                
                $.ajax({
                    url: "http://120.108.116.176:25080/Register.php",
                    data: {
                        name: document.getElementById("name").value,
                        account: document.getElementById("account").value,
                        password: document.getElementById("password").value,
                        phone: document.getElementById("phone").value,
                        address: document.getElementById("address").value,
                        height: document.getElementById("height").value,
                        weight: document.getElementById("weight").value,
                        email: document.getElementById("email").value
                    },
                    type: "POST", 
                    success: function(response){
                        var str = response;
                       // alert("註冊成功!!");
                        alert(str);
                        window.location = "login.html";
                    },
                    error: function(){
                        alert("connect fail in ajax");
                    }
                });  
            }
        }
        
        /*
        function loadPHP(){ //php mysql 連線
            var acc = document.getElementById("account").value;
            var pw = document.getElementById("password").value;
            $.ajax({
                url: "AccountReturn.php",
                data: {
                    account: acc,
                    passwd: pw
                },
                type: "POST",
                type: "POST",
                success: function(response){
                    str = response;

                }
            }); 
        }
        
        */
        function ValidateNumber(e, pnumber){
            if (!/^\d+[.]?\d*$/.test(pnumber))
            {
                if(e.value !== /^\d+[.]?\d*/.exec(e.value)){
                    //alert("請輸入數字");
                }
                e.value = /^\d+[.]?\d*/.exec(e.value);
            }
            
            return false;
        }
        
        function ValidateNumberN(e, pnumber){
            if (!/^\d+$/.test(pnumber))
            {
                e.value = /^\d+/.exec(e.value);
            }
            return false;
        }
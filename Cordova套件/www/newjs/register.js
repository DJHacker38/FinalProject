
//驗證帳號有無重複
    
        function TestAccount(checkacc){
            var str;
            $.ajax({
                url: "http://120.108.116.176:25080/RegReturn.php",
                data: {
                    account:document.getElementById("account").value,
                    name: document.getElementById("name").value
                },
                type: "POST",
                success: function(response){
                    str = response;
                    //alert(str);
                    document.getElementById("confirm").innerHTML = str;
                    document.getElementById("confirm").style.color = 'red';
                    if(str=="此帳號已註冊"){
                        if(checkacc==1){
                            alert(str);    
                        }else if(checkacc==2){
                            alert(str+"!!");
                        }
                    }
                },
                error: function(xhr,ajaxOptions,thrownError){
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        }
    
        
        

    
    
        //加入帳號
        
        
        function goReg(){
            
            var name = document.getElementById("name").value;
            var account = document.getElementById("account").value;
            var passwd = document.getElementById("password").value
            //checkacc = 0;
            
            if(name==""||account==""||passwd==""){
                alert("欄位不可空白");
                return;
            }
            
            TestAccount(2);
            //驗證密碼一致
            if(passwd != document.getElementById("Repassword").value){
                alert("密碼不一致，請重新輸入!!");
                return;
            }else{
                
                var form = $("#Rform");
                
                $.ajax({
                    url: "http://120.108.116.176:25080/Register.php",
                    data: {
                        name: name,
                        account: account,
                        password: passwd
                    },
                    type: "POST", 
                    success: function(response){
                        var str = response;
                        
                        if(str == ""){
                            alert("註冊發生錯誤");
                            return;                  
                        }else{
                            alert(str);
                        }
                        window.location = "login.html";
                    },
                    error: function(xhr,ajaxOptions,thrownError){
                        alert(xhr.status);
                        alert(thrownError);
                    }
                }); 
                
            }
        }

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
    
    

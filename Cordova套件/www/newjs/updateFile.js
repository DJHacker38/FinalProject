
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    
        var accname = getCookie('userName');
        var account = getCookie('userID');
        
        getAcc();
            
        function getAcc(){
            $.ajax({
                url: "http://120.108.116.176:25080/Test.php",
                data: {
                    account: account,
                },
                type: "POST", 
                success: function(response){
                    var str = response;
                    var jsonData = JSON.parse(str);
                    //alert(str);
                    
                    document.getElementById('name').value = jsonData[0].name;
                    document.getElementById('account').value = jsonData[0].account_id;
                    document.getElementById('password').value = jsonData[0].password;
                    document.getElementById('Repassword').value = jsonData[0].password;
                    document.getElementById('phone').value = jsonData[0].phonenumber;
                    document.getElementById('email').value = jsonData[0].email;
                    document.getElementById('address').value = jsonData[0].address;
                    document.getElementById('height').value = jsonData[0].height;
                    document.getElementById('weight').value = jsonData[0].weight;
                    document.getElementById('contact').value = jsonData[0].contact;
                },
                error: function(xhr,ajaxOptions,thrownError){
                    alert(xhr.status);
                    alert(thrownError);
                }
            }); 
        }
    
        function goEdit(){
            accname = document.getElementById('name').value;
            
            //checkacc = 0;
            var passwd = document.getElementById("password").value;
            var phone = document.getElementById("phone").value;
            var address = document.getElementById("address").value;
            var height = document.getElementById("height").value
            var weight = document.getElementById("weight").value;
            var email = document.getElementById("email").value;
            var contact = document.getElementById("contact").value;
            
            
            
            //驗證密碼一致
            if(passwd != document.getElementById("Repassword").value){
                alert("密碼不一致，請重新輸入!!");
                return;
            }else{
                
                var form = $("#Rform");
                
                
                $.ajax({
                    url: "http://120.108.116.176:25080/EditPF.php",
                    data: {
                        name: accname,
                        account: getCookie('userID'),
                        password: passwd,
                        phone: phone,
                        address: address,
                        height: height,
                        weight: weight,
                        email: email,
                        contact: contact
                    },
                    type: "POST", 
                    success: function(response){
                        var str = response;
                        //alert(str);
                        console.log(str);
                        if(str != "修改成功"){
                            alert('not');
                            return;                     
                        }else{
                            alert(str);
                            setCookie("welcome",1,1);
                            setCookie("userName",document.getElementById("name").value,1);
                        window.location = "member.html";
                        }
                        
                    },
                    error: function(xhr,ajaxOptions,thrownError){
                        alert(xhr.status);
                        alert(thrownError);
                    }
                }); 
                
            }
        }
        

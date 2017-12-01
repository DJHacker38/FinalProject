window.onload = function(){      
    
        setName();

        function setName(){
            var n = getCookie('userName');
            if(n == "")
                return;
            document.getElementById('name').innerHTML = n;
        }
        
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
        
        
        document.getElementById("imgfile").onchange = function(){viewFile()}
        document.getElementById("sub").onclick = function(){imgUpload()}
        
        
        //document.getElementById("login").innerHTML = N ;
        function viewFile(){
            var f = document.getElementById("imgfile");
            var txt = "";
            //if("files" in f){
                if(f.files.length == 0){
                    txt = "請選擇一個圖檔";
                }else{
                    var file = f.files[0];
                    if('name' in file){
                        txt += "名稱:" + file.name + "<br>";
                    }
                    if('size' in file){
                        txt += "檔案大小:" + file.size + " bytes" + "<br>";
                    }
                }
            //}
            document.getElementById("FileName").innerHTML = txt;
        }
        
        
        
        function imgUpload(){            
            
            
            var account = getCookie("userID");
            
            var formData = new FormData();
            
            //js edition
            //var file = document.getElementById("imgfile").src;
            //qwformData.append("img", file.files[0]);
            
            // jquery edition
            
            formData.append('img',$('input[type=file]')[0].files[0])
            /*
            formData.append('img',$("input[name$='img']")[0].files[0]);
            */
            formData.append('account_id',account);
            formData.append('uploadT','Product');
            
            $.ajax({
                url: "http://120.108.116.176:25080/ImgUpload.php",
                data: formData,
                type: "POST",
                contentType: false,   // 告诉jQuery不要去這置Content-Type
                processData: false,   // 告诉jQuery不要去處理發送的數據
                beforeSend: function(){
                  alert("beforeSend");
                },
                success: function(response){
                    var str = response;
                    alert("success");
                    alert(str);
                    
                },
                error: function(xhr, ajaxOptions, thrownError){
                   alert("error:"+thrownError);
                }
            }); 
        }
        
        
};
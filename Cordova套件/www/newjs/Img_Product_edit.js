window.onload = function(){      

    var address;
    function Arotate(filea){
        
    }
    
    for(var i=0; i<4; i++){
        $.ajax({
            url: "http://120.108.116.176:25080/loadIndex.php",
            crossDomain: true,
            type: "POST",
            data: {genre: i},
            success: function(response){
                var str = response;
                //alert(str);
                processJSON(str);
                //alert(i);
            },
            error: function(xhr,ajaxOptions,thrownError){
                alert(xhr.status);
                alert(thrownError);
            }
        });
    }
    
    

    function processJSON(data){
        var jsonData = JSON.parse(data);
        var max = Object.keys(jsonData).length;

        for(var i=0 ; i<max ; i++){
            var id = getCookie('item');
            if(jsonData[i].product_id == id){
                document.getElementById('im').src = "http://120.108.116.176:25080/"+jsonData[i].Address;
                address = jsonData[i].Address;
                
                
                document.getElementById('g'+jsonData[i].genre).selected = true;
                document.getElementById('k'+jsonData[i].kind).selected = true;
                
                $("select").selectmenu("refresh", true);
                
                
                document.getElementById('pName').value = jsonData[i].Name;
                document.getElementById('pPrice').value = jsonData[i].Price;
                document.getElementById("intro").value = jsonData[i].intro;
                owner = jsonData[i].owner;
                
                
            }
        }
    }
    
    
        setName();

        function setName(){
            var n = getCookie('userName');
            if(n==""||n=='null'){
                alert('請先登入');
                window.location = "login.html";
                return;
            }
            document.getElementById("user").innerHTML = n;
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
            
            
            
            
            
            var pPrice = document.getElementById("pPrice").value;
            var pName = document.getElementById("pName").value;
            var gen = document.getElementById("genre").value;
            var kind = document.getElementById("kind").value;
            var intro = document.getElementById("intro").value;
            
            var account = getCookie("userID");
            var product_id = getCookie('item');
            
            
            var formData = new FormData();
            
            
            var file;
            if($('input[type=file]')[0].files[0]){
                file = $('input[type=file]')[0].files[0];
                formData.append('img',file);
            }else{
                file="";
            }
            //js edition
            //var file = document.getElementById("imgfile").src;
            //qwformData.append("img", file.files[0]);
            
            // jquery edition
            //var file = $('input[type=file]')[0].files[0];
            
            /*
            formData.append('img',$("input[name$='img']")[0].files[0]);
            */
            
            formData.append('account_id',account);
            formData.append('pName',pName);
            formData.append('pPrice',pPrice);
            formData.append('genre',gen);
            formData.append('kind',kind);
            formData.append('intro',intro);
            formData.append('product_id',product_id);
            formData.append('imgAddress',address);
            
            
            $.ajax({
                url: "http://120.108.116.176:25080/ImgUpdate.php",
                data: formData,
                type: "POST",
                contentType: false,   // 告诉jQuery不要去這置Content-Type
                processData: false,   // 告诉jQuery不要去處理發送的數據
                beforeSend: function(){
                  //alert("beforeSend");
                },
                success: function(response){
                    var str = response;
                    alert(str);
                    window.location = "member.html";
                },
                error: function(xhr, ajaxOptions, thrownError){
                   alert("error:"+thrownError);
                }
            });
            
            
        }
        
        var script = document.createElement('script');
        script.onload = function () {

        };
        script.src = "newjs/user.js";

        document.head.appendChild(script);
};
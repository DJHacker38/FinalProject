

function rentNotice(){
    $.ajax({
        url: "http://120.108.116.176:25080/loadRes.php",
        crossDomain: true,
        type: "POST",
        data: {genre: gen},
        success: function(response){
            var str = response;
            //alert(str);
            processJSON(str);
        },
        error: function(xhr,ajaxOptions,thrownError){
            alert(xhr.status);
            alert(thrownError);
        }
    });
}

function processJSON(data){
        
    var jsonData = JSON.parse(data);
    //alert(jsonData[0].Name);
    var a = '<div data-role="main" class="ui-content"><div class="ui-grid-a">';
    
    var max = Object.keys(jsonData).length;
    var z = '';
    for(var i=0 ; i<max ; i+=2){
        var b = '<div class="ui-block-a" style="text-align: center;"><a data-role="button"><img id="'+i+'"src="';
        var b_1 = "http://120.108.116.176:25080/"+jsonData[i].Address;
        var b_2 = '" width=50% height=50%></a><h3>';
        var b_3 = jsonData[i].Name;
            
            
        if(i+1==max){
            z += b+b_1+b_2+b_3+'</h3></div>';
            break;
        }
                
        var c = '</h3></div><div class="ui-block-b" style="text-align: center;"><a data-role="button"><img id="'+(i+1)+'" src="';
        var c_1 = "http://120.108.116.176:25080/"+jsonData[i+1].Address;
        var c_2 = '" width=50% height=50%></a><h3>';
        var c_3 = jsonData[i+1].Name+'</h3></div>';
        
        z += b+b_1+b_2+b_3+c+c_1+c_2+c_3;
    }
        
    document.getElementById("mainField").addEventListener("click",function(e){
         var str = e.target.id;
         if(str!=""){
             setCookie('item',jsonData[str].product_id ,2);
             setCookie('genre',gen,2);
             window.location = 'items.html';
         }
     });
        


     var d = '</div></div>';
     var e = a+z+d;
     
     document.getElementById("mainField").innerHTML = e;
     
     //alert("okay");
 }
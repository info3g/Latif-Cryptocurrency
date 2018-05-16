
$(document).ready(function() {
document.getElementById("placeSelect1").value = 'YOU SEND';
document.getElementById("placeSelect2").value = 'YOU GET';
document.getElementById("secinp").value = 'BTC';
document.getElementById("secinp2").value = 'JOINT';
		$( '.div2' ).hide();
		$( '.div3' ).hide();
  
    });
	   function clear() {
 			console.log("sff");
			document.getElementById("placeSelect").value = '';
      }
  
    function showl(){
        var input, filter, ul, li, a, i;
        input = document.getElementById("placeSelect");
        filter = input.value.toUpperCase();
        
        ul = document.getElementById("showall");
        
        li = ul.getElementsByTagName("option");
        
        for (i = 0; i < li.length; i++) {
            a = li[i];
            console.log(a);
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
    
            }
        }
    }
    
    function myfun(val,val2){
    console.log(val);
    console.log(val2);
    $( '.div1' ).show();
    $( '.div2' ).hide();
    $('.div3').hide();
    document.getElementById("secinp").value = val;
    
    }
    function showlist1(){
    		
            $( '.div1' ).hide();
            $( '.div2' ).show();
            
            
        }
    function navopen(){
			
			  $( ".nav" ).toggle( "slow", function() {
  
  		});
		}
     function showlist(){
        $( '.div3' ).show();
		$( '.sel' ).hide();
		$("select").hide();
     $.ajax({
        url:"https://xapi.jointdemo.com/send-list",
        //async: false,
        type: "GET",
        dataType: "json",
        success:function(response_data_json) {
            jQuery.each(response_data_json, function(i, val) {
            console.log(val);
            console.log(i);
             
                $("#yourdivid1").append(document.createTextNode(val.name));
                $("#yourdivid2").append(document.createTextNode(val.symbol));
                
                    var opt = new Option(val.name);  
                    var symbol = "'"+val.symbol+"'";
                    var name = "'"+val.name+"'";
                    $("#showall").append('<option id="yes" value="'+i+'" onclick="myfun('+symbol+', '+name+');">\<strong style="font-weight: 800;">'+val.symbol+'</strong>&nbsp;&nbsp;'+val.name+'</option>');
                        
        var input, filter, ul, li;
        input = document.getElementById("placeSelect");
        filter = input.value.toUpperCase();
        ul = document.getElementById("showall");
        li = ul.getElementsByTagName("option");
        for (i = 0; i < li.length; i++) {
            a = li[i];
            console.log(a);
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
    
            }
        }
                    });
                }, 
     });
     
     }
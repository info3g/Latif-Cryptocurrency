
$(document).ready(function() {
  
    $.ajax({
        url:"https://xapi.jointdemo.com/send-list",
        //async: false,
        type: "GET",
        dataType: "json",
        success:function(response_data_json) {
            jQuery.each(response_data_json, function(i, val) {
            console.log(val);
            console.log(i);
            if(val.symbol == "ETH"){


                $('#imgappend').append('<img class="imageicons" src="./img/'+val.symbol+'.png"/>')
                document.getElementById("secinp").value =  val.symbol;


            }else{
                console.log("not found");
            }

            })
        }
    })

    $.ajax({
        url:"https://xapi.jointdemo.com/receive-list",
        //async: false,
        type: "GET",
        dataType: "json",
        success:function(response_data_json) {
            jQuery.each(response_data_json, function(i, val) {
            console.log(val);
            console.log(i);
         


                $('#imgappend2').append('<img class="imageicons" src="./img/'+val.symbol+'.png"/>')
                document.getElementById("secinp2").value =  val.symbol;



            })
        }
    })

document.getElementById("secinp2").value = 'JOINT';
		$( '.div2' ).hide();
        $( '.div3' ).hide();

        $( '.div5' ).hide();
        $( '.div6' ).hide();
        $( '.div8' ).hide();
        $( '.div9' ).hide();
     
        $('.outer').click(function(){
            if($('.div2').hasClass('show') ){
               $('.div2').removeClass('show');
               $('.div3').removeClass('show'); 
            }else if($('.div5').hasClass('show2')){
                $('.div5').removeClass('show2');
                $('.div6').removeClass('show2'); 
            }else{
                $('.div1').show();
                $('.div2').hide();
                $('.div3').hide(); 
                $('.div4').show();
                $('.div5').hide();
                $('.div6').hide(); 
                   
               
            }
        });
       
      
    });
	   function clearinp() {
            //console.log("dsd");
            $( '.div3' ).hide();
            $( '.div2' ).hide();
            $( '.div1' ).show();
        
            //document.getElementById("placeSelect").value = '';
            //$( ".div2" ).addClass( "yourClass" );
    
      }
  
    function showl(){
        var input, filter, ul, li, a, i;
        input = document.getElementById("placeSelect");
        filter = input.value.toUpperCase();
        
        ul = document.getElementById("showall");
        
        li = ul.getElementsByTagName("div");
        console.log(li.length);
        for (i = 0; i < li.length; i++) {
            a = li[i];
            console.log(a);
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            
                $( '#showall' ).removeClass('listheight');
               
                li[i].style.display = "";
            } else {
            
              
                $( '#showall' ).addClass('listheight');
                li[i].style.display = "none";
                 
    
            }
        }
    }

   


    function myfun(val,val2){
    console.log(val);
   this.variable1 = val;
    console.log(val2);
    $( '.div1' ).show();
    $( '.div2' ).hide();
    $('.div3').hide();
    
     $('#imgappend').empty().append('<img onclick="showlist1()" src="./img/'+val+'.png"/>')
     document.getElementById("secinp").value =  val;
    // $('#secinp').append('<img class="imageicons" src="./img/'+val+'.png"/>'+'<strong style="font-weight: 800;">'+val.symbol+'</strong>');
    }

    function adclass(){
        $('.div2').addClass('show');
        $('.div3').addClass('show');
    }
    function adclass2(){
        $('.div5').addClass('show2');
        $('.div6').addClass('show2');
    }
    function showlist1(){
        console.log(this.variable1);
        if(this.variable1==undefined || this.variable1==''){

            $( '.div1' ).hide();
            $( '.div2' ).show();
            $( '.div3' ).show();
            $( '.sel' ).hide();
            $("select").hide();
            /*$('body').attr('onClick','bodyclick()');*/
            $('.div2').addClass('show');
            $('.div3').addClass('show');
        $.ajax({
            url:"https://xapi.jointdemo.com/send-list",
            //async: false,
            type: "GET",
            dataType: "json",
            success:function(response_data_json) {
                jQuery.each(response_data_json, function(i, val) {
                console.log(val);
                console.log(i);
                
                
                    
                        var opt = new Option(val.name);  
                        var symbol = "'"+val.symbol+"'";
                        var name = "'"+val.name+"'";
                        $("#showall").append('<div>'+'<li id="yes" value="'+i+'" onclick="myfun('+symbol+', '+name+');">'+'<img class="imageicons" src="./img/'+val.symbol+'.png"/>'+'<strong class="symbolnm">'+val.symbol+'</strong>'+'&nbsp;&nbsp;'+val.name+'</li>'+'</div>');

                        //$("#showall").append('<strong onclick="myfun('+this.symbol+', '+this.name+');" style="font-weight: 800;">'+val.symbol+'</strong>&nbsp;&nbsp;'+val.name);

                })
            }
        })
        }else{

            $( '.div1' ).hide();
            $( '.div2' ).show();
            $( '.div3' ).show();

            $('.div2').addClass('show');
            $('.div3').addClass('show');
       
            $.ajax({
                url:"https://xapi.jointdemo.com/send-list",
                //async: false,
                type: "GET",
                dataType: "json",
                success:function(response_data_json) {
                    jQuery.each(response_data_json, function(i, value) {
                    console.log(value);
                    console.log(i);
                    
                    
                        
                            //var option = new Option(value.name);  
                            var cryptosymbol = "'"+value.symbol+"'";
                            var cryptoname = "'"+value.name+"'";
                            console.log(cryptosymbol);
                            console.log(cryptoname);

                          // $("#showall").html('<div>'+'<li id="yes" value="'+i+'" onclick="myfun('+cryptosymbol+', '+cryptoname+');">'+'<img class="imageicons" src="./img/'+value.symbol+'.png"/>'+'<strong class="symbolnm">'+value.symbol+'</strong>'+'&nbsp;&nbsp;'+value.name+'</li>'+'</div>');
    
                            //$("#showall").append('<strong onclick="myfun('+this.symbol+', '+this.name+');" style="font-weight: 800;">'+val.symbol+'</strong>&nbsp;&nbsp;'+val.name);
    
                    })
                }
            })
        
            }
           
            
        }
    function navopen(){
			
			  $( ".nav" ).toggle( "slow", function() {
  
  		});
		}
     function showlist(){
   
                        
        var input, filter, ul, li;
        input = document.getElementById("placeSelect");
        filter = input.value.toUpperCase();
        ul = document.getElementById("showall");
        li = ul.getElementsByTagName("option");
        for (i = 0; i < li.length; i++) {
            a = li[i];
            console.log(a);
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              
                li[i].style.display = " ";
                
            } else {
               
                li[i].style.display = "none";

        
            }
        }

     
     }

var arr1 = [];
     function showlist2(){
       console.log(this.variable2);
       if(this.variable2==undefined){

            $( '.div4' ).hide();
            $( '.div5' ).show();
            $( '.div6' ).show();
            // $( '.sel' ).hide();
            // $("select").hide();
            $('.div5').addClass('show2');
            $('.div6').addClass('show2');
            
        $.ajax({
            url:"https://xapi.jointdemo.com/receive-list",
            //async: false,
            type: "GET",
            dataType: "json",
            success:function(response_data_json) {
                jQuery.each(response_data_json, function(i, val2) {
                console.log(val2);
                console.log(i);
                
                
                    
                        var opt2 = new Option(val2.name);  
                        var symbol2 = "'"+val2.symbol+"'";
                        var name2 = "'"+val2.name+"'";
                        $("#showall2").append('<div>'+'<li id="yes" value="'+i+'" onclick="myfun2('+symbol2+', '+name2+');">'+'<img class="imageicons" src="./img/'+val2.symbol+'.png"/>'+'<strong class="symbolnm">'+val2.symbol+'</strong>'+'&nbsp;&nbsp;'+val2.name+'</li>'+'</div>');

                        //$("#showall").append('<strong onclick="myfun('+this.symbol+', '+this.name+');" style="font-weight: 800;">'+val.symbol+'</strong>&nbsp;&nbsp;'+val.name);

                })
            }
        })
        }else{

            $( '.div4' ).hide();
            $( '.div5' ).show();
            $( '.div6' ).show();

            $('.div5').addClass('show2');
            $('.div6').addClass('show2');
       
            $.ajax({
                url:"https://xapi.jointdemo.com/receive-list",
                //async: false,
                type: "GET",
                dataType: "json",
                success:function(response_data_json) {
                    jQuery.each(response_data_json, function(i, val2) {
                    console.log(val2);
                    console.log(i);
                    // this.arr1 = val2;
                    
                    
                        
                            //var option2 = new Option(val2.name);  
                            var cryptosymbol2 = "'"+val2.symbol+"'";
                            var cryptoname2 = "'"+val2.name+"'";

                            console.log(cryptosymbol2);
                            console.log(cryptoname2);


                          //  $("#showall2").empty().append('<div>'+'<li id="yes" value="'+i+'" onclick="myfun2('+cryptosymbol2+', '+cryptoname2+');">'+'<img class="imageicons" src="./img/'+val2.symbol+'.png"/>'+'<strong class="symbolnm">'+val2.symbol+'</strong>'+'&nbsp;&nbsp;'+val2.name+'</li>'+'</div>');
    
                    })
                }
            })
        
            }
           
            
        }

        function myfun2(val,val2){
            console.log(val);
            this.variable2 = val;
            console.log(val2);
            $( '.div4' ).show();
            $( '.div5' ).hide();
            $('.div6').hide();
             $('#imgappend2').empty().append('<img onclick="showlist2()"  src="./img/'+val+'.png"/>')
             document.getElementById("secinp2").value =  val;
            // $('#secinp').append('<img class="imageicons" src="./img/'+val+'.png"/>'+'<strong style="font-weight: 800;">'+val.symbol+'</strong>');
            }

            function showl2(){
                var input, filter, ul, li, a, i;
                input = document.getElementById("placeSelect2");
                filter = input.value.toUpperCase();
                
                ul = document.getElementById("showall2");
                
                li = ul.getElementsByTagName("div");
                console.log(li.length);
                for (i = 0; i < li.length; i++) {
                    a = li[i];
                    console.log(a);
                    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        console.log("dadasd");
                        $( '.div9' ).hide();
                        $( '#showall2' ).removeClass('listheight2');
                        li[i].style.display = "";
                    } else {
                        console.log("dadddddddddddasd");
                        $( '.div9' ).show();
                        $( '#showall2' ).addClass('listheight2');
                        li[i].style.display = "none";
                         
            
                    }
                }
            }

         function bodyclick()
         {
            $('.div1').show();
            $('.div2').hide();
            $('.div3').hide();  
            $('body').removeAttr('onClick','bodyclick()');          
         }

      
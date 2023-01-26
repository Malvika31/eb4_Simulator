$(document).ready(function(){

    /*variable declaration*/
    $meter=$('.meter');
    $img1=$('.meter img');
    $flame=$('.flame');
    $img2=$('.flame #img2');
    $img3=$('.flame #img1');
    $img4=$('.slab #one');
    $img5=$('.slab #two');

    let flag=false;
    let x=0;
    let y=0;
    let i=0;
    let j=0;
    let k=0;
    let l=0;
    let m=0;
    let n=0;
    let p=0;
    let q=0;
    let r=0;
    let s=0;
    const flames=['images/spark1.png','images/rsz_blue_flame.png','images/no_flame.png']
    const slab=['images/combined.png','images/slab_two.png']
    const meters=['images/meter0.png','images/meter1.png','images/meter2.png']
   
$(document).on('click',function(){

    $('#btn').click(function(){
      
        $('#step1').text("Step:1 Click on Select Metal").css({"font-weight":"bold", "font-style":"italic","color":"red"});
        $('#btn1').css("display","block");
        x=x+1; 
    })

    
        $('#d_btn1').click(function(){
            if(x>=1 && n==0){
                $('#one').css("display","block");
                i=i+1;
            }      
        })  
    
        if(i>=1){
            $('#msg1').text("The metal piece is of Mild Steel.").css({"font-weight":"900","font-color":"red"});
            $('#step2').text("Step2: Click on Set Cylinder").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn2').css("display","block");
        } 
        
        $('#btn2').click(function(){
            if(i>=1){
                $img1.attr('src',meters[1]);
                j=j+1;
            }
        })
        
        if(x>=1 && i>=1 && j>=1){
            $('#msg2').text("Oxygen(11-25psi) and Acetylene(5-7psi) ").css({"font-weight":"900","font-color":"red"});
            $('#step3').text("Step:3 Click on Spark Lighter").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn3').css("display","block");
        }
        
        $('#btn3').click(function(){
            if(j>=1){
                $img3.attr('src',flames[0]);
                setTimeout(function(){ $img2.attr("src", flames[1]); }, 2000);
                k=k+1;
            }
        })
        
        
        if(x>=1 && i>=1 && j>=1 && k>=1){
            $('#msg3').text("Spark lighter will start the flame").css({"font-weight":"900","font-color":"red"});
            $('#step4').text("Step:4 Select filling Rod").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn4').css("display","block");
        }
        
        $('#btn4').click(function(){
            if(k>=1){
                $('.rod').css("display","block");
                l=l+1;
            }
        })
        
        if(x>=1 && i>=1 && j>=1 && k>=1 && l>=1){
            $('#msg4').text(" Brass Rod will be placed at 30°-40° angle").css({"font-weight":"900","font-color":"red"});
            $('#step5').text("Step:5 Click on Start Welding").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn5').css("display","block");
        }
        
        if(l>=1){
            $('#btn5').click(function(){
                $('div[class="torch"]').animate({"top":"31%"},3000);
                $('.rod').animate({'top':'69%'},3000);
                m=m+1;
            })
        
         }
        
        function welding(){
            if( m>=1){
                $img4.attr('src',slab[0]);
                $img2.attr("src", flames[2]);
                $img3.attr('src',flames[2]);
                flag=true;
            } 
         }
         setTimeout(welding,20000);
        
         function message(){
            if(flag){
                $('#msg6').text('Congratulations!!Welding Completed');
                $('#msg6').css({"color": "red", "font-size":"150%"});
                $('#msg6').addClass('.blink_me');
            }
        }
        setTimeout(message,21000);
        
        if(flag){
            $('div[class="torch"]').animate({"top":"10%"});
            $('.rod').animate({"top":"48%"});
        } 

    else{
        $('#btn').click(function(){
      
            $('#step1').text("Step:1 Click on Select Metal").css({"font-weight":"bold", "font-style":"italic","color":"red"});
            $('#btn1').css("display","block"); 
            y=y+1;
        })
        $('#d_btn2').click(function(){
            if(y>=1 && i==0){
                
                $('#two').css("display","block"); 
                n=n+1;
            }
        })
        
        if(y>=1 && n>=1){
            $('#msg1').text("The metal piece is of Cast Iron.").css({"font-weight":"900","font-color":"red"});
            $('#step2').text("Step2: Click on Set Cylinder").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn2').css("display","block");
        } 
        
        $('#btn2').click(function(){
            if(n>=1){
                $img1.attr('src',meters[2]);
                p=p+1;
            }
        })
        
        if(y>=1 && n>=1 && p>=1){
            $('#msg2').text("Oxygen(9-20psi) and Acetylene(4-6psi) ").css({"font-weight":"900","font-color":"red"});
            $('#step3').text("Step:3 Click on Spark Lighter").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn3').css("display","block");
        }
        
        $('#btn3').click(function(){
            if(p>=1){
                $img3.attr('src',flames[0]);
                $img3.attr('src',flames[0]);
                setTimeout(function(){ $img2.attr("src", flames[1]); }, 2000);
                q=q+1;
            }
        })
        
        
        if(y>=1 && n>=1 && p>=1 && q>=1){
            $('#msg3').text("Spark lighter will start the flame").css({"font-weight":"900","font-color":"red"});
            $('#step4').text("Step:4 Select filling Rod").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn4').css("display","block");
        }
        
        $('#btn4').click(function(){
            if(q>=1){
                $('.rod').css("display","block");
                r=r+1;
            }
        })
        
        if(y>=1 && n>=1 && p>=1 && q>=1 && r>=1){
            $('#msg4').text(" Brass Rod will be placed at 30°-40° angle").css({"font-weight":"900","font-color":"red"});
            $('#step5').text("Step:5 Click on Start Welding").css({"font-weight":"bold", "font-style":"italic", "color":"red"});
            $('#btn5').css("display","block");
        }
        
        if(r>=1){
            $('#btn5').click(function(){
                $('div[class="torch"]').animate({"top":"31%"},3000);
                $('.rod').animate({'top':'69%'},3000);
                s=s+1;
            })
        
         }
        
        function welding(){
            if( s>=1){
                $img5.attr('src',slab[1]);
                $img2.attr("src", flames[2]);
                $img3.attr('src',flames[2]);
                flag=true;
            } 
         }
         setTimeout(welding,19000);
        
         function message(){
            if(flag){
                $('#msg6').text('Congratulations!!Welding Completed');
                $('#msg6').css({"color": "red", "font-size":"150%"});
                $('#msg6').addClass('.blink_me');
            }
        }
        setTimeout(message,20000);
        
        if(flag){
            $('div[class="torch"]').animate({"top":"10%"});
            $('.rod').animate({"top":"48%"});
        }
    }
       
});

});
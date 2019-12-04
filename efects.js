
/** VARIAVEIS **/

/*FAQ*/
var img_array = ['imagens/plus.svg','imagens/x.svg'];
var change1=0;
var change2=0;
var change3=0;
var change4=0;


/*NAV BAR */

     
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("navbar").style.top = "-19px";
        } else {
          document.getElementById("navbar").style.top = "-60px";
        }
      }
   

/*PROJECTS*/


function phasellus() {
  var win=window.open("https://anaflaviafoppa.github.io/phasellus1/", "_blank");
  win.focus();
}


/*SMOTH SCROLL*/


function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}






function copyemail() {
        var copyText = document.getElementById("anaffoppa@gmail.com");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
      }

      function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }


      

      /*COPIA DO TEXTO*/


      function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
      }


      

      /*CHANGE BUTTON*/

      
      
     

      function change_btn1(){
        change1++;
        
        if(change1%2 != 0){
          document.getElementById('myImg1').src = img_array[1];
          document.getElementById('whiteAnimation').style.display = "none";
          document.getElementById('faq').style.marginBottom = "20px";
        } else if(change1%2 === 0){
          document.getElementById('myImg1').src = img_array[0];
          document.getElementById('whiteAnimation').style.display = "block";
          document.getElementById('faq').style.marginBottom = "-120px";
        }
      }


      function change_btn2(){
        change2++;
        
        if(change2%2 != 0){
          document.getElementById('myImg2').src = img_array[1];
          document.getElementById('whiteAnimation').style.display = "none";
          document.getElementById('faq').style.marginBottom = "20px";
        } else if(change2%2 === 0){
          document.getElementById('myImg2').src = img_array[0];
          document.getElementById('whiteAnimation').style.display = "block";
          document.getElementById('faq').style.marginBottom = "-120px";
        }
      }


      function change_btn3(){
        change3++;
        
        if(change3%2 != 0){
          document.getElementById('myImg3').src = img_array[1];
          document.getElementById('whiteAnimation').style.display = "none";
          document.getElementById('faq').style.marginBottom = "20px";
        } else if(change3%2 === 0){
          document.getElementById('myImg3').src = img_array[0];
          document.getElementById('whiteAnimation').style.display = "block";
          document.getElementById('faq').style.marginBottom = "-120px";
        }
      }


      function change_btn4(){
        change4++;
        
        if(change4%2 != 0){
          document.getElementById('myImg4').src = img_array[1];
          document.getElementById('whiteAnimation').style.display = "none";
          document.getElementById('faq').style.marginBottom = "20px";
        } else if(change4%2 === 0){
          document.getElementById('myImg4').src = img_array[0];
          document.getElementById('whiteAnimation').style.display = "block";
          document.getElementById('faq').style.marginBottom = "-120px";
        }
      }
      
      /*LINKS - SOCIAL MEDIA */

      function mystack() {
        var win=window.open("https://stackoverflow.com/users/11994495/ana-flavia-foppa", "_blank");
        win.focus();
      }

      function mylinkedin() {
        var win=window.open("https://linkedin.com/in/ana-flavia-foppa-09427ba1/", "_blank");
        win.focus();
      }

       function mygithub() {
        var win=window.open("https://github.com/anaflaviafoppa", "_blank");
        win.focus();
      }
    
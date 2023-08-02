let al="The AVG Calculation Works like this following method \n if marks 10 = 10 \n marks 10.2 or 10.9 = 11";
      function interT()
      {
      dis();
      var w1=parseInt(document.getElementById("a").value);
      var w2=parseInt(document.getElementById("b").value);
      var w3=parseInt(document.getElementById("c").value);
      var mcq=parseInt(document.getElementById("d").value);
      var obt=parseInt(document.getElementById("e").value);
      var ac=parseInt(document.getElementById("f").value);
      let sum =Math.ceil((w1+w2+w3)/3)
      let sum1=Math.ceil((mcq+obt+ac)/3)
      let sum2=sum+sum1;
      document.getElementById("total").innerHTML='<h2 style="color:red">'+sum+'</h2>';
      document.getElementById("total1").innerHTML='<h2 style="color:red">'+sum1+'</h2>';
      document.getElementById("total2").innerHTML='<h2 style="color:red">'+sum2+'/50'+'</h2>';
      }
function mp(){let au=new Audio("click.mp3");au.play();}
function dis(){alert(al);}
function interP()
      {
      dis();
      var w1=parseInt(document.getElementById("a").value);
      var w2=parseInt(document.getElementById("b").value);
      var w3=parseInt(document.getElementById("c").value);
      var s1=parseInt(document.getElementById("d").value);
      var s2=parseInt(document.getElementById("e").value);
      var ac=parseInt(document.getElementById("f").value);
      var sum =Math.ceil((w1+w2+w3)/3)
      var sum1=Math.ceil((s1+s2)/2)
      let sum2=sum+sum1+ac;
      document.getElementById("total").innerHTML='<h2 style="color:red">'+sum+'</h2>';
      document.getElementById("total1").innerHTML='<h2 style="color:red">'+sum1+'</h2>';
      document.getElementById("total2").innerHTML='<h2 style="color:red">'+sum2+'/60'+'</h2>';
      document.getElementById("g").innerHTML='<h2 style="color:red">'+ac+'</h2>';
      }
      let ale="You are trying to input than maximum marks";
      function d(v) {
      let x = document.getElementById(v).value;
      let g = ['a', 'b', 'c'];
      var m = ['d', 'e'];
      if (g.includes(v) && x > 30) {document.getElementById(v).value = "";alert(ale);}
      else if (m.includes(v) && x > 20) {document.getElementById(v).value = "";alert(ale);}
      else if (v === 'f' && x > 10) {document.getElementById(v).value = "";alert(ale);}
      }
      function dx(){
      let vx=document.getElementById('f').value;
      if (vx > '20'){document.getElementById('f').value="";alert(ale);}
      }
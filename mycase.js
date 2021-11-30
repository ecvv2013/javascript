//今天星期几
<script>
   function td() {
      let today= (new Date).getDay()
      switch (today) {
         case 1:
            document.getElementById('demo').innerText="星期一";
            break;
         case 2:
            document.getElementById('demo').innerText="星期二";
            break;
         case 3:
            document.getElementById('demo').innerText="星期三";
            break;
         case 4:
            document.getElementById('demo').innerText="星期四";
            break;
         case 5:
            document.getElementById('demo').innerText="星期五";
            break;
         default:
            alert("周末");
            break;
      }
   }
   </script>

        window.onload = title();


function title() {
  
var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.title = Link.symbol + Link.user + " | Instalink";
          document.getElementById("Atrubution").innerHTML =   "This page was created by " + Link.user + "! "+ Link.user + " used InstaLink to create this page Click here to get yours now!" ;

        }
      };
      xmlhttp.open("GET", "link.json", true);
      xmlhttp.send();
}

function Atrubution() {
  window.location.href = "refer.html"
}
    
/*DO NOT CHANGE ABOVE*/

var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var Link = JSON.parse(this.responseText);
          document.getElementById("Link1").innerHTML = Link.title1;
          document.getElementById("Link2").innerHTML = Link.title2;
          document.getElementById("Link3").innerHTML = Link.title3;
          document.getElementById("Link4").innerHTML = Link.title4;
          document.getElementById("user").innerHTML = Link.symbol + Link.user;


        }
      };
      xmlhttp.open("GET", "link.json", true);
      xmlhttp.send();

      function click1() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Link = JSON.parse(this.responseText);
            document.getElementById("Link1").innerHTML =
              Link.msg + "&nbsp;" + Link.link1;
            console.log = Link.msg + "&nbsp;" + Link.link1;
            window.location.href = Link.link1;
          }
        };
        xmlhttp.open("GET", "link.json", true);
        xmlhttp.send();
      }

      function click2() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Link = JSON.parse(this.responseText);
            document.getElementById("Link2").innerHTML =
              Link.msg + "&nbsp;" + Link.link2;
            window.location.href = Link.link2;
            console.log = Link.msg + "&nbsp;" + Link.link;
          }
        };
        xmlhttp.open("GET", "link.json", true);
        xmlhttp.send();
      }

      function click3() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Link = JSON.parse(this.responseText);
            document.getElementById("Link3").innerHTML =
              Link.msg + "&nbsp;" + Link.link3;
            window.location.href = Link.link3;
            console.log = Link.msg + "&nbsp;" + Link.link3;
          }
        };
        xmlhttp.open("GET", "link.json", true);
        xmlhttp.send();
      }

      function click4() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Link = JSON.parse(this.responseText);
            document.getElementById("Link4").innerHTML =
              Link.msg + "&nbsp;" + Link.link4;
            window.location.href = Link.link4;
            console.log = Link.msg + "&nbsp;" + Link.link4;
          }
        };
        xmlhttp.open("GET", "link.json", true);
        xmlhttp.send();
      }

      function user() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var Link = JSON.parse(this.responseText);
            document.getElementById("user").innerHTML =
              Link.msg +
              "&nbsp;" +
              Link.symbol +
              Link.user +
              "&#39;s" +
              "&nbsp;" +
              Link.media_name +
              "!";
            console.log =
              Link.msg +
              "&nbsp;" +
              Link.symbol +
              Link.user +
              "&#39;s" +
              "&nbsp;" +
              Link.media_name +
              "!";
            window.location.href = Link.media + "/" + Link.user_url;
          }
        };
        xmlhttp.open("GET", "link.json", true);
        xmlhttp.send();
      }
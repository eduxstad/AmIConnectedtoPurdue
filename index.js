//index.js
function checkServerStatus()
{
    var img = document.body.appendChild(document.createElement("img"));
    img.onload = function()
    {
      console.log("Online");
      updatePage(1);      
    };
    img.onerror = function()
    {
      console.log("Offline");
      updatePage(0);
    };
    img.src = "https://printers.itap.purdue.edu:9164/favicon.ico";
}

function updatePage(success)
{
  console.log("Updating Page");
  document.getElementById("checking").style.display= "none"
  if(success) {
    document.getElementById("yes").style.display= "inherit";
  } else {
    document.getElementById("no").style.display= "inherit";
  }
}

function showDisconnected()
{
  document.getElementById("linkdis").style.opacity = "40%";
  document.getElementById("disinfo").style.visibility = "inherit";
  document.getElementById("didntcon").style.display = "inline";
  document.getElementById("didntcon2").style.display = "inline";
  document.getElementById("not").style.display = "inline";
  document.getElementById("moreinfo").style.visibility= "inherit";
}

function showConnected()
{
  document.getElementById("linkcon").style.opacity = "40%";
  document.getElementById("coninfo").style.visibility = "inherit";
  document.getElementById("didcon").style.display = "inline";
  document.getElementById("didcon2").style.display = "inline";
  document.getElementById("moreinfo").style.visibility= "inherit";
}
console.log("Checking server status . . .");
checkServerStatus();

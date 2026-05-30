function cekStatusAdmin(){
  const now = new Date();
  const jam = now.getHours();

  const status = document.getElementById("statusAdmin");

  if(jam >= 7 && jam < 14){
    status.innerHTML = "🟢 Admin Online";
    status.style.color = "#27ae60";
  }else{
    status.innerHTML = "🔴 Admin Offline";
    status.style.color = "#e74c3c";
  }
}

cekStatusAdmin();

function showPopup(){
  setTimeout(function(){
    document.getElementById("popup").style.display = "block";
  }, 500);
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

function resetForm(form){
  setTimeout(function(){
    form.reset();
  }, 700);
}
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
function editButton() {
    document.getElementById("form").classList.toggle("hide");
  }

function enter(){
    let fname = document.getElementById("fname").value;
    let frole = document.getElementById("frole").value;
    let favail = document.getElementById("favail").value;
    let fage = document.getElementById("fage").value;
    let floc = document.getElementById("floc").value;
    let fexp = document.getElementById("fexp").value;
    let femail = document.getElementById("femail").value;

    document.getElementById("name").innerHTML = fname;
    document.getElementById("role").innerHTML = frole;
    document.getElementById("avail").innerHTML = favail;
    document.getElementById("age").innerHTML = fage;
    document.getElementById("loc").innerHTML = floc;
    document.getElementById("exp").innerHTML = fexp;
    document.getElementById("email").innerHTML = femail;

    document.getElementById("form").classList.add("hide");
}

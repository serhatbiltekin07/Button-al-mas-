//burada birinci button tıkladığımız

document.getElementById("myBtn1").disabled = false;

myBtn1 = document.getElementById("myBtn1");
myBtn2 = document.getElementById("myBtn2");

isDisabled = true;

myBtn2.addEventListener("click", function () {
  isDisabled = !isDisabled;
  myBtn1.disabled = isDisabled;
});

// burada ise ikinci button a tıkladıladığımız
document.getElementById("myBtn2").disabled = false;

myBtn2 = document.getElementById("myBtn2");
myBtn1 = document.getElementById("myBtn1");

isDisabled = true;
myBtn1.addEventListener("click", function () {
  isDisabled = !isDisabled;
  myBtn2.disabled = isDisabled;
});

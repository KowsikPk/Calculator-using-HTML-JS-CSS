var dis = document.getElementById("inp");

function Display(sum) {
  dis.value += sum; 
}

function Clear() {
  dis.value = "";
}

function Del() {
  dis.value = dis.value.slice(0,-1);

}

function Cal() {
  try {
    dis.value = eval(dis.value);
  } catch (err) {
    alert("Enter valid Input");
  }
}

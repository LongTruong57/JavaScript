// bai 1
function tinhtien() {
  var pro = document.getElementById("pro")
  var qty = document.getElementById("qty")
  var name = pro.innerText
  var price = pro.getAttribute("data-price")
  var quantity = qty.value
  var amount = price * quantity
  document.getElementById("name").innerText = name 
  document.getElementById("amount").innerText = amount+'$'
}

// bai2
function them(button) {
  var row = button.parentElement.parentElement.cloneNode(true)
  var btnxoa = row.getElementsByTagName("button")[0]
  btnxoa.innerText = "Xóa"
  btnxoa.setAttribute("onclick","xoa(this)")
  document.getElementById("cart").appendChild(row)
  tongtien()
}

function xoa(button) {
  var row = button.parentElement.parentElement
  document.getElementById("cart").removeChild(row)
  tongtien()
}

function tongtien(){
  var cart = document.getElementById("cart")
  var rows = cart.getElementsByTagName("tr")
  var tong = 0
  for(var i = 0 ; i < rows.length ; i++) {
    var cells = rows[i].getElementsByTagName("td")
    var price = cells[1].innerText.substr(1)
    tong +=1*price
    document.getElementById("tong").innerText = tong + '$'
  }
}

// bai 3
function tongtien(){
  var cart = document.getElementById("cart")
  var rows = cart.getElementsByTagName("tr")
  document.getElementById("empty").style.display="none"
  document.getElementById("not-empty").style.display=""
  var tong = 0
  for(var i = 0 ; i < rows.length ; i++) {
    var cells = rows[i].getElementsByTagName("td")
    var price = cells[1].innerText.substr(1)
    tong +=1*price
  }
  if(tong > 0) {
    document.getElementById("tong").innerText = tong + '$'

  }
  if (tong > 6000) {
    document.getElementById("tong").style.backgroundColor = "yellow"
  }
  else {
      document.getElementById("tong").innerText = tong + '$'
  }
  if (tong === 0) {
    document.getElementById("empty").style.display="none"
  }
}

// bai 4
  var flag = true;
  var count = 0; 
  function mark(index) {
    var button = document.getElementsByTagName("button")[index];
    button.innerText = flag ? "X" : "O";
    button.style.backgroundColor = flag ? "aqua" : "yellow";
    button.setAttribute("disabled", "true");
    flag = !flag; 
    count++;
    if (count === 8) {
      alert("Game over!");
      location.reload();
    }
  }



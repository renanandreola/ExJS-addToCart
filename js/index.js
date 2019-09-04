function addToCart(product) {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

$(document).ready(function () {
  $('form').submit(function () {
      var productName = $('#product').val();
      var productPrice = $('#price').val();
      addToCart({
        name: productName,
        price: productPrice
      });
  });

  var cart = sessionStorage.getItem("cart");
  if (cart !== null) {
    cart = JSON.parse(cart);

    for (var i = 0; i < 1000; i++) {
      $("#test").html(i);
      $("#result").append("<li id="+i+">→ Produto: " + cart[i].name + "</br>" +
                          "   → Preço: "+"R$" + cart[i].price + "</br></li>" + "<button onclick='excluir("+ i +")' type='button' id='button" + i +"'>Excluir Produto</button>" + "</br>"+ "</br>");
    }

  }
})
function excluir(value) {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
  console.info(cart)
  console.info(cart[value])
  var removeItem = cart[value];
  var newcart = [];
  newcart = cart.splice($.inArray(removeItem, cart), 1);
  location.reload();
  return sessionStorage.setItem("cart", JSON.stringify(cart));
  // for (var i = 0; i < 1000; i++) {
  //   $("#result").hide();
  //   $("#result").style.display = "none";
  }

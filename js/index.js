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
      $("#result").append("→ Produto: " + cart[i].name + "</br>" +
                          "→ Preço: "+"R$" + cart[i].price + "</br>" + "<button onClick='excluir()' type='button' id='remove'>Excluir Produto</button>" + "</br>"+ "</br>");
    }
    function excluir() {
      for (var i = 0; i < 1000; i++) {
        $("#result").hide();
        $("#result").style.display = "none";

        //$("#result").append("→ Produto: " + cart[i].name + "</br>" +
        //"→ Preço: "+"R$" + cart[i].price + "</br>" + "<button onClick='excluir()' type='button' id='remove'>Excluir Produto</button>" + "</br>"+ "</br>");
      }
    }
    
  }
})

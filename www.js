let cart = [];
    let total = 0;

    function addToCart(product, price) {
      cart.push({ product, price });
      total += price;
      renderCart();
    }

    function renderCart() {
      const cartList = document.getElementById("cart-items");
      cartList.innerHTML = "";
      cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.product} - Rp ${item.price} 
          <button onclick="removeFromCart(${index})">x</button>`;
        cartList.appendChild(li);
      });
      document.getElementById("total").textContent = total;
    }

    function removeFromCart(index) {
      total -= cart[index].price;
      cart.splice(index, 1);
      renderCart();
    }

    function checkout() {
      if(cart.length === 0){
        alert("Keranjang masih kosong!");
        return;
      }
      alert("Terima kasih sudah berbelanja! Total belanja: Rp " + total);
      cart = [];
      total = 0;
      renderCart();
    }
// cart starts

let cart = [];

function addToCart(name, price, img) {
  const existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  renderCart();
  toggleCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>Rp ${item.price.toLocaleString()}</p>
          <div class="qty-control">
            <button onclick="changeQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
        <div class="cart-subtotal">
          Rp ${subtotal.toLocaleString()}
        </div>
      </div>
    `;
  });

  totalPrice.innerText = "Total: Rp " + total.toLocaleString();
  updateWA(total);
}

function changeQty(index, amount) {
  cart[index].qty += amount;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  renderCart();
}

function updateWA(total) {
  let message = "Halo Sweet Heartt 🍞, saya mau order:%0A";

  cart.forEach((item) => {
    message += `- ${item.name} (${item.qty} pcs)%0A`;
  });

  message += `%0ATotal: Rp ${total.toLocaleString()}`;

  document.getElementById("checkoutWA").href =
    "https://wa.me/6285727848594?text=" + message;
}

function toggleCart() {
  document.getElementById("cartPopup").classList.toggle("active");
}

// cart ends

// popup love starts
function showLovePopup() {
  const popup = document.getElementById("lovePopup");

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

function likeProduct(el) {
  el.classList.toggle("active"); // hati jadi pink
  showLovePopup();
}
// popup love ends

// icon share starts
function shareToWA(name, price) {
  let text = `Halo Sweet Heartt 🍞%0A`;
  text += `Aku nemu roti lucu nih 😍%0A`;
  text += `🍞 ${name}%0A`;
  text += `💰 Rp ${price.toLocaleString()}%0A`;
  text += `Yuk checkout bareng 💗`;

  window.open("https://wa.me/6285727848594?text=" + text, "_blank");
}
// icon share ends

// send message starts
function sendToWA(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  let text = `Halo Sweet Heartt 🍞\n`;
  text += `Aku mau kirim pesan:\n\n`;
  text += `👤 Nama: ${name}\n`;
  text += `📍 Lokasi: ${location}\n`;
  text += `📞 No HP: ${phone}\n`;
  text += `💌 Pesan: ${message}`;

  const encoded = encodeURIComponent(text);

  window.open(`https://wa.me/6285727848594?text=${encoded}`, "_blank");
}
// send message ends

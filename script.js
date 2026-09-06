const cart = [];
const cartEl = document.getElementById("cart");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const modal = document.getElementById("modal");
const modalTotal = document.getElementById("modalTotal");

const euro = n => n.toLocaleString("ca-ES", {style:"currency", currency:"EUR"});

function renderCart(){
  cartCount.textContent = cart.reduce((s,p)=>s+p.qty,0);
  const total = cart.reduce((s,p)=>s+p.price*p.qty,0);
  cartTotal.textContent = euro(total);
  modalTotal.textContent = euro(total);

  if(!cart.length){
    cartItems.innerHTML = '<div class="empty">El carret està buit.<br><span>Afegeix algun producte!</span></div>';
    return;
  }

  cartItems.innerHTML = cart.map((p,i)=>`
    <div class="cart-item">
      <div class="cart-item-icon">${p.icon}</div>
      <div class="cart-item-main">
        <strong>${p.name}</strong>
        <small>${p.qty} × ${euro(p.price)}</small>
      </div>
      <button class="remove" onclick="removeItem(${i})">✕</button>
    </div>
  `).join("");
}

function addItem(card){
  const item = {
    id: card.dataset.id,
    name: card.dataset.name,
    price: Number(card.dataset.price),
    icon: card.dataset.icon,
    qty: 1
  };
  const existing = cart.find(p=>p.id===item.id);
  if(existing) existing.qty++;
  else cart.push(item);
  renderCart();
  openCart();
}

function removeItem(index){
  cart.splice(index,1);
  renderCart();
}
window.removeItem = removeItem;

function openCart(){
  cartEl.classList.add("open");
  overlay.classList.add("show");
}
function closeCart(){
  cartEl.classList.remove("open");
  overlay.classList.remove("show");
}
document.getElementById("openCart").onclick = openCart;
document.getElementById("closeCart").onclick = closeCart;
overlay.onclick = closeCart;

document.querySelectorAll(".add").forEach(btn=>{
  btn.addEventListener("click",()=>addItem(btn.closest(".product")));
});

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.category;
    document.querySelectorAll(".product").forEach(p=>{
      p.style.display = cat==="all" || p.dataset.category===cat ? "" : "none";
    });
  });
});

document.getElementById("checkout").onclick = ()=>{
  if(!cart.length){ alert("El carret està buit."); return; }
  modal.classList.add("show");
  closeCart();
  overlay.classList.add("show");
};
document.getElementById("modalClose").onclick = ()=>{
  modal.classList.remove("show");
  overlay.classList.remove("show");
};
document.getElementById("demoPay").onclick = ()=>{
  alert("Pagament simulat! Aquí connectaries el teu sistema real (Tebex/Stripe/etc.).");
};

renderCart();

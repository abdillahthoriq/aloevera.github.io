// Toggle Active untuk hamburger menu
const navbarNav = document.querySelector(".pertama");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle Active untuk search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class Active untuk shopping cart

const shoppingButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

shoppingButton.addEventListener("click", function (e) {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

//  ketika klik diluar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !hm.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box

const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const itemDetailModal = document.querySelector("#item-detail-modal");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// manipulasi ketika salah satu inputan belum di isi

// function validateForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("Email").value;
//   var phone = document.getElementById("phone").value;

//   if (name === "" || email === "" || phone === "") {
//     alert("Please fill in all fields.");
//     return false;
//   }

//   return true;
// }

// document.addEventListener("input", function () {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("Email").value;
//   var phone = document.getElementById("phone").value;
//   var checkoutButton = document.getElementById("checkout-button");

//   if (name !== "" && email !== "" && phone !== "") {
//     checkoutButton.removeAttribute("disabled");
//   } else {
//     checkoutButton.setAttribute("disabled", "disabled");
//   }
// });

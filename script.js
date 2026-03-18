let users = [
  {
    name: "Ava Moon",
    bio: "Coffee lover and aspiring astronomer.",
    pic: "https://images.unsplash.com/photo-1752061143360-623e42941ab4?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Leo Brooks",
    bio: "Web developer by day, synthwave producer by night.",
    pic: "https://images.unsplash.com/photo-1752061823107-11cac0764eab?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Mira Quinn",
    bio: "Exploring the world one sketchbook at a time.",
    pic: "https://images.unsplash.com/photo-1750306956970-10d4eec3a9a8?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Jasper Reed",
    bio: "Book hoarder with a love for ramen.",
    pic: "https://plus.unsplash.com/premium_photo-1680371835462-0bd2c8b26846?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Zoe Lane",
    bio: "Amateur photographer capturing moments.",
    pic: "https://images.unsplash.com/photo-1742976650166-f657fa5c26ed?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Finn Avery",
    bio: "Gardener who names plants after constellations.",
    pic: "https://images.unsplash.com/photo-1600613363620-9fdf5cc9291b?q=80&w=1227&auto=format&fit=crop"
  },
  {
    name: "Isla Rowan",
    bio: "Collector of vinyl and vintage cameras.",
    pic: "https://plus.unsplash.com/premium_photo-1749043321570-0fb20b411c6d?w=500&auto=format&fit=crop&q=60"
  }
];

function renderUsers(arr) {
  const cardsRow = document.querySelector(".cards-row");
  cardsRow.innerHTML = ""; // Clear old content

  arr.forEach(function(user) {
    const card = document.createElement("div");
    card.className = "card";

    const bgImg = document.createElement("img");
    bgImg.className = "bg-img";
    bgImg.src = user.pic;
    card.appendChild(bgImg);

    const blur = document.createElement("div");
    blur.className = "blurred-layer";
    card.appendChild(blur);

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;
    content.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = user.bio;
    content.appendChild(p);

    card.appendChild(content);
    cardsRow.appendChild(card);
  });
}

// Initial render
renderUsers(users);

// Search input handler
const input = document.querySelector(".search-input");
input.addEventListener("input", function () {
  const value = input.value.trim().toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().startsWith(value)
  );
  renderUsers(filtered);
});

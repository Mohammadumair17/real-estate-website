const properties = [
  {
    title: "Luxury Apartment",
    location: "City Center",
    price: 180000,
    type: "apartment",
    image: "images/property1.jpg"
  },
  {
    title: "Modern Villa",
    location: "Green Valley",
    price: 420000,
    type: "villa",
    image: "images/property2.jpg"
  },
  {
    title: "Residential Plot",
    location: "North Area",
    price: 120000,
    type: "plot",
    image: "images/property3.jpg"
  }
];

const grid = document.getElementById("propertyGrid");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProperties(filteredProperties) {
  grid.innerHTML = "";

  filteredProperties.forEach(property => {
    const card = document.createElement("div");
    card.className = "property-card";

    card.innerHTML = `
      <img src="${property.image}" alt="${property.title}">
      <h4>${property.title}</h4>
      <p>${property.location}</p>
      <span>$${property.price.toLocaleString()}</span>
    `;

    grid.appendChild(card);
  });
}

// FILTER LOGIC
function filterProperties() {
  let filtered = properties;

  const typeValue = typeFilter.value;
  const priceValue = priceFilter.value;

  if (typeValue !== "all") {
    filtered = filtered.filter(p => p.type === typeValue);
  }

  if (priceValue !== "all") {
    filtered = filtered.filter(p => {
      if (priceValue === "low") return p.price < 200000;
      if (priceValue === "mid") return p.price >= 200000 && p.price <= 400000;
      if (priceValue === "high") return p.price > 400000;
    });
  }

  displayProperties(filtered);
  card.innerHTML = `
  <img src="${property.image}" alt="${property.title}">
  <h4>${property.title}</h4>
  <p>${property.location}</p>
  <span>$${property.price.toLocaleString()}</span>
`;

card.addEventListener("click", () => {
  localStorage.setItem("selectedProperty", JSON.stringify(property));
  window.location.href = "property.html";
});

}

// EVENT LISTENERS
typeFilter.addEventListener("change", filterProperties);
priceFilter.addEventListener("change", filterProperties);

// INITIAL LOAD
function displayProperties(filteredProperties) {
  grid.innerHTML = "";

  filteredProperties.forEach(property => {
    const card = document.createElement("div");
    card.className = "property-card";

    card.innerHTML = `
      <img src="${property.image}" alt="${property.title}">
      <h4>${property.title}</h4>
      <p>${property.location}</p>
      <span>$${property.price.toLocaleString()}</span>
    `;

    card.style.cursor = "pointer";

    card.onclick = function () {
      localStorage.setItem("selectedProperty", JSON.stringify(property));
      window.location.href = "property.html";
    };

    grid.appendChild(card);
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !phone || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message sent successfully! I will contact you soon.";
    formMessage.style.color = "green";

    contactForm.reset();
  });
}

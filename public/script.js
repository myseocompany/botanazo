const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");
const imageFallbackSrc = "./assets/images/mobile/logo_botanazo_mini.png";

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    if (img.src.endsWith("/logo-botanazo-mini.png") || img.src.endsWith("/logo_botanazo_mini.png")) return;
    img.src = imageFallbackSrc;
    img.classList.add("is-icon-fallback");
  });
});

if (toggle && links) {
  toggle.addEventListener("click", () => {
    links.classList.toggle("is-open");
  });
}

const reviewsSection = document.querySelector("[data-reviews-section]");
const reviewsGrid = document.querySelector("[data-reviews-grid]");

if (reviewsSection && reviewsGrid) {
  fetch("./reviews.json")
    .then((response) => response.json())
    .then((reviews) => {
      if (!Array.isArray(reviews) || reviews.length === 0) return;

      reviewsGrid.innerHTML = reviews
        .slice(0, 3)
        .map(
          (review) => `
            <article class="review-card">
              <h3>${review.author}</h3>
              <p class="review-stars" aria-label="${review.rating} de 5 estrellas">${"★".repeat(review.rating)}</p>
              <p>${review.text}</p>
              <p class="small-note">${review.rating}/5 en Google Maps</p>
            </article>
          `
        )
        .join("");

      reviewsSection.hidden = false;
    })
    .catch(() => {});
}

const deliveryRoot = document.querySelector('[data-page="domicilios"]');

if (deliveryRoot) {
  const COP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  const categories = [
    "Tacos",
    "Burritos",
    "Quesadillas",
    "Especiales",
    "Nachos y dorilocos",
    "Elotes y esquites",
    "Vegetariano",
    "Bebidas",
    "Extras",
    "Cócteles y cervezas",
  ];

  const image = (file) => `./assets/images/${file}`;
  const mobileImage = (file) => `./assets/images/mobile/${file.replace(/\.[^.]+$/, "-mobile.jpg")}`;
  const iconImage = imageFallbackSrc;

  const catalog = [
    {
      id: "tacos",
      category: "Tacos",
      name: "Tacos",
      description: "Tacos con cebolla y cilantro. Elige carne y presentación.",
      image: mobileImage("tacos-mexicanos-botanazo-armenia.jpg"),
      tags: ["Popular", "Birria"],
      optionsLabel: "Carne y presentación",
      options: [
        ["Pastor unidad", 7000, "1 taco de pastor"],
        ["Pastor orden x3", 20500, "Orden x3 tacos de pastor"],
        ["Pastor orden x5", 34000, "Orden x5 tacos de pastor"],
        ["Pastor orden x10", 67500, "Orden x10 tacos de pastor"],
        ["Carnitas unidad", 7000, "1 taco de carnitas"],
        ["Carnitas orden x3", 20500, "Orden x3 tacos de carnitas"],
        ["Carnitas orden x5", 34000, "Orden x5 tacos de carnitas"],
        ["Carnitas orden x10", 67500, "Orden x10 tacos de carnitas"],
        ["Longaniza unidad", 8000, "1 taco de longaniza"],
        ["Longaniza orden x3", 23500, "Orden x3 tacos de longaniza"],
        ["Longaniza orden x5", 39000, "Orden x5 tacos de longaniza"],
        ["Longaniza orden x10", 77500, "Orden x10 tacos de longaniza"],
        ["Suadero unidad", 7000, "1 taco de suadero"],
        ["Suadero orden x3", 20500, "Orden x3 tacos de suadero"],
        ["Suadero orden x5", 34000, "Orden x5 tacos de suadero"],
        ["Suadero orden x10", 67500, "Orden x10 tacos de suadero"],
        ["Tripa unidad", 7000, "1 taco de tripa"],
        ["Tripa orden x3", 20500, "Orden x3 tacos de tripa"],
        ["Tripa orden x5", 34000, "Orden x5 tacos de tripa"],
        ["Tripa orden x10", 67500, "Orden x10 tacos de tripa"],
        ["Birria unidad", 8000, "1 taco de birria"],
        ["Birria orden x3", 23500, "Orden x3 tacos de birria"],
        ["Birria orden x5", 39000, "Orden x5 tacos de birria"],
        ["Birria orden x10", 77500, "Orden x10 tacos de birria"],
        ["Campechano unidad", 8000, "1 taco campechano"],
        ["Campechano orden x3", 23500, "Orden x3 tacos campechanos"],
        ["Campechano orden x5", 39000, "Orden x5 tacos campechanos"],
        ["Campechano orden x10", 77500, "Orden x10 tacos campechanos"],
        ["Pollo orden x3", 23500, "Orden x3 tacos de pollo"],
        ["Pollo orden x5", 39000, "Orden x5 tacos de pollo"],
        ["Pollo orden x10", 77500, "Orden x10 tacos de pollo"],
      ].map(([label, price, line]) => ({ label, price, line })),
      addOns: [{ id: "queso", label: "Queso adicional", price: 1000, unit: "por taco", multiplier: "tacoCount" }],
    },
    {
      id: "burrito",
      category: "Burritos",
      name: "Burrito",
      description: "Tortilla de harina grande con frijoles refritos, pico de gallo, queso, guacamole y carne.",
      image: mobileImage("burro-mexicano-botanazo-armenia.jpg"),
      tags: ["Llenador"],
      optionsLabel: "Tipo",
      options: [
        ["Tripa, suadero, carnitas o pastor", 24000, "Burrito de tripa, suadero, carnitas o pastor"],
        ["Pollo o longaniza", 25000, "Burrito de pollo o longaniza"],
        ["Mixto dos carnes", 25000, "Burrito mixto dos carnes"],
        ["Birria", 27000, "Burrito de birria"],
        ["Burro especial", 30000, "Burro especial gratinado"],
      ].map(([label, price, line]) => ({ label, price, line })),
    },
    {
      id: "quesadilla",
      category: "Quesadillas",
      name: "Quesadilla",
      description: "Elige tipo y presentación. Acompañada incluye 2 entre guacamole, crema agria y pico de gallo.",
      image: mobileImage("tortilla-maiz-nixtamalizada-botanazo.jpg"),
      tags: ["Para compartir"],
      optionsLabel: "Tipo y presentación",
      options: [
        ["Solo queso solita", 17000, "Quesadilla solo queso solita"],
        ["Solo queso acompañada", 21000, "Quesadilla solo queso acompañada"],
        ["Sincronizada solita", 17000, "Sincronizada solita"],
        ["Sincronizada acompañada", 21000, "Sincronizada acompañada"],
        ["Carnitas, pastor, tripa o suadero solita", 18000, "Quesadilla de carnitas, pastor, tripa o suadero solita"],
        ["Carnitas, pastor, tripa o suadero acompañada", 22000, "Quesadilla de carnitas, pastor, tripa o suadero acompañada"],
        ["Pollo o chorizo solita", 19000, "Quesadilla de pollo o chorizo solita"],
        ["Pollo o chorizo acompañada", 23000, "Quesadilla de pollo o chorizo acompañada"],
        ["Quesadilla Maya solita", 20000, "Quesadilla Maya solita"],
        ["Quesadilla Maya acompañada", 24000, "Quesadilla Maya acompañada"],
        ["Quesabirria solita", 21000, "Quesabirria solita"],
        ["Quesabirria acompañada", 25000, "Quesabirria acompañada"],
        ["Mixta dos carnes solita", 20000, "Quesadilla mixta dos carnes solita"],
        ["Mixta dos carnes acompañada", 24000, "Quesadilla mixta dos carnes acompañada"],
      ].map(([label, price, line]) => ({ label, price, line })),
      helper: "Si eliges acompañada, escribe en observaciones tus 2 acompañamientos.",
    },
    ...["Chilaquiles", "Alambre", "Cazuela de queso", "Costra de queso"].map((name) => ({
      id: name.toLowerCase().replaceAll(" ", "-"),
      category: "Especiales",
      name,
      description:
        name === "Alambre"
          ? "Carne, cebolla, pimentones y queso mozzarella, con tortilla de maíz y guacamole."
          : name === "Chilaquiles"
          ? "Totopos con salsa roja, crema, cebolla, queso, huevo, carne y cilantro."
          : "Queso fundido con tortillas y guacamole.",
      image:
        name === "Chilaquiles"
          ? mobileImage("chilaquiles-mexicanos-botanazo-armenia.jpg")
          : name === "Alambre"
          ? mobileImage("alambre-botanazo-armenia.jpg")
          : name === "Cazuela de queso"
          ? mobileImage("cazuela-queso-botanazo-armenia.jpg")
          : iconImage,
      tags: ["Especial"],
      optionsLabel: "Carne",
      options:
        name === "Chilaquiles"
          ? [
              ["Tripa, suadero, carnitas o pastor", 31000],
              ["Longaniza o pollo", 32000],
              ["Birria", 34000],
            ].map(([label, price]) => ({ label, price, line: `${name} de ${label.toLowerCase()}` }))
          : name === "Alambre"
          ? [
              ["Tripa, suadero, carnitas o pastor", 28000],
              ["Longaniza o pollo", 28000],
              ["Birria", 31000],
            ].map(([label, price]) => ({ label, price, line: `${name} de ${label.toLowerCase()}` }))
          : [
              ["Tripa, suadero, carnitas o pastor", 29000],
              ["Longaniza o pollo", 30000],
              ["Birria", 32000],
            ].map(([label, price]) => ({ label, price, line: `${name} de ${label.toLowerCase()}` })),
    })),
    {
      id: "nachos",
      category: "Nachos y dorilocos",
      name: "Nachos",
      description: "Totopos con queso fundido, frijoles, pico de gallo, crema, cheddar, carne y jalapeños.",
      image: mobileImage("nachos-mexicanos-botanazo-armenia.jpg"),
      tags: ["Para compartir"],
      optionsLabel: "Tipo y tamaño",
      options: [
        ["Tripa, suadero, carnitas o pastor personal", 14000],
        ["Tripa, suadero, carnitas o pastor para compartir", 26500],
        ["Pollo o longaniza personal", 15000],
        ["Pollo o longaniza para compartir", 27500],
        ["Nachos Botanazo personal", 17000],
        ["Nachos Botanazo para compartir", 32000],
        ["Birria personal", 16000],
        ["Birria para compartir", 29000],
      ].map(([label, price]) => ({ label, price, line: `Nachos ${label.toLowerCase()}` })),
    },
    {
      id: "dorilocos",
      category: "Nachos y dorilocos",
      name: "Dorilocos",
      description: "Doritos con carne, queso cheddar, salsa de maíz, mozzarella, crema y pico de gallo.",
      image: mobileImage("dorilocos-botanazo-armenia.jpg"),
      tags: ["Botana"],
      optionsLabel: "Carne",
      options: [
        ["Tripa, suadero, carnitas o pastor", 19000],
        ["Pollo o longaniza", 20000],
        ["Birria", 22000],
      ].map(([label, price]) => ({ label, price, line: `Dorilocos de ${label.toLowerCase()}` })),
    },
    {
      id: "elote",
      category: "Elotes y esquites",
      name: "Elote",
      description: "Mazorca entera con mayonesa, queso cheddar y Doritos, Takis o carne.",
      image: mobileImage("elote-mexicano-botanazo-armenia.jpg"),
      tags: ["Maíz"],
      optionsLabel: "Tipo",
      options: [
        ["Dorielote / Takiselote", 10000],
        ["Con carne", 13000],
      ].map(([label, price]) => ({ label, price, line: `Elote ${label.toLowerCase()}` })),
    },
    {
      id: "esquite",
      category: "Elotes y esquites",
      name: "Esquite",
      description: "Granos de maíz calientes en vaso con mayonesa, queso, limón y lo que gustes.",
      image: mobileImage("esquite-botanazo-armenia.jpg"),
      tags: ["Maíz"],
      optionsLabel: "Tipo",
      options: [
        ["Doriesquites", 8000],
        ["Takisesquites", 8000],
        ["Con carne", 10000],
        ["Volcán con carne", 25000],
      ].map(([label, price]) => ({ label, price, line: `Esquite ${label.toLowerCase()}` })),
    },
    ...[
      ["Tacos vegetarianos", 25000],
      ["Quesadilla vegetariana", 17000],
      ["Quesadilla Azteca", 20000],
      ["Nachos vegetarianos", 24500],
      ["Burro vegetariano", 22500],
      ["Elote vegetariano", 9000],
      ["Esquite vegetariano", 8000],
    ].map(([name, price]) => ({
      id: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-"),
      category: "Vegetariano",
      name,
      description: "Opción vegetariana de Botanazo.",
      image: name.includes("Elote") || name.includes("Esquite") ? mobileImage("elote-mexicano-botanazo-armenia.jpg") : iconImage,
      tags: ["Vegetariano"],
      price,
    })),
    {
      id: "bombata",
      category: "Bebidas",
      name: "Bombata",
      description: "Frappé tipo malteada con perlas explosivas.",
      image: iconImage,
      tags: ["Bebida"],
      optionsLabel: "Tamaño",
      options: [
        ["Chica", 11000],
        ["Mediana", 13000],
        ["Grande", 15000],
      ].map(([label, price]) => ({ label, price, line: `Bombata ${label.toLowerCase()}` })),
      helper: "Sabores: fresa, mango, maracuyá y piña. Escríbelo en observaciones.",
      addOns: [{ id: "chamoy-perlas", label: "Chamoy o perlas extra", price: 2000 }],
    },
    {
      id: "chamoyada",
      category: "Bebidas",
      name: "Chamoyada",
      description: "Frappé en agua con perlas de sabor decorado con chamoy.",
      image: iconImage,
      tags: ["Bebida"],
      optionsLabel: "Tamaño",
      options: [
        ["Chica", 10000],
        ["Mediana", 12000],
        ["Grande", 14000],
      ].map(([label, price]) => ({ label, price, line: `Chamoyada ${label.toLowerCase()}` })),
      helper: "Sabores: fresa, mango, maracuyá y piña. Escríbelo en observaciones.",
      addOns: [{ id: "chamoy-perlas", label: "Chamoy o perlas extra", price: 2000 }],
    },
    {
      id: "aguas-frescas",
      category: "Bebidas",
      name: "Aguas frescas",
      description: "Horchata o jamaica en tamaño chica, mediana o grande.",
      image: mobileImage("tortilla-maiz-nixtamalizada-botanazo.jpg"),
      tags: ["Bebida"],
      optionsLabel: "Sabor y tamaño",
      options: ["Horchata", "Jamaica"].flatMap((flavor) =>
        [
          ["Chica", 7000],
          ["Mediana", 8000],
          ["Grande", 9000],
        ].map(([size, price]) => ({ label: `${flavor} ${size}`, price, line: `Agua fresca ${flavor.toLowerCase()} ${size.toLowerCase()}` }))
      ),
    },
    ...[
      ["Limonada", 9000, "Bebidas", "Bebida"],
      ["Coca-Cola", 6000, "Bebidas", "Bebida"],
      ["Quatro", 6000, "Bebidas", "Bebida"],
      ["Bretaña", 7000, "Bebidas", "Bebida"],
      ["Postre de la semana", 17000, "Extras", "Extra"],
      ["Margarita tradicional", 23000, "Cócteles y cervezas", "Con alcohol"],
      ["Margarita fresa", 25000, "Cócteles y cervezas", "Con alcohol"],
      ["Margarita chelada", 27000, "Cócteles y cervezas", "Con alcohol"],
      ["Paloma", 17000, "Cócteles y cervezas", "Con alcohol"],
      ["Charro negro", 17000, "Cócteles y cervezas", "Con alcohol"],
      ["Piña colada", 29000, "Cócteles y cervezas", "Con alcohol"],
      ["Cuba libre", 22000, "Cócteles y cervezas", "Con alcohol"],
      ["Seda Azteca", 29000, "Cócteles y cervezas", "Con alcohol"],
      ["ChamoChela", 22000, "Cócteles y cervezas", "Con alcohol"],
    ].map(([name, price, category, tag]) => ({
      id: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(" ", "-"),
      category,
      name,
      description: category === "Extras" ? "El sabor se confirma por WhatsApp antes de cerrar el pedido." : tag === "Con alcohol" ? "Debe recibir una persona mayor de edad." : "Bebida para sumar a tu pedido.",
      image: name.startsWith("Margarita") ? mobileImage("margarita-botanazo-armenia.jpg") : iconImage,
      tags: [tag],
      price,
      alcohol: tag === "Con alcohol",
    })),
    {
      id: "cerveza",
      category: "Cócteles y cervezas",
      name: "Cerveza",
      description: "Coronita, Corona, Sol o Club Dorada.",
      image: iconImage,
      tags: ["Con alcohol"],
      alcohol: true,
      optionsLabel: "Cerveza",
      options: [
        ["Coronita", 7000],
        ["Corona", 8000],
        ["Sol", 8000],
        ["Club Dorada", 8000],
      ].map(([label, price]) => ({ label, price, line: `Cerveza ${label}` })),
    },
    {
      id: "michelada-tradicional",
      category: "Cócteles y cervezas",
      name: "Michelada tradicional",
      description: "Escarchada con chamoy, tajín y limón.",
      image: iconImage,
      tags: ["Con alcohol"],
      alcohol: true,
      optionsLabel: "Cerveza",
      options: [
        ["Corona", 8000],
        ["Club Dorada", 8000],
        ["Sol", 8000],
      ].map(([label, price]) => ({ label, price, line: `Michelada tradicional con ${label}` })),
    },
    {
      id: "michelada-mexicana",
      category: "Cócteles y cervezas",
      name: "Michelada mexicana",
      description: "Escarchada con chamoy, tajín y limón.",
      image: iconImage,
      tags: ["Con alcohol"],
      alcohol: true,
      optionsLabel: "Cerveza",
      options: [
        ["Corona", 12000],
        ["Club Dorada", 12000],
        ["Sol", 12000],
      ].map(([label, price]) => ({ label, price, line: `Michelada mexicana con ${label}` })),
    },
  ].map((product) => ({ available: true, ...product }));

  const state = {
    category: "Todos",
    query: "",
    cart: loadCart(),
    activeProduct: null,
    lastFocus: null,
  };

  const els = {
    grid: document.querySelector("[data-catalog-grid]"),
    empty: document.querySelector("[data-catalog-empty]"),
    tabs: document.querySelector("[data-category-tabs]"),
    categoryMenuToggle: document.querySelector("[data-category-menu-toggle]"),
    search: document.querySelector("[data-catalog-search]"),
    cartItems: document.querySelector("[data-cart-items]"),
    cartEmpty: document.querySelector("[data-cart-empty]"),
    cartTotal: document.querySelector("[data-cart-total]"),
    mobileCart: document.querySelector("[data-mobile-cart]"),
    mobileCartCount: document.querySelector("[data-mobile-cart-count]"),
    mobileCartTotal: document.querySelector("[data-mobile-cart-total]"),
    mobileCartItems: document.querySelector("[data-mobile-cart-items]"),
    mobileCartEmpty: document.querySelector("[data-mobile-cart-empty]"),
    mobileCartDialogTotal: document.querySelector("[data-mobile-cart-dialog-total]"),
    productModal: document.querySelector("[data-product-modal]"),
    productDialog: document.querySelector("[data-product-modal] .delivery-dialog"),
    productModalContent: document.querySelector("[data-product-modal-content]"),
    cartModal: document.querySelector("[data-cart-modal]"),
    cartDialog: document.querySelector("[data-cart-modal] .delivery-dialog"),
    checkoutModal: document.querySelector("[data-checkout-modal]"),
    checkoutDialog: document.querySelector("[data-checkout-modal] .delivery-dialog"),
    checkoutForm: document.querySelector("[data-checkout-form]"),
    checkoutWarning: document.querySelector("[data-checkout-warning]"),
    checkoutButtons: document.querySelectorAll("[data-open-checkout], [data-open-checkout-mobile]"),
    openStatus: document.querySelector("[data-open-status]"),
  };

  renderStatus();
  renderTabs();
  renderCatalog();
  renderCart();
  bindDeliveryEvents();

  function money(value) {
    return COP.format(value).replace(/\s/g, "");
  }

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem("botanazoCart") || "null");
      if (!saved || !Array.isArray(saved.items)) return [];
      const age = Date.now() - Number(saved.updatedAt || 0);
      if (age > 24 * 60 * 60 * 1000) {
        localStorage.removeItem("botanazoCart");
        return [];
      }
      return saved.items;
    } catch {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem("botanazoCart", JSON.stringify({ updatedAt: Date.now(), items: state.cart }));
    } catch {}
  }

  function renderStatus() {
    if (!els.openStatus) return;
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Bogota",
      weekday: "long",
      hour: "2-digit",
      hour12: false,
    }).formatToParts(new Date());
    const day = parts.find((part) => part.type === "weekday")?.value;
    const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
    const open = day !== "Wednesday" && hour >= 17 && hour < 22;
    els.openStatus.textContent = open
      ? "Abierto para domicilios · hasta las 10:00 p. m."
      : "Cerrado ahora · puedes dejar tu pedido por WhatsApp";
    els.openStatus.classList.toggle("is-open", open);
  }

  function renderTabs() {
    els.tabs.innerHTML = ["Todos", ...categories]
      .map((category) => `<button type="button" class="${category === state.category ? "is-active" : ""}" data-category="${category}" role="tab" aria-selected="${category === state.category}">${category}</button>`)
      .join("");
  }

  function renderCatalog() {
    const query = state.query.trim().toLowerCase();
    const items = catalog.filter((product) => {
      const matchesCategory = state.category === "Todos" || product.category === state.category;
      const optionsText = product.options?.map((option) => `${option.label} ${option.line}`).join(" ") || "";
      const searchable = `${product.name} ${product.description} ${product.category} ${(product.tags || []).join(" ")} ${optionsText}`.toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });

    els.grid.innerHTML = items
      .map(
        (product) => `
          <article class="product-card ${!product.available ? "is-unavailable" : ""}">
            <img src="${product.image}" alt="${product.name} Botanazo" loading="lazy" />
            <div class="product-card-body">
              <div class="product-tags">${(product.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="product-card-footer">
                <strong>${product.options ? `Desde ${money(Math.min(...product.options.map((option) => option.price)))}` : money(product.price)}</strong>
                <button type="button" class="button button-primary" data-open-product="${product.id}" ${product.available ? "" : "disabled"}>${product.available ? "Agregar" : "Agotado"}</button>
              </div>
            </div>
          </article>
        `
      )
      .join("");
    els.empty.hidden = items.length > 0;
  }

  function bindDeliveryEvents() {
    els.tabs.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.category = button.dataset.category;
      renderTabs();
      renderCatalog();
      closeCategoryMenu();
    });

    els.categoryMenuToggle?.addEventListener("click", () => {
      const isOpen = els.tabs.classList.toggle("is-open");
      els.categoryMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    els.search.addEventListener("input", () => {
      state.query = els.search.value;
      renderCatalog();
    });

    els.grid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-product]");
      if (!button) return;
      openProduct(button.dataset.openProduct, button);
    });

    document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeProduct));
    document.querySelectorAll("[data-close-cart-modal]").forEach((button) => button.addEventListener("click", closeCartModal));
    document.querySelectorAll("[data-close-checkout]").forEach((button) => button.addEventListener("click", closeCheckout));
    document.querySelector("[data-open-mobile-cart]")?.addEventListener("click", (event) => openCartModal(event.currentTarget));
    els.checkoutButtons.forEach((button) => button.addEventListener("click", (event) => openCheckout(event.currentTarget)));

    document.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove-cart]");
      if (remove) {
        state.cart = state.cart.filter((item) => item.id !== remove.dataset.removeCart);
        saveCart();
        renderCart();
        return;
      }

      const quantity = event.target.closest("[data-cart-qty]");
      if (quantity) {
        const item = state.cart.find((cartItem) => cartItem.id === quantity.dataset.cartQty);
        if (!item) return;
        item.quantity = Math.max(1, item.quantity + Number(quantity.dataset.delta));
        saveCart();
        renderCart();
      }
    });

    els.productModal.addEventListener("submit", (event) => {
      event.preventDefault();
      addProductFromForm(new FormData(event.target));
    });

    els.checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      sendWhatsapp(new FormData(els.checkoutForm));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeProduct();
        closeCartModal();
        closeCheckout();
        closeCategoryMenu();
      }
      trapFocus(event);
    });
  }

  function closeCategoryMenu() {
    els.tabs.classList.remove("is-open");
    els.categoryMenuToggle?.setAttribute("aria-expanded", "false");
  }

  function openProduct(id, trigger) {
    const product = catalog.find((item) => item.id === id);
    if (!product) return;
    state.activeProduct = product;
    state.lastFocus = trigger;
    els.productModalContent.innerHTML = productForm(product);
    showModal(els.productModal, els.productDialog);
  }

  function productForm(product) {
    const options = product.options
      ? `
        <fieldset>
          <legend>${product.optionsLabel || "Opción"}</legend>
          ${product.options
            .map((option, index) => `<label class="choice-row"><input type="radio" name="option" value="${index}" ${index === 0 ? "checked" : ""} /> <span>${option.label}</span> <strong>${money(option.price)}</strong></label>`)
            .join("")}
        </fieldset>
      `
      : `<input type="hidden" name="option" value="fixed" />`;

    const addOns = product.addOns
      ? `
        <fieldset>
          <legend>Adicionales</legend>
          ${product.addOns.map((addOn) => `<label class="choice-row"><input type="checkbox" name="addon" value="${addOn.id}" /> <span>${addOn.label}${addOn.unit ? ` (${addOn.unit})` : ""}</span> <strong>+${money(addOn.price)}</strong></label>`).join("")}
        </fieldset>
      `
      : "";

    const alcohol = product.alcohol
      ? `<label class="choice-row alcohol-check"><input type="checkbox" name="adult" required /> <span>Confirmo que recibe una persona mayor de edad.</span></label>`
      : "";

    return `
      <form class="product-form">
        <img class="product-modal-image" src="${product.image}" alt="${product.name} Botanazo" />
        <div class="product-modal-copy">
          <div class="product-tags">${(product.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
          <h2 id="product-modal-title">${product.name}</h2>
          <p>${product.description}</p>
          ${product.helper ? `<p class="small-note">${product.helper}</p>` : ""}
        </div>
        ${options}
        ${addOns}
        ${alcohol}
        <label class="field-label">Observaciones por ítem<textarea name="note" rows="3" placeholder="Ej. sin cilantro, salsa aparte..."></textarea></label>
        <label class="field-label field-inline">Cantidad<input type="number" name="quantity" min="1" value="1" /></label>
        <button class="button button-primary" type="submit">Agregar al pedido</button>
      </form>
    `;
  }

  function addProductFromForm(form) {
    const product = state.activeProduct;
    if (!product) return;
    const selected = form.get("option") === "fixed" ? null : product.options[Number(form.get("option"))];
    const quantity = Math.max(1, Number(form.get("quantity") || 1));
    const selectedAddOns = product.addOns?.filter((addOn) => form.getAll("addon").includes(addOn.id)) || [];
    const tacoCount = selected?.line.match(/x(\d+)/)?.[1] ? Number(selected.line.match(/x(\d+)/)[1]) : selected?.line.startsWith("1 taco") ? 1 : 1;
    const addOnTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price * (addOn.multiplier === "tacoCount" ? tacoCount : 1), 0);
    const basePrice = selected ? selected.price : product.price;
    const note = String(form.get("note") || "").trim();
    const line = selected ? selected.line : product.name;
    const addOnText = selectedAddOns.map((addOn) => `${addOn.label}${addOn.multiplier === "tacoCount" ? ` x${tacoCount}` : ""}`).join(", ");

    state.cart.push({
      id: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      productId: product.id,
      name: product.name,
      line,
      addOns: addOnText,
      note,
      quantity,
      unitPrice: basePrice + addOnTotal,
    });
    saveCart();
    renderCart();
    closeProduct();
  }

  function renderCart() {
    const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const markup = state.cart
      .map(
        (item) => `
          <article class="cart-item">
            <div>
              <h3>${item.line}</h3>
              ${item.addOns ? `<p>Adicionales: ${item.addOns}</p>` : ""}
              ${item.note ? `<p>Nota: ${item.note}</p>` : ""}
              <strong>${money(item.unitPrice)} c/u</strong>
            </div>
            <div class="cart-item-actions">
              <button type="button" data-cart-qty="${item.id}" data-delta="-1" aria-label="Quitar una unidad">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-qty="${item.id}" data-delta="1" aria-label="Sumar una unidad">+</button>
              <button type="button" data-remove-cart="${item.id}">Quitar</button>
            </div>
          </article>
        `
      )
      .join("");

    els.cartItems.innerHTML = markup;
    els.mobileCartItems.innerHTML = markup;
    els.cartEmpty.hidden = state.cart.length > 0;
    els.mobileCartEmpty.hidden = state.cart.length > 0;
    els.cartTotal.textContent = money(total);
    els.mobileCartDialogTotal.textContent = money(total);
    els.mobileCartTotal.textContent = money(total);
    els.mobileCartCount.textContent = `${state.cart.reduce((sum, item) => sum + item.quantity, 0)} producto${state.cart.length === 1 ? "" : "s"}`;
    els.mobileCart.hidden = state.cart.length === 0;
    els.checkoutButtons.forEach((button) => (button.disabled = state.cart.length === 0));
  }

  function openCartModal(trigger) {
    state.lastFocus = trigger;
    showModal(els.cartModal, els.cartDialog);
  }

  function openCheckout(trigger) {
    if (state.cart.length === 0) return;
    state.lastFocus = trigger;
    closeCartModal(false);
    showModal(els.checkoutModal, els.checkoutDialog);
  }

  function closeProduct() {
    hideModal(els.productModal);
  }

  function closeCartModal(restore = true) {
    hideModal(els.cartModal, restore);
  }

  function closeCheckout() {
    hideModal(els.checkoutModal);
  }

  function showModal(modal, dialog) {
    modal.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => dialog.focus());
  }

  function hideModal(modal, restore = true) {
    if (modal.hidden) return;
    modal.hidden = true;
    if (![els.productModal, els.cartModal, els.checkoutModal].some((item) => !item.hidden)) {
      document.body.classList.remove("modal-open");
    }
    if (restore && state.lastFocus) state.lastFocus.focus();
  }

  function trapFocus(event) {
    if (event.key !== "Tab") return;
    const modal = [els.productModal, els.cartModal, els.checkoutModal].find((item) => !item.hidden);
    if (!modal) return;
    const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function sendWhatsapp(form) {
    const data = Object.fromEntries(form.entries());
    const missing = ["nombre", "municipio", "direccion"].filter((field) => !String(data[field] || "").trim());
    if (missing.length) {
      els.checkoutWarning.textContent = "Completa nombre, municipio y dirección para enviar el pedido.";
      els.checkoutWarning.hidden = false;
      return;
    }

    const message = buildMessage(data, false);
    let finalMessage = message;
    const encodedLength = encodeURIComponent(message).length;
    if (encodedLength > 1800) {
      els.checkoutWarning.textContent = "Tu pedido está largo. Lo enviaremos resumido por WhatsApp y el detalle quedará visible para confirmar.";
      els.checkoutWarning.hidden = false;
      finalMessage = buildMessage(data, true);
      if (encodeURIComponent(finalMessage).length > 1800) {
        finalMessage = "Hola Botanazo, quiero hacer un pedido a domicilio. Ya armé mi carrito en la página.";
      }
    }

    window.open(`https://wa.me/573127525143?text=${encodeURIComponent(finalMessage)}`, "_blank", "noopener,noreferrer");
  }

  function buildMessage(data, compact) {
    const lines = state.cart.map((item) => {
      const total = money(item.unitPrice * item.quantity);
      const details = compact
        ? ""
        : `${item.addOns ? `\n  Adicionales: ${item.addOns}` : ""}${item.note ? `\n  Nota: ${item.note}` : ""}`;
      return `- ${item.quantity} x ${item.line} — ${total}${details}`;
    });
    const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    return [
      "Hola Botanazo, quiero hacer este pedido a domicilio:",
      "",
      "Pedido:",
      ...lines,
      "",
      `Subtotal productos: ${money(total)}`,
      "Valor domicilio: por confirmar",
      "",
      "Datos de entrega:",
      `Nombre: ${data.nombre || ""}`,
      `Teléfono: ${data.telefono || ""}`,
      `Municipio: ${data.municipio || ""}`,
      `Barrio: ${data.barrio || ""}`,
      `Dirección: ${data.direccion || ""}`,
      `Referencia: ${data.referencia || ""}`,
      "",
      "Observaciones del pedido:",
      data.observaciones || "",
    ].join("\n");
  }
}

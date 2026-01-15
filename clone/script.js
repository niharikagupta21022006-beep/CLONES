function displayItems() {
    const container = document.querySelector(".hotels");

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("hotel1");   // layout बचाने के लिए

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="noodles">
                <div class="name">${item.name}</div>
                <div class="rating">₹${item.price}</div>
                <div class="address">Alwar Locality</div>
            </div>
        `;

        div.querySelector("img").addEventListener("click", () => {
            localStorage.setItem("selectedItem", JSON.stringify(item));
            window.location.href = "bill.html";
        });

        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", displayItems);
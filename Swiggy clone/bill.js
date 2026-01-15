const item = JSON.parse(localStorage.getItem("selectedItem"));

const billDiv = document.getElementById("bill-details");
if(item) {
    billDiv.innerHTML = `<p>Item: ${item.name}</p>
    <p>Price: Rs.${item.price}</p>
    <hr>
    <p><strong>Total:Rs${item.price}</strong></p>
    `;

}

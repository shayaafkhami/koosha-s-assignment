let products = [];
function getProducts() {
    document.getElementById('productName').innerHTML = "خانه"
    let html = ""
    $.ajax({
        url: "http://81.29.251.180:2345/products.json",
        success: function (json) {
            products = json
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                html +=
                    "<div class='ml-4 card' style='width: 283px; height: 365px'" + "onClick='navigateToProductInfo(" + i + ")'>" +
                    " <img class='card-img-top' style='background-size:cover;margin-top: 54px' src=" + product.image + " >" +
                    "<div class='card-body'>"
                    + "<p>" + product.name + "</p>"
                    + "<p>" + product.price + " " + "تومان" + "</p>" +
                    "</div>" +
                    "</div>"
            }
            document.getElementById("products").innerHTML = html
        },
        error: function (e) {
            console.log(e);
            //todo show alert
        }
    });
}
function navigateToProductInfo(index) {
    const productObject = products[index];
    document.getElementById("products").innerHTML = '';


    // let product = document.getElementById("product");
    // product.style.display = "block"

    document.getElementById("productInfo").innerHTML = productObject.details.size;

    document.getElementById('productName').innerHTML = productObject.name
}

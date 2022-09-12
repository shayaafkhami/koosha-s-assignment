
function getProducts() {
    let html = ""
    $.ajax({
        url: "http://81.29.251.180:2345/products.json",
        success: function (json) {
            let products = json
            for (let product of products) {
                html +=
                    "<div class='card' style='width: 28rem;'>" +
                    " <img class='card-img-top' src=" + product.image + " >" +
                    "<div class='card-body'>" +
                    "<ul class='card-info' id='cardInfo'>" + "<li>" + product.name + "</li>" + "</ul>" +
                    "<ul class='card-price' id='cardPrice'>" + "<li>" + product.price + "تومان" + "</li>" + "</ul>" +
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

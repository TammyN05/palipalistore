
let productList = ''

function showProducts(list){
    let htmlContentToAppend = "";
 for (let i=0; i < productList.length; i++){
    let product = list[i]
     
    htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row" >
                <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ product.name +`</h4> 
                        <p> `+ product.description +`</p> 
                        <br> <br>
                        <h3 class="mb-1"> $` + product.cost + ` ` + product.currency +`</h3> 
                        </div>
                        <small class="text-muted">` + product.soldCount + ` vendidos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
     document.getElementById("list_cars").innerHTML = htmlContentToAppend;
 }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_CARS).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productList = resultObj.data.products;
            console.log(productList)
            showProducts(productList);
        }
    });
});


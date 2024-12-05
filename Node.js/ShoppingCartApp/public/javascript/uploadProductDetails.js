var readProductDetails = () => {
    var pDetails = {
        "id" : $("#id").val(),
        "Category": $("#Category").val(),
        "type": $("#type").val(),
        "brand": $("#brand").val(),
        "title": $("#title").val(),
        "description":$("#description").val(),
        "price": parseInt($("#price").val()),
        "discountPercent": parseInt($("#discountPercent").val()),
        "mainImage": $("#mainImage").val(),
        "rating": parseFloat($("#rating").val())
    }; 
    console.log(pDetails);  
    
    axios.post("/add/newProductDetails", pDetails).then((result) => {
        console.log(result);
        $("#rblock").text("Inserted Sucessfully!");
    }).catch((err) => {
        
    });
}
var ImagePath = '';

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
        "mainImage": ImagePath,
        "rating": parseFloat($("#rating").val())
    };  
    
    axios.post("/add/newProductDetails", pDetails).then((result) => {
        console.log(result);
        $("#rblock").text("Inserted Sucessfully!");
    }).catch((err) => {
        
    });
}

var uploadDetails = () => {

    var uploadfile = $("input[name=prodImage]")[0].files[0];
    let formData = new FormData();
    formData.append("prodImage", uploadfile);

    axios.post('/upload/productImage', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
    }).then((response) => {
        ImagePath = response.data.file_path
    }).catch((error) => {
        // handle error
    })

}
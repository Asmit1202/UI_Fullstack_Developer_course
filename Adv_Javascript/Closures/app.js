var count = 0;

var doOperation = (type) => {

    count++;

    var result;

    var data = {

        a1: $("#fval").val(),
        a2: $("#sval").val(),
    }
    switch(type){
        case 'Addition':
            result = mathUtilLib.doAdditionValues(data.a1, data.a2);
            break;
        case 'Substraction':
            result = mathUtilLib.doSubstractionValues(data.a1, data.a2);
            break;
        case 'Multiplication':
            result = mathUtilLib.doMulitiplicationValues(data.a1, data.a2);
            break;
        case 'Division':
            result = mathUtilLib.doDivisionValues(data.a1, data.a2);
            break;
    }

    var msg = "The " + type + " is " + result;
    $("#resultBlock").text(msg);

    $("#sCount").text(count);
}
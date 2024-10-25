var mathUtilLib = (() =>{
    var count = 0;
    var doAddition = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 + a2;
        return result;
    }

    var doSubstraction = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 - a2;
        return result;
    }

    var doMulitiplication = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 * a2;
        return result;
    }

    var doDivision = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 / a2;
        return result;
    }

    var displayInfo = (count) => {
        console.log("This is from my display info lib: " + count);
    }

    return{
        doAdditionValues(a1, a2){
            return doAddition(a1, a2);
        },
        doSubstractionValues(a1, a2){
            return doSubstraction(a1, a2);
        },
        doMulitiplicationValues(a1, a2){
            return doMulitiplication(a1, a2);
        },
        doDivisionValues(a1, a2){
            return doDivision(a1, a2);
        },
    };
}
)();
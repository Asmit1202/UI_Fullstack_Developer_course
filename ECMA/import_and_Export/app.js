import {getTotalSal} from "./salaryUtil.js";
// import * as ref from "./salaryUtil.js"; -> ref.getTotlSal

var displaying = () => {
    console.log("I am from display msg");
}

var totalSal = getTotalSal(23000);

displaying();

console.log("totalSal: " + totalSal);
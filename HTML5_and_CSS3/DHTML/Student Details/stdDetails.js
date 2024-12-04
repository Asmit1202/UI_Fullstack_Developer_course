var stdDetails = {
    readstdDetails(){
        this.fName = document.querySelector("#fName").value;
        
        if (this.fName == ""){
            document.querySelector(".nameErr").style.display = "block";
            return;
        }else{
            document.querySelector(".nameErr").style.display = "none"; 
        }

        this.lName = document.querySelector("#lName").value;

        if (this.lName == ""){
            document.querySelector(".nameErr1").style.display = "block";
            return;
        }
        else{
            document.querySelector(".nameErr1").style.display = "none"; 
        }

        this.age = document.querySelector("#stdAge").value;

        if (this.age == ""){
            document.querySelector(".ageErr").style.display = "block";
            return;
        }else{
            document.querySelector(".ageErr").style.display = "none";
        }

        this.class = document.querySelector("#stdClass").value;
        this.gender = document.querySelector("input[name=gender]:checked").value;
        this.marks = [];
        for (var i = 0; i < 5; i++){
            var id = "#m" + (i+1);
            var m = document.querySelector(id).value;
            if (m == ""){
                document.querySelector(".marksErr").style.display = "block";
                return;
            }else{
                document.querySelector(".marksErr").style.display = "none";
            }
            m = parseInt(m);
            this.marks.push(m);
        }
        console.log(stdDetails);
        this.stdTotalandAvg();
    },
    stdTotalandAvg(){
        this.total = 0;
        for(var i=0; i<this.marks.length; i++){
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.stdGrade();
    },
    stdGrade(){
        this.grade = this.avg >= 40 ? "Passed" : "Failed";
        this.showstdDetails();
    },
    showstdDetails(){
        document.querySelector("#progreeCardContainer").style.display = "block";
        document.querySelector("#dfName").innerText = this.fName;
        document.querySelector("#dlName").innerText = this.lName;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dclass").innerText = this.class;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;                
    },
    validateData(event) {
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            return true;    
        }
        else {
            return false;
    
        }
    },
    validateData1(event) {
        if (event.keyCode >= 67 && event.keyCode <= 90) {
            return true;    
        }
        else {
            return false;
    
        }
    }
};


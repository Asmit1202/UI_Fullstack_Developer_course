class SchoolDeatils {
    constructor(){
        this.schoolname = "Asmit High school";
        this.schoollocation = "Ashok nagar, Mulund-East, Mumbai";
    }
}

class StudentDeatils extends SchoolDeatils {
    constructor(obj){
        super();
        this.sname = obj.name;
        this.age = obj.age;
        this.marks = obj.marks;
    }
    
    getTotalandAvg(){
        this.total = 0;
        for (var i = 0; i < this.marks.length; i++){
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }

    getGrade(){
        this.grade = (this.avg >= 40 ) ? "Passed" : "Failed"; 
    }

    displayDeatils(){
        $("#displayBlock").show();
        this.getTotalandAvg();
        this.getGrade();
        $("#dname").text(this.sname);
        $("#dage").text(this.age);
        $("#dtotal").text(this.total);
        $("#davg").text(this.avg);
        $("#dgrade").text(this.grade);
        $("#dschoolname").text(this.schoolname);
        $("#dschoolloc").text(this.schoollocation);
    }
}

var studentDetails = [];

var resetDetails = () => {
    $("#sname").val("");
    $("#sage").val("");
    for (var i = 0; i < 5; i++){
        let id = "#m" + (i+1);
        $(id).val("");
    }
}

var readData = () => {
    var obj = {};
    obj.name = $("#sname").val();
    obj.age = $("#sage").val();
    obj.marks = [];
    for (var i = 0; i < 5; i++){
        id = "#m" + (i+1);
        obj.marks.push(parseInt($(id).val()));
    }
    resetDetails();

    var s1 = new StudentDeatils(obj);
    s1.displayDeatils();

    studentDetails.push(s1);

    console.log(studentDetails);
}


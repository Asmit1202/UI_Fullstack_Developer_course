var Captchgenerte = {
    generateRandomPattern(){
        this.String = ["N", "U", "L", "N", "L"];
        this.patternLength = 6;
        this.pattern = "";
        for (i = 0; i< this.patternLength; i++){
            this.index = Math.round(Math.random() * (this.String.length - 1));
            this.pattern += this.String[this.index];  
        }
        //console.log(this.pattern);
        this.patterns = this.pattern.split("");
        //console.log(this.patterns);

        this.randomCaptcha = "";
        for (i = 0; i < this.patterns.length; i++){
            switch(this.patterns[i]) {
                case "L":
                    this.randomCaptcha += this.generateLowerCaseRandomChar();
                    break;
                case "U":
                    this.randomCaptcha += this.generateUpperCaseRandomChar();
                    break;
                case "N":
                    this.randomCaptcha += this.generateRandomNumber();
                    break;
            }
        }
        //console.log(this.randomCaptcha)
    },
    generateLowerCaseRandomChar(){
        var max = 122;
        var min = 97;
        var randomAlpha = Math.round(Math.random() * (max - min) + min);

        return String.fromCharCode(randomAlpha);
        // console.log(char);
    },
    generateUpperCaseRandomChar(){
        var max1 = 90;
        var min1 = 65;
        var randomAlpha1 = Math.round(Math.random() * (max1 - min1) + min1);

        return String.fromCharCode(randomAlpha1);
        // console.log(char1);
    },
    generateRandomNumber(){
        return  Math.round(Math.random() * 9);
    },
    generateCaptchText() {
        // Captchgenerte.CaptchText = Captchgenerte.generateRandomNumber() + Captchgenerte.generateUpperCaseRandomChar() + Captchgenerte.generateLowerCaseRandomChar() + Captchgenerte.generateRandomNumber() + Captchgenerte.generateUpperCaseRandomChar();

        // document.querySelector("#CaptchText").innerText = Captchgenerte.CaptchText;
        // console.log(Captchgenerte.CaptchText)

        Captchgenerte.generateRandomPattern();
        this.CaptchText = this.randomCaptcha;
        // document.querySelector("#CaptchText").innerText = Captchgenerte.CaptchText;

        return this.CaptchText;
    }
    
};


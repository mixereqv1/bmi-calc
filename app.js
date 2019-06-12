const bmi_calc = {
    weightInput: document.getElementById('weight'),
    heightInput: document.getElementById('height'),
    countButton: document.getElementById('count__btn'),
    resultSection: document.getElementById('result'),
    bmi: 0,

    count: function(){
        if(this.weightInput.value == '' || this.heightInput.value == '') {
            this.resultSection.innerText = 'Wprowadź prawidłowe dane tj. liczby'
        } else {
            this.bmi = this.weightInput.value / Math.pow(this.heightInput.value / 100, 2);
            this.resultSection.innerText = 'Twoje BMI wynosi ' + this.bmi.toFixed(2);
            this.weightInput.value = '';
            this.heightInput.value = '';
        }
    },

    init: function(){
        this.countButton.addEventListener('click',this.count.bind(this));
    }
}

bmi_calc.init();
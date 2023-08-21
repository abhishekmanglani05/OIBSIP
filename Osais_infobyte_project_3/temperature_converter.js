function convertfehrenheit() {

    if (document.getElementById("type").value == "FAHRENHEIT") {

        var number0 = parseInt(document.getElementById("main3a").value);
        var number1 = (number0 - 32) * (5 / 9);
        document.getElementById("main3c").value = number1;
        //   document.write(number + number + number);

    }


    if (document.getElementById("type").value == "Celcius") {

        document.getElementById("main3a").placeholder = "Enter";

        var number2 = parseInt(document.getElementById("main3a").value);
        var number3 = (number2 * (9 / 5)) + 32;
        document.getElementById("main3c").value = number3;
        //   document.write(number + number + number);

    }

}
function convertDegree() {

    if (document.getElementById("type").value == "Celcius") {

        document.getElementById("main3a").placeholder = "Celcius";
        document.getElementById("main3a").value = '';
        document.getElementById("main3c").placeholder = "Fahrenheit";
        document.getElementById("main3c").value = '';


    }

    if (document.getElementById("type").value == "FAHRENHEIT") {

        document.getElementById("main3a").placeholder = "Fahrenheit";
        document.getElementById("main3a").value = '';
        document.getElementById("main3c").placeholder = "Celcius";
        document.getElementById("main3c").value = '';

    }


}
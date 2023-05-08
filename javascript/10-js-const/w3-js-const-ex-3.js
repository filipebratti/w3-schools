try {
    const cars = ["Saab", "Volvo", "BMW"]
    cars = ["Toyota", "Volvo", "Audi"]
}
catch (err) {
    document.getElementById("demo").innerHTML = err;
}
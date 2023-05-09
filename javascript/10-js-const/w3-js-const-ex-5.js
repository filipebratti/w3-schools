try {
    const car = {type:"Fiat", model:"500", color:"white"};
    car = {type:"Volvo", model:"EX60", color:"red"};
}
catch (err) {
    document.getElementById("demo").innerHTML = err;
}
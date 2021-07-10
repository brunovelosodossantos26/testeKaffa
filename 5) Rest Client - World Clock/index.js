function atulizaRelogio(){
    fetch(`http://worldclockapi.com/api/json/utc/now`).then(res => {
        return res.json();
    }).then(corpo =>{
        console.log(corpo)
        const hoje = (corpo.currentDateTime).replace(/["T Z"]/g," ")
        var data = hoje.split(" ")[0];
        var hora = hoje.split(" ")[1];
    
        var date = new Date();
        var segundo = date.getSeconds();

        document.getElementById("dataUTC").innerHTML = "Data UTC: " +data
        document.getElementById("horaUTC").innerHTML = "Horário UTC: " +hora
    })     
}

setInterval(atulizaRelogio, 1000)

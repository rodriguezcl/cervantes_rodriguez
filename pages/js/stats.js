verEstadisticas();

function verEstadisticas() {

    let montos = JSON.parse(localStorage.getItem("montos")) || [];
    let tipos = JSON.parse(localStorage.getItem("tipos")) || [];

    let cantEntradas = 0;
    let acumEntradas = 0;
    let cantSalidas = 0;
    let acumSalidas = 0;
    let difEntradasSalidas = 0;

 

    for (let i = 0; i < montos.length; i++) {

        let m = montos[i];
        let t = tipos[i];

        switch (t.toLowerCase()) {
            case 'entrada':
                cantEntradas++;
                acumEntradas = acumEntradas + m;
                break;
            case 'salida':
                cantSalidas++;
                acumSalidas = acumSalidas + m;
                break;

        }

    }

    difEntradasSalidas = acumEntradas - acumSalidas;
    console.log(difEntradasSalidas,acumEntradas,acumSalidas);

    //Mostrar el resulta en el DOM
    
    const lblCantEntradas = document.getElementById("lblCantEntradas");
    lblCantEntradas.innerHTML = cantEntradas;

    const lblAcumEntradas = document.getElementById("lblAcumEntradas");
    lblAcumEntradas.innerHTML = `$ ${acumEntradas.toLocaleString()}`;

    const lblCantSalidas = document.getElementById("lblCantSalidas");
    lblCantSalidas.innerHTML = cantSalidas;

    const lblAcumSalidas = document.getElementById("lblAcumSalidas");
    lblAcumSalidas.innerHTML = `$ ${acumSalidas.toLocaleString()}`;
   
    const lblDifEntradasSalidas = document.getElementById("lblDifEntradasSalidas");
    lblDifEntradasSalidas.innerHTML = `$ ${difEntradasSalidas.toLocaleString()}`;

}
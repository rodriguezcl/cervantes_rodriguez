verListado();

function verListado() {

    //tabla

    let montos = JSON.parse(localStorage.getItem("montos")) || [];
    let tipos = JSON.parse(localStorage.getItem("tipos")) || [];

    for (let i = 0; i < montos.length; i++) {

        let m = montos[i];
        let t = tipos[i];


        const td0 = document.createElement("td");
        td0.innerHTML = m;

        const td1 = document.createElement("td");
        td1.innerHTML = t;

        const tr = document.createElement("tr");
        tr.appendChild(td0);
        tr.appendChild(td1);

        const tbody = document.querySelector("tbody");
        tbody.appendChild(tr);

    }


}

function limpiar()
{
    localStorage.removeItem("montos");
    localStorage.removeItem("tipos");  

    const tbody = document.querySelector("tbody");
    tbody.innerHTML= "";
    
}
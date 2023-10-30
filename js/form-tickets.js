function botonTotalPagar(){

    const capturaCantidad = document.getElementById("cantidad")
    const capturaCategoria = document.getElementById("categoria-estudiante")
    const valorTicket = 200
    const capturaTotal = document.getElementById("total")

    console.log("funciona el boton")
    console.log(capturaCantidad.value)
    console.log(capturaCategoria.value)
    console.log(valorTicket)
    console.log(capturaTotal.textContent)

    //capturaTotal.textContent = capturaTotal.textContent + (Number(capturaCantidad.value) * Number(capturaCategoria.value) * valorTicket)
    capturaTotal.textContent =  "Total a Pagar: $" + (Number(capturaCantidad.value) * Number(capturaCategoria.value) * valorTicket)

}

function resetFormulario(){
    console.log("funciona el boton")
}

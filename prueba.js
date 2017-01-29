
// Funcion para cortar y comparar quien es el mayor devolverá true solo si se puede poner el elemento de lo contrario será false
// @param primero - Array
// @Param segundo - string
function cortaCompa(primero, segundo) {
    var salida = ( segundo.split("_")[1] < primero[0].split("_")[1] ) ? true: false;
    return salida;
}


console.log(cortaCompa(["caja_3", "caja_2"], "caja_1"));
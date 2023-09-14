/**
 * Esta funcion crea un objeto de error personalizado
 * @param {String} message - Mensaje de error personalizado
 * @param {Number} status - Codigo de estado 
 * @param {object} originalError - Error Original 
 * @returns 
 */
export function errorCustom(message, status, detailsError, originalError) {
    return { errCustom: { message, status, detailsError}, originalError}
}
/**
 * El errorHandler toma el objeto Error lanzado y lo analiza. Si fue un error controlado desde los endpoint lo desestructura para mandar el error original como loguer a consola y, al mismo tiempo, mandar como respuesta al cliente el error personalizado. Si el error fue inesperado el parametro "originalError" sera undefined por ende entrara en el if y ahi se personalizara llamando la funcion "errorCustom()". De esta manera todos los errores (inesperados o no) tendran el mismo formato para la respuesta y se loguearan en consola.
 * @param {object} error - Error Personalizado mediante la funcion errorCustom() o inesperado generado automaticamente.
 * @param {empty} req - Viene desde peticion (No es utilizado en esta funcion )
 * @param {object} res -  Viene desde peticion para responder con error generado.
 * @param {function} next -  Viene desde peticion (No es utilizado en esta funcion )
 */
export function errorHandler(error, req, res, next) {
    let { errCustom, originalError } = error
    if (!errCustom) {
        console.log('entro en origianerror')
        console.log('status',error.status)
        console.log('statusCode',error.statusCode)

        let errorCompleto = (errorCustom(error.message, error.statusCode || 500, error.name))
        errCustom= errorCompleto.errCustom
        originalError = errorCompleto.originalError
    }
    console.log('Error Original', errCustom)
    res.status(errCustom.status).json(errCustom)
}

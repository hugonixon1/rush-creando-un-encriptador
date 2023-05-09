const textArea = document.querySelector(".entrada-texto")
const mensaje = document.querySelector(".salida-texto");

function bEncriptar()
{
    const Textencriptado = encriptar (textArea.value);
    mensaje.value = Textencriptado;
    textArea.value = "";

}

function encriptar (textoEncriptado)
{
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0 ;i < matriz.length; i++)
    {
        if (textoEncriptado.includes(matriz[i][0]))
        {
            textoEncriptado = textoEncriptado.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return textoEncriptado
}
function bdesEncriptar()
{
    const Textdesencriptado = desencriptar (textArea.value);
    mensaje.value = Textdesencriptado;
    textArea.value = "";

}
function desencriptar (textodesencriptado)
{
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textodesencriptado = textodesencriptado.toLowerCase();

    for (let i = 0 ;i < matriz.length; i++)
    {
        if (textodesencriptado.includes(matriz[i][1]))
        {
            textodesencriptado = textodesencriptado.replaceAll(matriz[i][1],matriz[i][0]);
        }
    }
    return textodesencriptado
}


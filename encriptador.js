const textArea = document.querySelector(".entrada-texto");
const mensaje = document.querySelector(".salida-texto");

//funcion del botn de encriptar
function bEncriptar()
{
    const Textencriptado = encriptar (textArea.value);
    mensaje.value = Textencriptado;
    textArea.value = "";
    if (mensaje.value == "")
    {
        alert("no hay texto a encriptar");
    }
    else
    {
        //mueve la pantalla al area de texto de entrada en una transicion suave
        textArea.scrollIntoView({ behavior: "smooth", block: "start" });
        mensaje.style.backgroundImage = "none";
    }

}
//funcion del botn de desencriptar
function bdesEncriptar()
{
    const Textdesencriptado = desencriptar (textArea.value);
    mensaje.value = Textdesencriptado;
    textArea.value = "";
    if (mensaje.value == "")
    {
        alert("no hay texto a desencriptar");
    }
    else
    {
        //mueve la pantalla al area de texto de salida en una transicion suave
        mensaje.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
//funcion de encriptado
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
    return textoEncriptado;
}
//funcion de desencriptado
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
    return textodesencriptado;
}
function copiar(){
    mensaje.select();
    document.execCommand("copy");
    if (mensaje.value== "")
    {
        alert("No hay texto a copiar");
    }
    else
    {
        alert("Texto Copiado");
    }
}
  


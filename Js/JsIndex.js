/*
si bien son eventos simples que dejan mucho que desear
no encuentro en este proyecto que tipo de evento colocar

*/

/* coloca el tema que selecciono el usuario para cuando vuelva a cargar la pagina*/
function temaSeleccionado(){
    if (localStorage.tema)
    {
        const contador = document.getElementsByClassName('color');
        for (let i = 0; i < contador.length; i++)
        {
            contador[i].style.backgroundColor = localStorage.tema;
        }
    }
    
    if (localStorage.fondo)
    {
        document.body.style.backgroundImage = localStorage.fondo;
        if (localStorage.fondo == "url('/Imagenes/fondo.jpg')")
        {
            document.getElementById("sf").innerHTML = "Sacar Fondo";
        }
        else
        {
            document.getElementById("sf").innerHTML = "Colocar fondo";
        }
    }
};

function esconderMenuPc()
{
    if (window.innerWidth <= 507)
    {
        document.getElementById("menu-pc").style.display = "none";
        if (document.getElementById("tema").style.display != "none")
        {
            document.getElementById("tema").style.display = "none";
        }

    }
    else
    {
        document.getElementById('menu-pc').style.display = "block";
        if (document.getElementById("tema").style.display != "none")
        {
            document.getElementById("tema").style.display = "none";
        }
    }
};

/* para saber en que momento el usuario cambia las dimenciones del navegador*/
window.onresize = esconderMenuPc;
/* llamando la funcion que coloca el tema ya seleccionado por el usuario*/
temaSeleccionado()

/* mostrar menu cel*/
document.getElementById('btn-menu-cel').addEventListener('click',function() {
    if ( document.getElementById('menu-pc').style.display == "none" || document.getElementById('menu-pc').style.display == "")
    {
        document.getElementById('menu-pc').style.display = "block";
    }
    else
    {
        document.getElementById('menu-pc').style.display = "none";
        if (document.getElementById('tema').style.display == "block")
        {
            document.getElementById('tema').style.display = "none";
        }
    }
});
/* Esconder menu pc*/
document.getElementById("dp").addEventListener("click", esconderMenuPc);

document.getElementById("ob").addEventListener("click", esconderMenuPc);

document.getElementById("fa").addEventListener("click", esconderMenuPc);

document.getElementById("fc").addEventListener("click", esconderMenuPc);

document.getElementById("oc").addEventListener("click", esconderMenuPc);

document.getElementById("el").addEventListener("click", esconderMenuPc);

document.getElementById("ec").addEventListener("click", esconderMenuPc);

document.getElementById("id").addEventListener("click", esconderMenuPc);

document.getElementById("od").addEventListener("click", esconderMenuPc);

/* mostrar menu tema*/
document.getElementById('btn-tema').addEventListener('click',function() {
    if (document.getElementById('tema').style.display == "none" || document.getElementById('tema').style.display == "")
    {
        document.getElementById('tema').style.display = "block";
    }
    else
    {
        document.getElementById('tema').style.display = "none";
    }
});

/* cambiar color de tema */
document.getElementById('defaul').addEventListener('click',function() {
    const contador = document.getElementsByClassName('color');
    for (let i = 0; i < contador.length; i++)
    {
        contador[i].style.backgroundColor = "black";
    }
    if (localStorage.tema)
        {
            localStorage.tema = "black";
        }
        else{
            localStorage.tema = "black";
        }
});

document.getElementById('purpura').addEventListener('click',function() {
    const contador = document.getElementsByClassName('color');
    for (let i = 0; i < contador.length; i++)
    {
        contador[i].style.backgroundColor = "#6c4675";
    }
    if (localStorage.tema)
        {
            localStorage.tema = "#6c4675";
        }
        else{
            localStorage.tema = "#6c4675";
        }
});

document.getElementById('marron').addEventListener('click',function() {
    const contador = document.getElementsByClassName('color');
    for (let i = 0; i < contador.length; i++)
    {
        contador[i].style.backgroundColor = "#4e3b31";
        
    }
    if (localStorage.tema)
        {
            localStorage.tema = "#4e3b31";
        }
        else{
            localStorage.tema = "#4e3b31";
        }
});

document.getElementById('verde').addEventListener('click',function() {
    const contador = document.getElementsByClassName('color');
    for (let i = 0; i < contador.length; i++)
    {
        contador[i].style.backgroundColor = "#20603d";
    }
    if (localStorage.tema)
        {
            localStorage.tema = "#20603d";
        }
        else{
            localStorage.tema = "#20603d";
        }
});

/* Sin fondo*/
document.getElementById('sf').addEventListener('click',function() {
    if (document.body.style.backgroundImage == "none")
    {
        
        document.body.style.backgroundImage = "url('/Imagenes/fondo.jpg')";
        document.getElementById("sf").innerHTML = "Sacar fondo";
        if (localStorage.fondo)
        {
            localStorage.fondo = "url('/Imagenes/fondo.jpg')";
        }
        else{
            localStorage.fondo = "url('/Imagenes/fondo.jpg')";
        }

    }
    else
    {
        document.body.style.backgroundImage = "none";
        document.getElementById("sf").innerHTML = "Colocar fondo";
        if (localStorage.fondo)
        {
            localStorage.fondo = "none";
        }
        else{
            localStorage.fondo = "none";
        }
    }

});
/* Mostrar titulos */
document.getElementById('btn-fac1').addEventListener('click',function() {
    if (document.getElementById('titulo1').style.display == "none" || document.getElementById('titulo1').style.display == "")
    {
        document.getElementById('titulo1').style.display = "block";
    }
    else
    {
        document.getElementById('titulo1').style.display = "none";
    }
});

document.getElementById('btn-fac2').addEventListener('click',function() {
    if (document.getElementById('titulo2').style.display == "none" || document.getElementById('titulo2').style.display == "")
    {
        document.getElementById('titulo2').style.display = "block";
    }
    else
    {
        document.getElementById('titulo2').style.display = "none";
    }

});

document.getElementById('btn-fac3').addEventListener('click',function() {
    if (document.getElementById('titulo3').style.display == "none" || document.getElementById('titulo3').style.display == "")
    {
        document.getElementById('titulo3').style.display = "block";
    }
    else
    {
        document.getElementById('titulo3').style.display = "none";
    }

});
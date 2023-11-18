var tipoToldo;
tipoToldo = alert("¿Que tipo de toldo estas buscando?");
tipoToldo = prompt("2X2 - 2X3 - 4X4 - 6X4 - 8X5 - OTRO");

if(tipoToldo == "2X2"){
    window.location.href = 'exten1.html';
}else{
    if(tipoToldo == "2X3"){
        window.location.href = 'exten2.html'; 
    }else{
        if(tipoToldo == "4X4"){
            window.location.href = 'exten3.html'; 
        }else{
            if(tipoToldo == "6X4"){
                window.location.href = 'exten4.html'; 
            }else{
                if(tipoToldo == "8X5"){
                    window.location.href = 'exten5.html'; 
                }else{
                    if(tipoToldo == "OTRO"){
                        window.location.href = 'personalizado.html'; 
                    }else{
                        tipoToldo = alert("Mientras te decides ve lo que tenemos por ofrecer");
                    }
                }
            }
        }
    }
};
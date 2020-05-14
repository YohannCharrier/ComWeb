function printHour(xhr){
    let data = JSON.parse(xhr.responseText);
    displayClock(data[1]);
    document.getElementById("title").innerHTML = data[0];
    document.getElementById("detail").innerHTML = "hours : "+data[1]['hours']+"<br>minutes : "+data[1]['minutes']+"<br>seconds : "+data[1]['seconds'];
}

function printError(xhr){
    let errorDiv = document.getElementById("errors");
    errors.style.display = "inline-block";
    
    switch(xhr.status){
        case 400 : errorDiv.innerHTML = "Requête incorrecte";
        break;
        case 401 : errorDiv.innerHTML = "Authentifiez vous";
        break;
        case 403 : errorDiv.innerHTML = "Accès refusé";
        break;
        case 404 : errorDiv.innerHTML = "Page non trouvée";
        break;
        case 500 : errorDiv.innerHTML = "Erreur interne du serveur";
        break;
        case 503 : errorDiv.innerHTML = "Service indisponible";
        break;
    }
}

function ajaxRequest(type,url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);
    
    xhr.onload = () => {
        switch(xhr.status){
            case 200:
            case 201: callback(xhr);
            break;
            default: printError(xhr);
            clearInterval(interval);
        }
        
    };

    xhr.send();
}

var interval = setInterval(ajaxRequest,500,"GET","http://localhost/ComWeb/TP3/Ajax-JSON/time.php",printHour);
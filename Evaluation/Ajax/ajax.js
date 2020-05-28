function addEtudiant(xhr){
    let data = JSON.parse(xhr.responseText)
    document.getElementById("heure").innerHTML = "Il est "+data[0];
    document.getElementById("etu1").innerHTML = "<th scope='row'>CIR1</th>"+"<td>"+data["CIR1"][0]["login"]+"</td>"+"<td>"+data["CIR1"][0]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CIR1"][0]["notes"]["DS"][0]+data["CIR1"][0]["notes"]["DS"][1])/2) + 0.5 * ((data["CIR1"][0]["notes"]["partiel"][0]+data["CIR1"][0]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu2").innerHTML = "<th scope='row'>CIR1</th>"+"<td>"+data["CIR1"][1]["login"]+"</td>"+"<td>"+data["CIR1"][1]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CIR1"][1]["notes"]["DS"][0]+data["CIR1"][1]["notes"]["DS"][1])/2) + 0.5 * ((data["CIR1"][1]["notes"]["partiel"][0]+data["CIR1"][1]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu3").innerHTML = "<th scope='row'>CIR1</th>"+"<td>"+data["CIR1"][2]["login"]+"</td>"+"<td>"+data["CIR1"][2]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CIR1"][2]["notes"]["DS"][0]+data["CIR1"][2]["notes"]["DS"][1])/2) + 0.5 * ((data["CIR1"][2]["notes"]["partiel"][0]+data["CIR1"][2]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu4").innerHTML = "<th scope='row'>CIR2</th>"+"<td>"+data["CIR2"][0]["login"]+"</td>"+"<td>"+data["CIR2"][0]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CIR2"][0]["notes"]["DS"][0]+data["CIR2"][0]["notes"]["DS"][1])/2) + 0.5 * ((data["CIR2"][0]["notes"]["partiel"][0]+data["CIR2"][0]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu5").innerHTML = "<th scope='row'>CIR2</th>"+"<td>"+data["CIR2"][1]["login"]+"</td>"+"<td>"+data["CIR2"][1]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CIR2"][1]["notes"]["DS"][0]+data["CIR2"][1]["notes"]["DS"][1])/2) + 0.5 * ((data["CIR2"][1]["notes"]["partiel"][0]+data["CIR2"][1]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu6").innerHTML = "<th scope='row'>CIR2</th>"+"<td>"+data["CIR2"][2]["login"]+"</td>"+"<td>"+data["CIR2"][2]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CIR2"][2]["notes"]["DS"][0]+data["CIR2"][2]["notes"]["DS"][1])/2) + 0.5 * ((data["CIR2"][2]["notes"]["partiel"][0]+data["CIR2"][2]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu7").innerHTML = "<th scope='row'>CSI2</th>"+"<td>"+data["CSI2"][0]["login"]+"</td>"+"<td>"+data["CSI2"][0]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CSI2"][0]["notes"]["DS"][0]+data["CSI2"][0]["notes"]["DS"][1])/2) + 0.5 * ((data["CSI2"][0]["notes"]["partiel"][0]+data["CSI2"][0]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu8").innerHTML = "<th scope='row'>CSI2</th>"+"<td>"+data["CSI2"][1]["login"]+"</td>"+"<td>"+data["CSI2"][1]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CSI2"][1]["notes"]["DS"][0]+data["CSI2"][1]["notes"]["DS"][1])/2) + 0.5 * ((data["CSI2"][1]["notes"]["partiel"][0]+data["CSI2"][1]["notes"]["partiel"][1])/2))+"</td>";
    document.getElementById("etu9").innerHTML = "<th scope='row'>CSI2</th>"+"<td>"+data["CSI2"][2]["login"]+"</td>"+"<td>"+data["CSI2"][2]["id"]+"</td>"+"<td>"+( 0.5 * ((data["CSI2"][2]["notes"]["DS"][0]+data["CSI2"][2]["notes"]["DS"][1])/2) + 0.5 * ((data["CSI2"][2]["notes"]["partiel"][0]+data["CSI2"][2]["notes"]["partiel"][1])/2))+"</td>";
}
function printError(xhr){
    let errorDiv = document.getElementById("errors");
    errorDiv.style.display = "inline-block";
    
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

        }
        
    };

    xhr.send();
}

document.getElementById("btn").addEventListener("click",event => {
    if(document.getElementById("CIR1").style.display == "none"){
        document.getElementById("CIR1").style.display = "inline-block";
    }
    else if (document.getElementById("CIR2").style.display == "none") {
        document.getElementById("CIR2").style.display = "inline-block";
    }
    else if (document.getElementById("CSI2").style.display == "none") {
        document.getElementById("CSI2").style.display = "inline-block";
        document.getElementById("btn").style.display = "none";
    }

})
ajaxRequest("GET","http://localhost/ComWeb/Evaluation/Ajax/etudiant.php",addEtudiant);
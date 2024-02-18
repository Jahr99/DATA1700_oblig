let billettRegister =[];
function VisBestilteBilletter() {
    //skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let p of billettRegister) {
        ut += "<tr>";
        ut += "<td>" + p.film + "</td><td>" + p.antall + "</td><td>" + p.fornavn + "</td><td>" + p.etternavn + "</td><td>" + p.telefonnr + "</td><td>" + p.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("bestilteBilletter").innerHTML = ut;
}
function KjopBillett() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const bestilling = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };

    //Legger inn feilmeldinger for tomme input-bokser
    let feilmeldingNr = 0;
    if (film == "") {
        document.getElementById("filmFeilmelding").innerHTML = "Må velge en film!";
        document.getElementById("filmFeilmelding").style.color = "red";
        feilmeldingNr++;
    } else {
        document.getElementById("filmFeilmelding").innerText = ""
    }

    if (antall == "") {
        document.getElementById("antallFeilmelding").innerHTML = "Må fylle inn antall billetter!";
        document.getElementById("antallFeilmelding").style.color = "red";
        feilmeldingNr++;
    } else {
        document.getElementById("antallFeilmelding").innerText = ""
    }

    if (fornavn == "") {
        document.getElementById("fornavnFeilmelding").innerHTML = "Må fylle inn fornavn!";
        document.getElementById("fornavnFeilmelding").style.color = "red";
        feilmeldingNr++;
    } else {
        document.getElementById("fornavnFeilmelding").innerText = ""
    }

    if (etternavn == "") {
        document.getElementById("etternavnFeilmelding").innerHTML = "Må fylle inn eternavn!";
        document.getElementById("etternavnFeilmelding").style.color = "red";
        feilmeldingNr++;
    } else {
        document.getElementById("etternavnFeilmelding").innerText = ""
    }

    if (telefonnr == "") {
        document.getElementById("telefonnrFeilmelding").innerHTML = "Må fylle inn telefonnr!";
        document.getElementById("telefonnrFeilmelding").style.color = "red";
        feilmeldingNr++;
    } else {
        document.getElementById("telefonnrFeilmelding").innerText = ""
    }

    if (epost == "") {
        document.getElementById("epostFeilmmelding").innerHTML = "Må fylle inn epost!";
        document.getElementById("epostFeilmmelding").style.color = "red";
        feilmeldingNr++;
    } else {
        document.getElementById("epostFeilmmelding").innerText = ""
    }
    if (feilmeldingNr > 0){
        return;
    }

    billettRegister.push(bestilling);
    //nullstiller inputboksene
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
    VisBestilteBilletter()
}
//Tømmer billettregisteret
function slettBilletter(){
    billettRegister=[];
    document.getElementById("bestilteBilletter").innerHTML="";

}

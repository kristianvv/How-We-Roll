let personer = [];
// Eksempel
const addPerson = (ev)=>{
    ev.preventDefault();  //Stopper html form fra å bekrefte
    let person = {
        trid: id,
        tid: str,
        navn: document.getElementById('navn').value,
        email: document.getElementById('email').value,
        alder: document.getElementById('alder').value,
        søvn: document.getElementById('mon').value,
        ankomst: document.getElementById('sos').value,
        sosialtype: document.getElementById('tre').value,
        bestjobbeplass: document.getElementById('søv').value,
        kommunikasjon: document.getElementById('kom').value,
        tidsfrist: document.getElementById('meu').value,
        løsningsorientasjon: document.getElementById('seh').value
    }
    personer.push(person);
    document.querySelector('form').reset(); //Fjerner neste entries

    //Logger visning av JSON-objekt
    console.warn('added');
    let pre = document.querySelector('#msg pre');
    pre.textContent = '' + JSON.stringify(personer, '/t', 2);
}

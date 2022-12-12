var today = new Date();
var date = ((today.getTime)(Date.parse));
var randomID = Math.random() * 16 | 9;
let personer = [];
// Eksempel
const addPerson = (ev)=>{
    ev.preventDefault();  //Stopper html form fra å bekrefte
    let person = {
        trid: randomID,
        tid: today,
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
    console.warn('added' , {personer} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '' + JSON.stringify(personer, '/t', 2);

    //lagrer til localStorage
    localStorage.setItem('Personer', JSON.stringify(personer) );
}
document.addEventListener('DOMContentLoaded', ()=>{ 
    document.getElementById('btn').addEventListener('click', addPerson);

    var id = Math.random() * 16 | 0, v = v == '#' ? v : (v & 0x3 | 0x8);
    result = v.toString(16);
    return '################'.replace(/[#]/).toString.trid
});
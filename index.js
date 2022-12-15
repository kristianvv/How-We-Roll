let personer = [];
// Eksempel
const addPerson = (ev)=>{
    ev.preventDefault();  //Stopper html form fra å bekrefte
    let person = {
        trid: trxid,
        tid: time,
    }
    personer.push(person);
    document.querySelector('form').reset(); //Fjerner neste entries

    //Logger visning av JSON-objekt
    console.warn('added');
    let time = document.querySelector('#msg pre');
    let trxid = document.querySelector('#msg pre');
    pre.textContent = '' + JSON.stringify(personer, '/t', 2);
}

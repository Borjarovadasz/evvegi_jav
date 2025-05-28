const fejarray = ["Költő neve", "Korszak neve", "Vers neve"];

const array = [
    {
        szerzonev : "",
        szerzokorszak : "",
        versek : ""
    }
]

const formarray =  [
    { 
    label: "Költő neve:", 
    id: "kolto_nev", 
    for:"kolto_nev" 
},
{
    label: "Korszak neve:", 
    id: "korszak_neve", 
    for:"korszak_neve" 
},
{
    label: "Versek vesszovel elvalasztva:", 
    id: "vers", 
    for:"vers"   
},
]
table = document.createElement('table')
table.className = "table"
tbody = document.createElement('tbody')
thead = document.createElement('thead')
tbody = document.createElement('tbody')
trcell = document.createElement('tr')
form = document.createElement('form')
for(const elem of formarray) {
    const divecske = document.createElement('div');
    divecske.style.marginBottom = "10px"; 
    const label = document.createElement('div'); 
    label.innerText = elem.label;
    const input = document.createElement('input');
    input.type = "text";
    input.id = elem.id;

    divecske.className = 'div'
    divecske.appendChild(label);
    divecske.appendChild(input);
    form.appendChild(divecske);
}


for(const elem of fejarray) {
    tdcell = document.createElement('td')
    tdcell.innerHTML = elem  
    trcell.appendChild(tdcell)
  }
thead.appendChild(trcell)
table.appendChild(thead)
table.appendChild(tbody)
document.body.appendChild(table)

gombocska = document.createElement('button')
gombocska.innerHTML = "Submit!!!!"
gombocska.className = "gomb"
form.appendChild(gombocska)
const tbody2 = document.createElement('tbody')
document.body.appendChild(tbody2)

const exportgombocska = document.createElement('button')
exportgombocska.textContent = 'Letoltés'
tbody2.appendChild(exportgombocska)
exportgombocska.addEventListener('click', () =>{
    const link = document.createElement('a')
    const contentaray = ['Szerzo;Szerzokorszak;Vers/Versek']
    for(const adat of array ) {
        contentaray.push(`${adat.szerzonev};${adat.szerzokorszak};${adat.versek}`)
    }
    const content = contentaray.join('\n')
    const file = new Blob([content])
    link.href =URL.createObjectURL(file)
    link.download = 'newdata.csv'
    link.click()
    URL.revokeObjectURL(link.href)
})

const filebeillesztes = document.createElement('input')
tbody2.appendChild(filebeillesztes); 
filebeillesztes.id = 'fileinput' 
filebeillesztes.type = 'file'; 
filebeillesztes.addEventListener('change', (e) => { 
    const file = e.target.files[0]; 
    const fileolvaso = new FileReader(); 
    fileolvaso.onload = () => { 
        const filesorok = fileolvaso.result.split('\n') 
        const fejremove = filesorok.slice(1); 
        for(const line of fejremove){ 
            const metszettvonal = line.trim();
            const mezok = metszettvonal.split(';'); 
            const adat  = { 
                szerzonev: mezok[0],
                szerzokorszak: mezok[1],
                versek: mezok[2]
            }
            array.push(adat);
            const tablerow = document.createElement('tr'); 
            tbody.appendChild(tablerow); 
            
            const nevcell = document.createElement('td'); 
            nevcell.textContent = adat.szerzonev;
            tablerow.appendChild(nevcell); 
        
            const szerzocell = document.createElement('td');
            szerzocell.textContent = adat.szerzokorszak;
            tablerow.appendChild(szerzocell); 
        
            const vercell = document.createElement('td'); 
            vercell.textContent = adat.versek; 
            tablerow.appendChild(vercell); 
        }
    }
    fileolvaso.readAsText(file); 
})


function sorhozzadas(adat) {
    const sor = document.createElement('tr');
    const nevcella = document.createElement('td');
    nevcella.textContent = adat.szerzonev;
    sor.appendChild(nevcella);

    const korszakcella = document.createElement('td');
    korszakcella.textContent = adat.szerzokorszak;
    sor.appendChild(korszakcella);

    const verscella = document.createElement('td');
    verscella.textContent = adat.versek;
    sor.appendChild(verscella);

    tbody.appendChild(sor);
}

document.body.appendChild(form)


form.addEventListener('submit', function(e) {

    e.preventDefault(); 
    koltoneve = document.getElementById("kolto_nev")
    koltokorszak = document.getElementById  ("korszak_neve")
    vers = document.getElementById("vers")
    koltonevertek = koltoneve.value
    koltokorszakertek = koltokorszak.value
    versertek = vers.value
    let valid = true

    if (versertek.split(',').length === 4){
        alert("Csak három verset írhatsz be!")
        return valid == false
    }
    if(valid == true) {
        const ujadat = {
            szerzonev: koltonevertek,
            szerzokorszak: koltokorszakertek,
            versek: versertek.replaceAll(',', '|')
            
                
        }
        array.push(ujadat)
        sorhozzadas(ujadat)
    }
    form.reset()
 

});



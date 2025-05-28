const fejarray = ["Költő neve", "Korszak neve", "Vers neve"];

const formarray = ["Kolto neve", "Korszak neve", "Versek vesszovel elvalasztva"];

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
    label.innerText = elem;
    const input = document.createElement('input');
    input.type = "text";

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




document.body.appendChild(form)



form.addEventListener('submit', function(e) {

    e.preventDefault(); 

});


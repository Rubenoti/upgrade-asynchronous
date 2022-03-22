
window.onload = () => {
    firstExercice();
}


//Parte 1.1
const firstExercice = async () => {
    const result = await fetch('https://api.agify.io?name=michael');
    const resultToJson = await result.json();
    console.log(resultToJson)
}


//Parte 2.1

const baseUrl = 'https://api.nationalize.io';

const consultar = async () => {
    const inputText = document.querySelector('input').value;
    const result = await fetch(baseUrl + '/?name=' + inputText);
    const resultToJson = await result.json();
    let { country } = resultToJson;
    country.forEach(element => {
        const namePercentil = document.createElement('p');
        const paragraphDelete = document.createElement('button')
        paragraphDelete.textContent = 'Borrar este parrafo';
        paragraphDelete.className = `${inputText}`
        paragraphDelete.addEventListener('click', () => deleteParagraph(namePercentil));
        namePercentil.textContent = inputText + ' tiene un ' + element.probability + '% de ser ' + element.country_id;
        document.body.appendChild(namePercentil)
        namePercentil.appendChild(paragraphDelete)
    });
}

const deleteParagraph = (paragraph) => {
    paragraph.remove()
}



window.onload = () => {
    characters();
}


const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => { console.log('Time out!') })
};

runTimeOut();

const runTimeOut2 = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    console.log('Time out')
}

runTimeOut2();



function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

const characters = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character');
    const json = await data.json();
    console.log(json)
}
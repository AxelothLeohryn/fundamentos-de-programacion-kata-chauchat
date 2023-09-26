const cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];

function chauchat(cargador) {
    cargador.forEach((n) => {
        console.log(n);
    })
}
//chauchat(cargador);

function chauchatReal(cargador) {
    let rng = Math.random(); // -> 0 -- 1
    if (rng <= 0.8) {                                    
        console.log('Illo, me he quedao pillá!'); 
    }
    else {
        for (let i = 1; i <= cargador.length; i++) {
            if (i % 3 !== 0) {
                console.log(cargador[i-1]);
            }
            else {
                console.log(cargador[i-1]);
                console.log(' ');
            }
        }
    }
}

chauchatReal(cargador);

const global = `Hola! `;

function testResults (form) {

    const nameString = `Tu nombre completo es: ${form.fname.value} ${form.lname.value}`;
    var juego1 = form.juego1;
    var juego2 = form.juego2;
    var juego3 = form.juego3;
    var juego4 = form.juego4;
    const array = [juego1, juego2, juego3, juego4];

    const gamesString = juegosConCheck(array);
    

    var j = 0;
    while(j < 10){
        j++;
    }

    alert (global + nameString + gamesString);
}

function juegosConCheck(array){
    var gamesString = `, los juegos que te gustan son: `;
    for (i=0;i<array.length;i++){
        if(array[i].checked){
            gamesString = gamesString  + `${array[i].value} `;
        }  
    }

    return gamesString;
}
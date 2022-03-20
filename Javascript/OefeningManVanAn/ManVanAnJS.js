const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten"
    let aantal = 0;
    let positie = tekst.indexOf("an");

    for (let i = 0; i<tekst.length;i++){

        if (positie !== -1){
            aantal++;
            positie = tekst.indexOf("an", positie +1)
        }
    }

    console.log("aantal keer:" + aantal)
}
window.addEventListener("load", setup);
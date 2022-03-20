const setup = () => {

    let button = document.getElementById("button")
    button.addEventListener("click", update)

}

const update = () => {

    let input = document.getElementById("input");
    let tekstInput = input.value;
    let tekstZonderSpaties = tekstInput.replace(/ /g,"");
    let tekstMetSpaties = omzetten(tekstZonderSpaties)
    console.log(tekstMetSpaties)

}

const omzetten = (tekstZonderSpaties) => {

    let resultaat = "";
    for (let i = 0; i<tekstZonderSpaties.length; i++){
        resultaat+= tekstZonderSpaties.charAt(i);
        resultaat += " ";
    }
    return resultaat;
}

window.addEventListener("load", setup);





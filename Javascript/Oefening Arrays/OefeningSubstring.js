const setup = () => {
}
window.addEventListener("load", setup);

const substring = () =>{
    let txtInput = document.getElementById("txtInput");
    let woord = txtInput.value;

    let substring1 = document.getElementById("cijfer1");
    let cijfer1 = substring1.value;

    let substring2 = document.getElementById("cijfer2");
    let cijfer2 = substring2.value;

    let substring = woord.substr(cijfer1, cijfer2);


    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML=substring;
}

let btnSubstring = document.getElementById("btnSubstring");
btnSubstring.addEventListener(substring);



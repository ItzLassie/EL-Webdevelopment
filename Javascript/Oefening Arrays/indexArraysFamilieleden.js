const setup = () => {
}
window.addEventListener("load", setup);

let familieleden = ['Bart', 'Berik', 'Bevert', 'Boris', 'Beros'];
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

function VoegNaamToe(naam){
    familieleden.push(naam);
    console.log(familieleden);
}
VoegNaamToe(window.prompt('Voeg een naam toe', ""));

console.log(familieleden.toString());

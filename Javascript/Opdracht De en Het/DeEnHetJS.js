const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let result = "";

    for (let i = 0; i<zin.length; i++){
        if (zin.substring(i-1, i+3) === ' de '){
            result += 'het ';
            i+=2
        }
        else {
            result += zin.substring(i, i+1);
        }
    }
    console.log(result);
}
window.addEventListener("load", setup);
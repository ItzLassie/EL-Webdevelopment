const setup = () => {

    const paragraaf = document.querySelector('p')
    paragraaf.remove();


    const para = document.createElement("p");
    const node = document.createTextNode("Good Job!");
    para.appendChild(node);
    const element = document.querySelector('body')
    element.appendChild(para);

}
window.addEventListener("load", setup);
const setup = () => {


    const button = document.createElement("button")


    const para = document.createElement("p");
    const node = document.createTextNode("create a p-element");
    para.appendChild(node);
    const element = document.querySelector('div')
    element.appendChild(para);
}
window.addEventListener("load", setup);
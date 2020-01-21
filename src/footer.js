const footer = () => {
    let content = document.querySelector('#content');

    /* Footer */
    let footer = document.createElement('footer');
    let para = document.createElement('p');
    para.textContent = 'Copyright \u00A9 Atomic Café 2020';

    footer.appendChild(para);
    
    content.appendChild(footer);
}

export default footer;
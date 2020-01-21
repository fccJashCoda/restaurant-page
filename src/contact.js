const contact = () => {
    let content = document.querySelector('#content');

        /* Contact content */
        let contactContent = document.createElement('div');
        contactContent.classList = 'container contactContent';
    
        let contactTitle = document.createElement('h1');
        contactTitle.textContent = 'Contact';
        
        let copyText1 = document.createElement('p');
        let copyText2 = document.createElement('p');
        let copyText3 = document.createElement('p');
        copyText1.textContent = 'Call us: xxx:xxx:xxxx';
        copyText2.textContent = 'Visit us: 356, Nowhere Road, Narnia';
        copyText3.textContent = 'Open 24/7';
    
        

        contactContent.appendChild(contactTitle);
        contactContent.appendChild(copyText1);
        contactContent.appendChild(copyText2);
        contactContent.appendChild(copyText3);
        content.appendChild(contactContent);
}

export default contact;
const home = () => {
        let content = document.querySelector('#content');

        /* Main content */
        let homeContent = document.createElement('div');
        homeContent.classList = 'container homeContent';
    
        let homeTitle = document.createElement('h1');
        homeTitle.textContent = 'Atomic Café';
        
        let copyText = document.createElement('p');
        copyText.textContent = 'Experience the iconic 1960\'s American style diner. ';
    
        let reservationBtn = document.createElement('button');
        reservationBtn.classList = 'btn btn-primary';
        reservationBtn.textContent = 'Reservation';

        homeContent.appendChild(homeTitle);
        homeContent.appendChild(copyText);
        homeContent.appendChild(reservationBtn);
        content.appendChild(homeContent);
}

export default home;
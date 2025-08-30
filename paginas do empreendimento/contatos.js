document.addEventListener('DOMContentLoaded', () => {
    const contactListDiv = document.getElementById('contact-list');

    // Substitua os links com suas informações
    const contactsData = [
        {
            name: 'Fale Conosco no WhatsApp',
            iconClass: 'fa-brands fa-whatsapp',
            link: 'https://wa.me/(61)98403-6278',
            className: 'whatsapp-btn'
        },
        {
            name: 'Siga no Instagram',
            iconClass: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/shoppingshopee41',
            className: 'instagram-btn'
        },
          {
            name: 'Siga no Instagram',
            iconClass: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/mariavi7741',
            className: 'instagram-btn'
        },

    ];

    function createContactButton(contact) {
        const contactButton = document.createElement('a');
        contactButton.classList.add('contact-button', contact.className);
        contactButton.href = contact.link;
        contactButton.target = '_blank';
        contactButton.rel = 'noopener noreferrer';
        
        contactButton.innerHTML = `
            <i class="${contact.iconClass}"></i>
            <span>${contact.name}</span>
        `;
        return contactButton;
    }

    contactsData.forEach(contact => {
        contactListDiv.appendChild(createContactButton(contact));
    });
});
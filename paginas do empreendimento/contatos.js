document.addEventListener('DOMContentLoaded', () => {
    const contactListDiv = document.getElementById('contact-list');
    const contactForm = document.getElementById('contact-form');

    const whatsappNumber = '5561984036278';

    const contactsData = [
        {
            name: 'Fale Conosco no WhatsApp',
            iconClass: 'fa-brands fa-whatsapp',
            link: 'https://wa.me/${whatsappNumber}',
            className: 'whatsapp-btn'
        },
        {
           name: 'Curta no Facebook',
            iconClass: 'fa-brands fa-facebook',
            link: 'https://www.facebook.com/share/16CwwCxbbi/',
            className: 'facebook-btn'
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

contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;


     const whatsappMessage = `Olá! Gostaria de falar sobre os empreendimentos.
        
Nome: ${name}
Telefone: ${phone}
Mensagem: ${message}`;

const encodedMessage = encodeURIComponent(whatsappMessage);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

window.open(whatsappLink, '_blank');
});
});

document.addEventListener('DOMContentLoaded', () => {
    const contactListDiv = document.getElementById('contact-list');

    const whatsappNumber = '5561984036278';
    const instagramUser = 'mariavi7741';
    const facebookUser = 'MariaVitoria.Corretora0';

    const contactsData = [
        {
            name: 'WhatsApp',
            iconClass: 'fa-brands fa-whatsapp',
            link: `https://wa.me/${whatsappNumber}`,
            className: 'whatsapp-btn'
        },
        {
            name: 'Instagram',
            iconClass: 'fa-brands fa-instagram',
            link: `https://www.instagram.com/${instagramUser}`,
            className: 'instagram-btn'
        },
        {
            name: 'Facebook',
            iconClass: 'fa-brands fa-facebook',
            link: `https://www.facebook.com/${facebookUser}`,
            className: 'facebook-btn'
        }
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
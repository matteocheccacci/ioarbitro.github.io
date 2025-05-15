document.addEventListener('DOMContentLoaded', function() {
    const navList = document.querySelector('.main-nav ul');
    const documentListContainer = document.querySelector('.main-content .container');

    // Dati dei documenti, organizzati per sezione
    const documentiPerSezione = {
    "Carte Federali": [
        {
            "name": "Statuto Federale FIPAV 2024",
            "link": "https://drive.google.com/file/d/1PHWNOVUOq2OqCzSI_Q1bczjI8Qx-WHBT/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        },
        {
            "name": "Regolamento e Struttura Tecnica 2023",
            "link": "https://drive.google.com/file/d/1xsaz1CXvdShbGPrpzT_yFVeT2yB07Z7a/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        },
        {
            "name": "Regolamento Affiliazione e Tesseramento 2024-2025",
            "link": "https://drive.google.com/file/d/1v7G8CtSI-aP16XQdpcFrN7wyg6_3BZgw/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        }
    ],
    "Pallavolo Indoor": [
        {
            "name": "Regole di Gioco 2021-2024 Versione 2",
            "link": "https://drive.google.com/file/d/10QgposmnGgON3i9EW0T25qfz3de9L-jS/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        },
        {
            "name": "Regole di Gioco 2021-2024 Versione 2 (con modifiche evidenziate)",
            "link": "https://drive.google.com/file/d/1cCtGd4drBn5ON4JcdTG9FVgbDa9D95vS/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        },
        {
            "name": "Casistica Ufficiale delle Regole di Gioco 2021-2024 Versione 2",
            "link": "https://drive.google.com/file/d/1Y0OFiswt4ug-mRVG_qXVFufqJHr1SjuO/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        },
        {
            "name": "Casistica Ufficiale delle Regole di Gioco 2021-2024 Versione 2 (con modifiche evidenziate)",
            "link": "https://drive.google.com/file/d/1h9WRUCeVQD6Ej8DnbrFKa_Tx6nphGNuL/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        },
        {
            "name": "Manuale del segnapunti addetto al referto cartaceo 2021-2022",
            "link": "https://drive.google.com/file/d/1qYqD_l4A5a8nExXBJDUdNhaOG_FpB9xE/view?usp=drive_link",
            "lastUpdate": "15/05/2025"
        }
    ]
};

    // Crea la navigazione principale
    if (navList && typeof pagine !== 'undefined') {
        pagine.forEach(pagina => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = pagina.link;
            linkElement.textContent = pagina.name;
            listItem.appendChild(linkElement);
            navList.appendChild(listItem);
        });
    }

    // Crea le sezioni di documenti
    for (const sezione in documentiPerSezione) {
        const sezioneData = documentiPerSezione[sezione];

        const sectionElement = document.createElement('section');
        sectionElement.classList.add('document-section');

        const containerElement = document.createElement('div');
        containerElement.classList.add('container');

        const headingElement = document.createElement('h2');
        headingElement.textContent = sezione;

        const listElement = document.createElement('ul');
        listElement.id = `document-list-${sezione.toLowerCase().replace(/\s+/g, '-')}`;

        sezioneData.forEach(doc => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = doc.link;
            linkElement.textContent = doc.name;
            const updateSpan = document.createElement('span');
            updateSpan.textContent = ` (Aggiornato il ${doc.lastUpdate})`;
            listItem.appendChild(linkElement);
            listItem.appendChild(updateSpan);
            listElement.appendChild(listItem);
        });

        containerElement.appendChild(headingElement);
        containerElement.appendChild(listElement);
        sectionElement.appendChild(containerElement);
        documentListContainer.appendChild(sectionElement);
    }
});
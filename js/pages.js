document.addEventListener('DOMContentLoaded', function() {
    const pageList = document.getElementById('page-list');
    const pages = [
        { name: "#ioarbitro", url: "index.html" },
        { name: "Documenti", url: "docs.html" },
    ];

    pages.forEach(page => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = page.name;
        link.href = page.url;
        listItem.appendChild(link);
        pageList.appendChild(listItem);
    });
});

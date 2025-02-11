// Menu functionality
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const sidebarItems = document.querySelectorAll('.sidebar-item');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    menuBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    menuBtn.style.display = 'block';
});

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('open');
        menuBtn.style.display = 'block';
    });
});

// Latest Updates Section
const mangaGrid = document.querySelector('.manga-grid');

// Sample manga data
const mangas = [
    { title: 'Bleach', chapter: 686, image: 'https://source.unsplash.com/random/400x600?manga&1' },
    { title: 'My Hero Academia', chapter: 352, image: 'https://source.unsplash.com/random/400x600?manga&2' },
    { title: 'Black Clover', chapter: 332, image: 'https://source.unsplash.com/random/400x600?manga&3' },
    { title: 'Jujutsu Kaisen', chapter: 201, image: 'https://source.unsplash.com/random/400x600?manga&4' },
    { title: 'One Punch Man', chapter: 170, image: 'https://source.unsplash.com/random/400x600?manga&5' },
    { title: 'Demon Slayer', chapter: 205, image: 'https://source.unsplash.com/random/400x600?manga&6' },
    { title: 'Tokyo Revengers', chapter: 278, image: 'https://source.unsplash.com/random/400x600?manga&7' },
    { title: 'Chainsaw Man', chapter: 131, image: 'https://source.unsplash.com/random/400x600?manga&8' },
    { title: 'Dr. Stone', chapter: 232, image: 'https://source.unsplash.com/random/400x600?manga&9' },
    { title: 'Black Cover', chapter: 332, image: 'https://source.unsplash.com/random/400x600?manga&10' },
    { title: 'Attack on Titan', chapter: 139, image: 'https://source.unsplash.com/random/400x600?manga&11' },
    { title: 'Hunter x Hunter', chapter: 390, image: 'https://source.unsplash.com/random/400x600?manga&12' }
];

// Populate manga grid
function populateMangaGrid() {
    mangaGrid.innerHTML = mangas.map(manga => `
        <div class="manga-item">
            <img src="${manga.image}" alt="${manga.title}">
            <div class="manga-info">
                <h3>${manga.title}</h3>
                <p>Cap. ${manga.chapter}</p>
            </div>
        </div>
    `).join('');
}

// Search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMangas = mangas.filter(manga => 
        manga.title.toLowerCase().includes(searchTerm)
    );
    
    mangaGrid.innerHTML = filteredMangas.map(manga => `
        <div class="manga-item">
            <img src="${manga.image}" alt="${manga.title}">
            <div class="manga-info">
                <h3>${manga.title}</h3>
                <p>Cap. ${manga.chapter}</p>
            </div>
        </div>
    `).join('');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateMangaGrid();
});
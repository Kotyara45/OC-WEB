function toggleContent(card) {
    const isActive = card.classList.contains('active');
    
    if (!isActive) {
        document.querySelectorAll('.section-card').forEach(item => {
            if (!item.classList.contains('browser-section')) {
               item.classList.remove('active');
            }
        });
    }
    
    card.classList.toggle('active');
}

function loadContent() {
    const urlBar = document.getElementById('url-bar');
    const contentDiv = document.getElementById('browser-content');
    const placeholder = document.getElementById('current-placeholder');
    let url = urlBar.value.trim();

    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }

    placeholder.textContent = 'Поточна адреса: ' + url;

    contentDiv.style.backgroundColor = '#fff9e6';

    setTimeout(() => {
        if (url.includes('google.com') || url.includes('youtube.com') || url.includes('facebook.com')) {
            contentDiv.innerHTML = `<h3>⚠️ Заблоковано політикою безпеки (X-Frame-Options)</h3><p>Ці великі ресурси забороняють вбудовування свого вмісту у сторонні сайти. Це стандартне обмеження веббезпеки.</p><p class="search-placeholder">Поточна адреса: ${url}</p>`;
            contentDiv.style.backgroundColor = '#ffe5e5'; 
        } else if (url.includes('osweb-success.com')) {
            contentDiv.innerHTML = `<h3>🎉 Успішне Завантаження OS-WEB!</h3><p>Ласкаво просимо на внутрішній ресурс. Це єдиний сайт, який можна відобразити, не порушуючи політики безпеки.</p><p class="search-placeholder">Поточна адреса: ${url}</p>`;
            contentDiv.style.backgroundColor = '#e6fff3'; 
        } else {
             contentDiv.innerHTML = `<h3>Імітація Завантаження: ${url}</h3><p>Контент успішно завантажено. Припустимо, що цей сайт дозволяє вбудовування.</p><p class="search-placeholder">Поточна адреса: ${url}</p>`;
             contentDiv.style.backgroundColor = 'white'; 
        }
    }, 1500); 
}

function navigate(direction) {
    alert(`Імітація: Навігація ${direction === 'back' ? 'назад' : 'вперед'} виконана. У реальному браузері це б спрацювало!`);
}
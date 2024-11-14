// JavaScript untuk menampilkan jam saat ini secara real-time
document.addEventListener('DOMContentLoaded', () => {
    const jamElement = document.getElementById('jam');

    // Fungsi untuk update jam
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Menambahkan 0 jika jam, menit, atau detik kurang dari 10
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        // Menggabungkan jam, menit, detik menjadi string
        const timeString = hours + ':' + minutes + ':' + seconds;

        // Update elemen dengan ID 'jam'
        jamElement.textContent = timeString;
    }

    // Update jam setiap detik
    setInterval(updateTime, 1000);
    updateTime(); // Memanggil fungsi untuk pertama kali
});

// JavaScript untuk Accordion Effect (menambahkan fitur hanya 1 yang terbuka)
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const currentlyActiveContent = document.querySelector('.accordion-content.active');

            // Jika sudah ada konten yang aktif, tutup konten tersebut
            if (currentlyActiveContent && currentlyActiveContent !== content) {
                currentlyActiveContent.classList.remove('active');
                currentlyActiveContent.style.maxHeight = '0';
            }

            // Toggle max-height untuk animasi smooth open/close
            content.classList.toggle('active');
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});
const WaktuTarget = new Date(2024,0,1,0,0,0).getTime();

const timeInterval = setInterval(function(){
    const WaktuSekarang = new Date().getTime();
    const selisihWaktu = WaktuTarget - WaktuSekarang

    const days = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
    const hours = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

    const tanggal = document.getElementById('days');
    const jam = document.getElementById('hours');
    const menit = document.getElementById('minutes');
    const detik = document.getElementById('second');

    tanggal.innerHTML = days;
    jam.innerHTML = hours;
    menit.innerHTML = minutes;
    detik.innerHTML = seconds;
})

const a = document.querySelectorAll('#nav ul li a');

a.forEach(function(content){
    content.addEventListener('click', function(e) {
        e.preventDefault();

        const href = content.getAttribute('href').substring(1);
        
        const section = document.getElementById(href);

        if (section) {
            section.scrollIntoView({behavior : "smooth"})
        }
    })
})
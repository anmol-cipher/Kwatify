document.addEventListener('DOMContentLoaded', () => {
    const masterPlay = document.getElementById('masterPlay');
    const wave = document.getElementById('wave');
    const pop_song_left = document.getElementById('pop_song_left');
    const pop_song_right = document.getElementById('pop_song_right');
    const pop_song = document.querySelector('.pop_song');
    const pop_art_left = document.getElementById('pop_art_left');
    const pop_art_right = document.getElementById('pop_art_right');
    const Artists_bx = document.querySelector('.Artists_bx');
    const volumeControl = document.getElementById("volume");
    const currentCover = document.getElementById('poster_master_play');
    const songNameElement = document.getElementById('title');
    const playbar = document.getElementById('playbar');
    const currentTimeElement = document.getElementById("currentStart");
    const durationElement = document.getElementById("currentEnd");
    const vol_icon = document.getElementById('vol_icon');

    const songs = [
        { name: 'Cut Me Off', artist: 'BoA', file: 'cut_me_off.mp3' },
        { name: 'Illusion', artist: 'aespa', file: 'illusion.mp3' },
        { name: 'Fact Check', artist: 'NCT 127', file: 'fact_check.mp3' },
        { name: 'Poison', artist: 'NCT DREAM', file: 'poison.mp3'},
        { name: 'Tu Hai Kahan', artist: 'AUR', file: 'tu_hai_kahan.mp3'},
        { name: 'Aam Jehe Munde', artist: 'Parmish Verma', file: 'aam_munde.mp3'},
        { name: 'Cheques', artist: 'Shubh', file: 'cheques.mp3'},
        { name: 'Fully Loaded', artist: 'Tegi Pannu', file: 'fully_loaded.mp3'},
        { name: 'Gangsta', artist: 'Karan Aujla', file: 'gangsta.mp3'},
        { name: 'Levels', artist: 'Sidhu Moosewala', file: 'levels.mp3'},
        { name: 'Same Beef', artist: 'Sidhu Moosewala', file: 'same_beef.mp3'},
        { name: 'Still Rollin', artist: 'Shubh', file: 'still_rollin.mp3'},
        { name: 'We Rollin', artist: 'Shubh', file: 'we_rollin.mp3'},
        { name: 'Thaa', artist: 'Varinder Brar', file: 'thaa.mp3'},
        { name: 'On Top', artist: 'Karan Aujla', file: 'on_top.mp3'},
        { name: 'Affair', artist: 'Elly Manget', file: 'affair.mp3'},
        { name: 'Akhar', artist: 'Amrinder Gill', file: 'akhar.mp3'},
        { name: 'Apna Bna Le', artist: 'Arijit Singh', file: 'apna_bna_le.mp3'},
        { name: 'Aukaat', artist: 'Jassie Gill', file: 'aukaat.mp3'},
        { name: 'Brown Rang', artist: 'Yo Yo Honey Singh', file: 'brown_rang.mp3'},
        { name: 'Hass Hass', artist: 'Diljit Dosanjh', file: 'hass_hass.mp3'},
        { name: 'Heat Waves', artist: 'Glass Animals', file: 'heat_waves.mp3'},
        { name: 'Heeriye', artist: 'Arijit Singh', file: 'heeriye.mp3'},
        { name: 'Kesariya', artist: 'Arijit Singh', file: 'kesariya.mp3'},
        { name: 'Let Me Down Slowly', artist: 'Alec Benjamin', file: 'let_me_down_slowly.mp3'},
        { name: 'Mahiye Jinna Sohna', artist: 'Darshan Raval', file: 'mahiye_jinna_sohna.mp3'},
        { name: 'Mi Amor', artist: 'Sharn', file: 'mi_amor.mp3'},
        { name: 'Never Fold', artist: 'Sidhu Moosewala', file: 'never_fold.mp3'},
        { name: 'Night Changes', artist: 'One Direction', file: 'night_changes.mp3'},
        { name: 'One Love', artist: 'Shubh', file: 'one_love.mp3'},
        { name: 'Raabta', artist: 'Arijit Singh', file: 'raabta.mp3'},
        { name: 'Shes The One', artist: 'Jerry', file: 'shes_the_one.mp3'},
        { name: 'Sniff', artist: 'Elly Manget', file: 'sniff.mp3'},
        { name: 'Tareefan', artist: 'Jordan Snadhu', file: 'tareefan.mp3'},
        { name: '25-25', artist: 'Arjan Dhillon', file: '25-25.mp3'},
        { name: 'Brown Munde', artist: 'AP Dhillon', file: 'brown_munde.mp3'},
        { name: 'Backbone', artist: 'Hardy Sandhu', file: 'backbone.mp3'},
        { name: 'Under the Influence', artist: 'Chris Brown', file: 'under_the_influence.mp3'},
        { name: 'Spain', artist: 'Jassa Dhillonn', file: 'spain.mp3'},
        { name: 'Into Your Arms', artist: 'Ava Max', file: 'into_your_arms.mp3'},
        
    ];

    const popsongs = [
        { name: 'Tu Hai Kahan', artist: 'AUR', file: 'tu_hai_kahan.mp3'},
        { name: 'Mi Amor', artist: 'Sharn', file: 'mi_amor.mp3'},
        { name: 'Akhar', artist: 'Amrinder Gill', file: 'akhar.mp3'},
        { name: 'Illusion', artist: 'aespa', file: 'illusion.mp3' },
        { name: 'Heat Waves', artist: 'Glass Animals', file: 'heat_waves.mp3'},
        { name: 'Shes The One', artist: 'Jerry', file: 'shes_the_one.mp3'},
        { name: 'Aukaat', artist: 'Jassie Gill', file: 'aukaat.mp3'},
        { name: 'Cheques', artist: 'Shubh', file: 'cheques.mp3'},
        { name: 'Affair', artist: 'Elly Manget', file: 'affair.mp3'},
        { name: 'Into Your Arms', artist: 'Ava Max', file: 'into_your_arms.mp3'},
        { name: 'Under the Influence', artist: 'Chris Brown', file: 'under_the_influence.mp3'},
        { name: 'Mahiye Jinna Sohna', artist: 'Darshan Raval', file: 'mahiye_jinna_sohna.mp3'},
        { name: 'Apna Bna Le', artist: 'Arijit Singh', file: 'apna_bna_le.mp3'},
        { name: 'Still Rollin', artist: 'Shubh', file: 'still_rollin.mp3'},
        { name: 'Aam Jehe Munde', artist: 'Parmish Verma', file: 'aam_munde.mp3'},
        { name: 'Sniff', artist: 'Elly Manget', file: 'sniff.mp3'},
    ];

    const pop_artists = [
        { image: 'taylor_swift.jpeg', forsearch: 'taylor+swift' },
        { image: 'sidhu_moosewala.jpeg', forsearch: 'sidhu+moose' },
        { image: 'karan_aujla.jpeg', forsearch: 'karan+aujla' },
        { image: 'kumar_sanu.jpeg', forsearch: 'kumar+sanu' },
        { image: 'shubh.jpeg', forsearch: 'shubh' },
        { image: 'ap_dhillon.jpeg', forsearch: 'ap+dhillon' },
        { image: 'parmish_verma.jpeg', forsearch: 'parmish+verma' },
        { image: 'shreya_ghoshal.jpeg', forsearch: 'shreya+ghoshal' },
        { image: 'alka_yagnik.jpeg', forsearch: 'alka+yagnik' },
        { image: 'arjan_dhillon.jpeg', forsearch: 'arjan+dhillon' },
        { image: 'ammy_virk.jpeg', forsearch: 'ammy+virk' },
        { image: 'diljit_dosanjh.jpeg', forsearch: 'diljit+dosanjh' },
        { image: 'arijit_singh.jpeg', forsearch: 'arijit+singh' },
        { image: 'darshan_raval.jpeg', forsearch: 'darshan+raval' },
    ]

    var audioPlayer = new Audio();

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('songitem');
        li.setAttribute('data-songfile', song.file);
        li.innerHTML = `<span>${index + 1}</span>
            <img src="./images/all_songs/${song.file.replace('.mp3', '.jpeg')}">
            <h5 class="abcd">${song.name}<br><div class="subtitle">${song.artist}</div></h5>
            <i class="bi playListplay bi-play-circle-fill"></i>`;
        document.getElementById('menu_songs').appendChild(li);
    });

    // Load Popular Songs
    popsongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('songitem');
        li.setAttribute('data-songfile', song.file);
        li.innerHTML = `<div class="img_play">
            <img src="./images/pop_songs/${song.file.replace('.mp3', '.jpeg')}">
            <i class="bi playListplay bi-play-circle-fill"></i>
        </div>
        <h5>${song.name}<br><div class="subtitle">${song.artist}</div></h5>`;
        document.getElementById('pop_songs').appendChild(li);
    });

    // Load Popular Artists
    pop_artists.forEach(artist => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="images/artists/${artist.image}" data-artist-name="${artist.forsearch}">`;
        document.getElementById('popartists').appendChild(li);
    });

    // Song Click Event
    document.querySelectorAll('.songitem').forEach(songItem => {
        songItem.addEventListener('click', () => {
            playSong(songItem);
        });
    });

    function playSong(songItem) {
        const songFile = songItem.getAttribute('data-songfile');
        const songData = songs.find(s => s.file === songFile);

        audioPlayer.src = `./songs/${songData.file}`;
        audioPlayer.play();

        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        wave.classList.add('active2');

        currentCover.src = `./images/all_songs/${songData.file.replace('.mp3', '.jpeg')}`;
        songNameElement.innerHTML = `${songData.name}<div class="subtitle">${songData.artist}</div>`;

        updatePlaybar(0, audioPlayer.duration);

        audioPlayer.addEventListener('timeupdate', () => {
            updatePlaybar(audioPlayer.currentTime, audioPlayer.duration);
        });

        audioPlayer.addEventListener('ended', () => {
            const currentIndex = songs.findIndex(s => s.file === songData.file);
            const nextIndex = (currentIndex + 1) % songs.length;
            const nextSongItem = document.querySelector(`[data-songfile="${songs[nextIndex].file}"]`);
            playSong(nextSongItem);
        });
    }

    masterPlay.addEventListener('click', () => {
        if(audioPlayer.paused || audioPlayer.currentTime <= 0){
            audioPlayer.play();
            masterPlay.classList.add('bi-pause-fill');
            masterPlay.classList.remove('bi-play-fill');
            wave.classList.add('active2');
        } else {
            audioPlayer.pause();
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        }
    });

    function updatePlaybar(current, duration){
        let progress = (current / duration) * 100;
        playbar.style.width = progress + '%';

        // Update time text
        let curMinutes = Math.floor(current / 60);
        let curSeconds = Math.floor(current % 60);
        let durMinutes = Math.floor(duration / 60);
        let durSeconds = Math.floor(duration % 60);

        currentTimeElement.textContent = `${curMinutes}:${curSeconds < 10 ? '0'+curSeconds : curSeconds}`;
        durationElement.textContent = `${durMinutes}:${durSeconds < 10 ? '0'+durSeconds : durSeconds}`;
    }

    // Volume Control
    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
        if(volumeControl.value == 0){
            vol_icon.className = "bi bi-volume-mute-fill";
        } else if(volumeControl.value <= 0.5){
            vol_icon.className = "bi bi-volume-down-fill";
        } else {
            vol_icon.className = "bi bi-volume-up-fill";
        }
    });

    // Playbar click to seek
    document.getElementById("playbar-container").addEventListener("click", function(e) {
        const clickPosition = e.clientX - this.getBoundingClientRect().left;
        const percentage = (clickPosition / this.offsetWidth);
        const newTime = percentage * audioPlayer.duration;

        audioPlayer.currentTime = newTime;
        updatePlaybar(newTime, audioPlayer.duration);
    });
});
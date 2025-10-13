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

    function loadHTMLContent_for_menu(counter) {
        var htmlContent = '<li class="songitem" data-songfile="' + songs[counter].file + '"><span>' + (counter + 1) + '</span><img src="./images/all_songs/' + songs[counter].file.replace('.mp3', '.jpeg') + '"><h5 class="abcd">' + songs[counter].name + '<br><div class="subtitle">' + songs[counter].artist + '</div></h5><i class="bi playListplay bi-play-circle-fill" id="1"></i></li>';

        var targetUl = document.getElementById('menu_songs');
        targetUl.innerHTML += htmlContent;
    }

    for (var i = 0; i < songs.length; i++) {
        loadHTMLContent_for_menu(i);
    }

    function loadHTMLContent_for_pop(counter) {
        var htmlContent = '<li class="songitem" data-songfile="' + popsongs[counter].file + '"><div class="img_play"><img src="./images/pop_songs/' + popsongs[counter].file.replace('.mp3', '.jpeg') + '"><i class="bi playListplay bi-play-circle-fill" id="13"></i></div><h5>' + popsongs[counter].name + '<br><div class="subtitle">' + popsongs[counter].artist + '</div></h5></li>';

        var targetUl = document.getElementById('pop_songs');
        targetUl.innerHTML += htmlContent;
    }

    for (var i = 0; i < popsongs.length; i++) {
        loadHTMLContent_for_pop(i);
    }

    function loadHTMLContent_for_artist(counter) {
        var htmlContent = '<li><img src="images/artists/' + pop_artists[counter].image + '" data-artist-name="' + pop_artists[counter].forsearch + '"></li>';
    
        var targetUl = document.getElementById('popartists');
        targetUl.innerHTML += htmlContent;
    }
    
    for (var i = 0; i < pop_artists.length; i++) {
        loadHTMLContent_for_artist(i);
    }

    var songItems = document.querySelectorAll('.songitem');
    songItems.forEach(function (songItem) {
        songItem.addEventListener('click', function () {
            var songFile = this.getAttribute('data-songfile');
            playSong(songItem);
        });
    });

    var artistImages = document.querySelectorAll('#popartists li img');
artistImages.forEach(function (image) {
    image.addEventListener('click', function () {
        var artistName = this.getAttribute('data-artist-name');
        openGoogleSearch(artistName);
    });
});

function openGoogleSearch(artistName) {
    var searchQuery = 'https://www.google.com/search?q=' + artistName;
    window.open(searchQuery, '_blank');
}

    function playSong(song) {
        audioPlayer.src = `songs/${song.getAttribute('data-songfile')}`;
        audioPlayer.play();
        masterPlay.classList.toggle('bi-play-fill', false);
        masterPlay.classList.toggle('bi-pause-fill', true);
        updateNowPlayingInfo(song.getAttribute('data-songfile'));
    
        audioPlayer.addEventListener('ended', function () {
            updatePlaybar(0, audioPlayer.duration);
            updateNowPlayingInfo(songs[(songs.indexOf(song) + 1) % songs.length]);
        });

        // Update playbar and time markers during playback
        audioPlayer.addEventListener('timeupdate', function () {
            updatePlaybar(audioPlayer.currentTime, audioPlayer.duration);
        });
    }

    function getSongByFile(file) {
        const foundSong = songs.find(song => song.file === file);
    
        if (foundSong) {
            return foundSong.name
        } else {
            return null;
    }}

    function getArtistByFile(file) {
        const foundSong = songs.find(song => song.file === file);
    
        if (foundSong) {
            return foundSong.artist
        } else {
            return null;
    }}
    
    function updateNowPlayingInfo(file) {
        currentCover.src = `images/all_songs/${file.replace('.mp3', '.jpeg')}`;
        songNameElement.innerHTML = getSongByFile(file)+'<div class="subtitle" id="master_play_artist">'+getArtistByFile(file)+'</div>';
    }

    masterPlay.addEventListener('click', togglePlay);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        togglePlay();
    }
});

function togglePlay() {
    if (audioPlayer.paused || audioPlayer.currentTime <= 0) {
        audioPlayer.play();
        wave.classList.add('active1');
        masterPlay.classList.toggle('bi-play-fill', false);
        masterPlay.classList.toggle('bi-pause-fill', true);
    } else {
        audioPlayer.pause();
        wave.classList.remove('active1');
        masterPlay.classList.toggle('bi-play-fill', true);
        masterPlay.classList.toggle('bi-pause-fill', false);
    }
}

    pop_song_right.addEventListener('click', () => {
        pop_song.scrollLeft += 330;
    });

    pop_song_left.addEventListener('click', () => {
        pop_song.scrollLeft -= 330;
    });

    pop_art_right.addEventListener('click', () => {
        Artists_bx.scrollLeft += 330;
    });

    pop_art_left.addEventListener('click', () => {
        Artists_bx.scrollLeft -= 330;
    });

    let isMuted = false;

    volumeControl.addEventListener("input", function() {
        audioPlayer.volume = this.value;
    });

    vol_icon.addEventListener('click', toggleMute);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'm' || e.key === 'M') {
            toggleMute();
        }
    });

    function toggleMute() {
        if (isMuted) {
            audioPlayer.volume = 0.5;
            volumeControl.value = 0.5;
        } else {
            audioPlayer.volume = 0;
            volumeControl.value = 0;
        }
        isMuted = !isMuted;
        updateVolumeIcon();
    };
    
    function updateVolumeIcon() {
        vol_icon.classList.toggle('mute', isMuted);
    };

    updateVolumeIcon();

    playbar.addEventListener("click", function(e) {
        const clickPosition = e.clientX - this.getBoundingClientRect().left;
        const percentage = (clickPosition / this.offsetWidth);
        const newTime = percentage * audioPlayer.duration;
        
        audioPlayer.currentTime = newTime;
        updatePlaybar(newTime, audioPlayer.duration);
    });

    function updatePlaybar(currentTime, duration) {
        const percentage = (currentTime / duration) * 100;
        playbar.style.width = `${percentage}%`;
    
        // Update time markers
        const currentTimeMinutes = Math.floor(currentTime / 60);
        const currentTimeSeconds = Math.floor(currentTime % 60);
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
    
        // Check for valid values before updating the time markers
        if (!isNaN(currentTimeMinutes) && !isNaN(currentTimeSeconds) && !isNaN(durationMinutes) && !isNaN(durationSeconds)) {
            currentTimeElement.textContent = `${formatTime(currentTimeMinutes)}:${formatTime(currentTimeSeconds)}`;
            durationElement.textContent = `${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
        }
    }

    function formatTime(value) {
        return value < 10 ? `0${value}` : `${value}`;
    }
});

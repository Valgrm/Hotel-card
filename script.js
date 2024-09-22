document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const info = document.querySelector('.info');
    const titlebg = document.querySelector('.titlebg');
    const favorite = document.querySelector('.favorite');
    const offers = document.querySelector('.offers');
    const amenities = document.querySelector('.amenities');
    const calendar = document.querySelector('.calendar');
    const reserve = document.querySelector('.reserve-container');
    const reserveBtn = document.querySelector('.reserve');
    const whitebg = document.querySelector('.whitebg');
    const reservep = document.querySelector('.reservep');
    const white = document.querySelectorAll('.white');

    if (titlebg) {
        card.addEventListener('click', function() {
            // Toggle de la classe .titlebg-click
            titlebg.classList.toggle('titlebg-click');
            favorite.classList.toggle('favorite-click');
            offers.classList.toggle('offers-click');
            amenities.classList.toggle('amenities-click');
            calendar.classList.toggle('calendar-click');
            reserveBtn.classList.toggle('reserve-click');
            info.classList.toggle('info-click');
            reserve.classList.toggle('reserve-container-click');
            whitebg.classList.toggle('whitebgtrue');
            reservep.classList.toggle('reservep-click');

            white.forEach(function(white) {
                white.classList.toggle('whitetrue');
            });

            if (offers.classList.contains('display-none')) {
                favorite.classList.remove('display-none');
                favorite.classList.add('display-flex');

                offers.classList.remove('display-none');
                offers.classList.add('display-flex');

                amenities.classList.remove('display-none');
                amenities.classList.add('display-flex');

                calendar.classList.remove('display-none');
                calendar.classList.add('display-flex');
            } else {
                setTimeout(function() {
                    favorite.classList.remove('display-flex');
                    favorite.classList.add('display-none');

                    offers.classList.remove('display-flex');
                    offers.classList.add('display-none');

                    amenities.classList.remove('display-flex');
                    amenities.classList.add('display-none');

                    calendar.classList.remove('display-flex');
                    calendar.classList.add('display-none');
                }, 200);
            }
        });
    } else {
        console.error('L\'élément .titlebg est introuvable.');
    }

    card.addEventListener('mouseleave', function() {
        if (offers.classList.contains('offers-click')) {
            titlebg.classList.remove('titlebg-click');
            favorite.classList.remove('favorite-click');
            offers.classList.remove('offers-click');
            amenities.classList.remove('amenities-click');
            calendar.classList.remove('calendar-click');
            reserveBtn.classList.remove('reserve-click');
            info.classList.remove('info-click');
            reserve.classList.remove('reserve-container-click');
            whitebg.classList.remove('whitebgtrue');
            reservep.classList.remove('reservep-click');

            white.forEach(function(white) {
                white.classList.remove('whitetrue');
            });

            setTimeout(function() {
                favorite.classList.remove('display-flex');
                favorite.classList.add('display-none');

                offers.classList.remove('display-flex');
                offers.classList.add('display-none');

                amenities.classList.remove('display-flex');
                amenities.classList.add('display-none');

                calendar.classList.remove('display-flex');
                calendar.classList.add('display-none');
            }, 200);
        }
    });
});

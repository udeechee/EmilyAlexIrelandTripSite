/**
 * main.js — Site-wide JavaScript
 *
 * Add trip countdown timers, interactive map hooks,
 * local-storage for packing checklist state, etc. here.
 */
(function () {
    'use strict';

    // --- Countdown (enable once trip dates are set) ---
    // Example: set the departure date and uncomment.
    // const tripDate = new Date('2026-10-01T00:00:00');
    // const countdownEl = document.getElementById('countdown');
    // if (countdownEl) {
    //     function updateCountdown() {
    //         const now = new Date();
    //         const diff = tripDate - now;
    //         if (diff <= 0) { countdownEl.textContent = "We're there!"; return; }
    //         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //         countdownEl.textContent = days + ' days to go!';
    //     }
    //     updateCountdown();
    //     setInterval(updateCountdown, 60000);
    // }

    // --- Shuffle invitee cards ---
    var grid = document.querySelector('.invitees-grid');
    if (grid) {
        var cards = Array.from(grid.children);
        for (var i = cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            grid.appendChild(cards[j]);
            cards[j] = cards[i];
        }
    }

    // --- Packing list persistence ---
    // Saves checkbox state to localStorage so it survives page reloads.
    document.querySelectorAll('.checklist input[type="checkbox"]').forEach(function (cb, i) {
        var key = 'packing-' + i;
        cb.checked = localStorage.getItem(key) === 'true';
        cb.addEventListener('change', function () {
            localStorage.setItem(key, cb.checked);
        });
    });
})();

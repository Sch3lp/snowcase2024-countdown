
## Countdown til Snowcase 2022!

<script src="{{ site.baseurl }}/js/bundle.js"></script>

<script>
var timerId =
    countdown(
        function (ts) {
            document.getElementById('countdown-til-snowcase').innerHTML = ts.toHTML("strong");
        },
        new Date(2024,2,9),
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

// later on this timer may be stopped
// window.clearInterval(timerId);
</script>

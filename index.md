
## Countdown til Snowcase 2022!

<script src="https://raw.githubusercontent.com/mckamey/countdownjs/master/countdown.min.js" type="text/javascript"></script>
<div id="pageTimer"></div>

<script>
var timerId =
    countdown(
        function (ts) {
            document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
        },
        new Date(2022,2,5),
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

// later on this timer may be stopped
// window.clearInterval(timerId);
</script>

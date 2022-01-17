
## pagetimer

<script src="{{ site.baseurl }}/js/bundle.js"></script>

<script>
var timerId =
    countdown(
        function (ts) {
            document.getElementById('pagetimer').innerHTML = ts.toHTML("strong");
        },
        new Date(2022,2,5),
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

// later on this timer may be stopped
// window.clearInterval(timerId);
</script>

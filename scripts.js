window.addEventListener('load', function () {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        document.getElementById("rwl").innerHTML = "<p>rwl</p>";

    } else {
        //whatever
    }
})
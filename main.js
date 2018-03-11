    // Get modal
    var modal = document.getElementById('myModal');

    // Button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the element that closes modal
    var span = document.getElementsByClassName("close")[0];

    // When clicked, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When clicks on x, close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

document.addEventListener("DOMContentLoaded", function() {

    //Generate elements
    const redCircle = document.createElement("div");
    redCircle.setAttribute("id", "red-circle");
    document.body.appendChild(redCircle);

    const blueCircle = document.createElement("div");
    blueCircle.setAttribute("id", "blue-circle");
    document.body.appendChild(blueCircle);

    const yellowCircle = document.createElement("div");
    yellowCircle.setAttribute("id", "yellow-circle");
    document.body.appendChild(yellowCircle);

    //Generate element style
    const style = document.createElement('style');

    style.textContent = `
        .circle {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        float: left;
        margin-right: 50px;
        }
        #red-circle {
            background-color: red;
        }
        #blue-circle {
            background-color: blue;
        }
        #yellow-circle {
            background-color: yellow;
        }
    `;

    document.head.appendChild(style);

    //Add style to elements
    redCircle.classList.add("circle");
    blueCircle.classList.add("circle");
    yellowCircle.classList.add("circle");


    //Inserting functions
    document.getElementById("red-circle").onclick = function () {
        document.getElementById("red-circle").style.display = "none";
    };

    document.getElementById("yellow-circle").onclick = function () {
        document.getElementById("yellow-circle").style.display = "none";
    };

    document.getElementById("blue-circle").onclick = function () {
        document.getElementById("blue-circle").style.display = "none";
    };

    //Making circle visible again (press Ctrl)
    window.onkeydown = function (event) {
        if (event.ctrlKey) {
            document.getElementById("red-circle").style.display =
                "block";
            document.getElementById("yellow-circle").style.display =
                "block";
            document.getElementById("blue-circle").style.display =
                "block";
        }
    };
});
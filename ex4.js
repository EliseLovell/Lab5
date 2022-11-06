function editPage(){
        let ph = document.getElementById("p");
        let borderR = document.getElementById("borderRed").value;
        let borderG = document.getElementById("borderGreen").value;
        let borderB = document.getElementById("borderBlue").value;
        let borderW = document.getElementById('borderWidth').value;
        var backgroundR = document.getElementById("backgroundRed").value;
        var backgroundG = document.getElementById("backgroundGreen").value;
        var backgroundB = document.getElementById("backgroundBlue").value;
        ph.style.borderWidth = borderW;
        ph.style.borderColor = 'rgb('+borderR+','+borderG+','+borderB+')';
        ph.style.backgroundColor = 'rgb('+backgroundR+','+backgroundG+','+backgroundB+')';
}

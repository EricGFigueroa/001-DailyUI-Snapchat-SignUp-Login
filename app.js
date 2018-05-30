var trigger = document.getElementsByClassName('input-trigger')
for (var i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener("input", addListener);
}

function addListener() {
    var labels = this.parentNode.childNodes;
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].className == 'input-validate') {
            if (this.value === '') {
                labels[i].style.color = "#b9c0c8";
            } else {
                labels[i].style.color = "#98589e";
            }
        }
    }
}
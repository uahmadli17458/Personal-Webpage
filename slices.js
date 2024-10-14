function printSlices(word) {

    for (let i = 1; i < word.length; i++) {
        alert(word.slice(0, i) + "_" + word.slice(i));
    }
}

printSlices("SITE");

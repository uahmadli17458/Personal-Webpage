function explodedString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str.slice(0, i + 1);
    }

    alert(result);  
}

explodedString("Baku");

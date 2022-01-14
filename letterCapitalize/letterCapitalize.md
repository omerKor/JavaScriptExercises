script>
    
    function letterCapitalize(str) {
    var phrase = str.split('');
    
    for (i = 0; i < phrase.length; i++) {
        if (i == 0) {
            phrase[i] = phrase[i].toUpperCase();
        }
        else if (phrase[i] == ' ') {
            if (i + 1 < phrase.length) phrase[i + 1] = phrase[i + 1].toUpperCase();
        }
    }
    
    return phrase.join('');
}

letterCapitalize("hello word");

</script>


function vowelsCount(string) {    
    const vowels = "aeiou";
    let reduced = '';

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) {
            reduced += string[i]
        }
    }
    
    return reduced.length || 0;
}
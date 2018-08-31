function interleave() {    
    let args = Array.from(arguments);
    let output = '';
    let longest = 0;
    let i, j;

    for (i = 0; i < args.length; i++) {
        if (args[i].length > longest) longest = args[i].length;
    }

    for (i = 0; i < longest; i++) {
        for (j = 0; j < args.length; j++) {
            output += args[j][i] || '';
        }
    }
    return output;
}
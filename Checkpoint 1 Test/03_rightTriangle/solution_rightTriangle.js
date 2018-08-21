function rightTriangle(num) {
    let triangleString = "";

    for (let i=0; i<num; i++){
        triangleString += "*".repeat(num-i)
        if (i < num-1) triangleString += "\n";
    }
    return triangleString;
}
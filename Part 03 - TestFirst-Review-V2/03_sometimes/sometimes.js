function sometimes(func) {

    let counter = 0;

    function call3() {
        counter++;

        if (counter < 4 || counter % 2 === 1){

            // notice here that arguments relates to the func object being passed in!
            return func.apply(null, arguments);
            
        } else {
            return 'I do not know!';
        }

    }

    return call3;
}

( () => {
    const addNumber = ( a:number, b:number ): number =>  a + b;
    const greet = ( name: string ): string =>  `Hola ${ name }`;
    const saveTheWord = ():string => `El mundo esta salvado`;

    // let myFunction: ( y:string ) => string;
    let myFunction;

    //! myFunction = 10;
    //! console.log(myFunction);

    myFunction = addNumber;
    console.log(myFunction);

    myFunction = greet;
    console.log(myFunction);

    myFunction = saveTheWord;
    console.log(myFunction);

})()
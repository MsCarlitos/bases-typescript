( ()=> {

    interface AddTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbesFunction: AddTwoNumbers;
    addNumbesFunction = (a:number, b:number) => {
        return a + b;
    }

})();
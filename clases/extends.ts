(()=> {

    class Avenger {
        constructor(
            public name:string,
            public realName: string,
        ) {
            console.log('Constructur avenger llamado');
        }

        protected getFullName() {
            console.log(`${ this.name } ${ this.realName }`);
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ) {
            super(name, realName);
            console.log('Constructor Xmen llamado');
        }

        get fullname() {
            return `${ this.name } ${ this.realName }`;
        }

        set fullname( name: string ) {
            this.name = name;
        }

        getFullnameDesdeXmen() {
            console.log( super.getFullName() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    wolverine.getFullnameDesdeXmen();
    console.log( wolverine.fullname );
    console.log( wolverine.fullname = 'logan' );

})();
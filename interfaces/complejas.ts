(()=> {

    interface Client{
        name:string;
        age?: number;
        address: Address;
        getFullAddress(id: Address):void;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    const client: Client = {
        name:'Carlos',
        age: 27,
        address:{
            id:125,
            zip: 'KY2 SUD',
            city:'Ottawa'
        },
        getFullAddress() {
            return this.address.city;
        }
    }

})()
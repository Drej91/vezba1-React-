import React, { Component } from 'react';
import { users } from '../data/users';

// const users = [
//     { id: 1, name: "Milos", active: true },
//     { id: 2, name: "Vuk", active: true },
//     { id: 3, name: "Banos", active: true },
//     { id: 4, name: "Nedjo", active: true },
//     { id: 5, name: "Sojba", active: false },
//     { id: 6, name: "Filip", active: true },
//     { id: 7, name: "Nenad", active: true },
//     { id: 8, name: "Martin", active: false },
//     { id: 9, name: "Kontic", active: true },
//     { id: 10, name: "Djedo", active: false },
//   ];


// todo -> navikavaj se da koristis engleski


export default class HomePage extends Component {
    // constructor ti ne treba iskreno kad vec korstis arrow funkcije
    // searchValue ti je vredost koju uzimas iz inputa u Searchu
    state = {
        searchValue: '',
        customers: users
    }

    // ovo je dobro
    handleChange = event => {
        this.setState({ searchValue: event.target.value })
    }
    
    findUser = () => {
        // imamo vredost u inputu searchValue
        // imam i customers listu (nazvao sam je customers eto onako) u kojoj to treba da nadjemo - customera po imenu
        const filttredCustomers = this.state.customers.filter(customer => {
           // znaci filtriramo listu  
           if (customer.name.includes(this.state.searchValue)) {
            return customer;
           }
           // ovim gore ces da vratis korisnike u cijem imenu se sadrzi vrednost iz searchValue-a
           // includes je built in metoda u JS-u -> vraca true / false
           // filter i map uvek vracaju listu da znas - u ovom slucaju tu filtriranu novu listu sam stavio u promenljivu...
           // i postavio je na mesto customers...
           // i onda ce u renderu da se izrenderuje nova ta lista
           // setState uvek okida render metodu u komponenti...
           this.setState({
            customers: filttredCustomers
           });
        });
    }

    render() {
         return (
            <div>
                <label>Search box</label>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                />
                // ovde mozes da dodas npr da ne moze da se klikne - stavis button umesto spana... pa disabled itd...
                // findUser ukoliko searchValue je ''
                // msm ono kao nema potrebe svakako ce da vrati celu listu
                <span onClick={this.findUser}>FIND</span>
                <div>
                    {this.state.customers.map(customer => (
                            <div key={customer.id}>
                                <h1>{customer.name}</h1>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}
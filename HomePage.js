import React from 'react';
import { users } from '../data/users';

// const korisnici = [
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

const  korisnici = users ;
console.log(korisnici)
  


export default class HomePage extends React.Component{
    constructor(){
        super();
            this.state = {
            pojam: '',
            podaci: korisnici,
            pronadjeniPodaci: []
        };
           
    };

    handleChange = (event) => {
        this.setState({pojam: event.target.value})
    }
    //ovu funkciju bih pozvao na dugme, da se na taj nacin trazi korisnik ili ne?
    //tek zapoceto
    findUser = () => {
        if(this.state.pojam === this.podaci.map(korisnik => korisnik.name)){
            return pronadjeniPodaci
        }
    }
    render(){
     
         return(
            <div>
                <p>{this.state.pojam}</p>
                <label>Search box</label>
                <input
                type="text"
                placeholder="Search"
                value={this.state.value}
                onChange={this.handleChange}

                />
    

                    {
                     this.state.podaci.map(korisnik => 
                             (
                                <div key={korisnik.id}>
                                <h1>{korisnik.name}</h1>
                                </div>
                            )
                        )
                    }
                 </div>
                //ovde gore sam vezbao map()
                
        );
    }
}
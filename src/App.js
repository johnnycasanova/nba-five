import React, {Component} from 'react';
import CardList from './CardList';
import {players} from './players';
import SearchBox from './SearchBox'



class App extends Component{

    constructor() {
        super()
        this.state = {
            players: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        this.setState({players: players})
    }

    onSearchChange =(event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredPlayers = this.state.players.filter(players => {
            return players.full_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
            <div>
                <div className="tc"> 
                    <h1>All NBA Players</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <CardList players={filteredPlayers}/>
            </div>
        );
    }

}

export default App;
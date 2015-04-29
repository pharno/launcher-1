import React from "react";
import Game from "../game";
import fs from "fs";
import Steam from "./Steam";

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);
		let games = [];
		for (let game of JSON.parse(localStorage.getItem("games") || "[]"))
		{
			games.push(new Game(game.name, game.path));
		}



		this.state = {
			open: null,
			games: games
		};
	}

	updateSteamGames()
	{
		let steamLocation = localStorage.getItem("steamLocation");

		let steam = new Steam();
		let self = this;
		fs.readdir(steamLocation, function(err, files){
			for (let file of files){
				if (file.indexOf(".acf") != -1){
					fs.readFile(steamLocation+"/"+file, {encoding:"utf-8"},function(err, data){
						let acfdata = steam.parseAcf(data)["AppState"];
						self.setState({
							games: self.state.games.concat(new Game(acfdata["name"],"steam://run/"+acfdata["appid"]))
						});
						console.log("new state",self.state);
					})
				};
			}
		});
	}

	componentDidUpdate()
	{
		localStorage.setItem("games", JSON.stringify(this.state.games));
		localStorage.setItem("steamLocation",this.state.steamLocation);
		this.updateSteamGames()
	}

	addGame()
	{
		let name = document.getElementById("name");
		let path = document.getElementById("path");
		this.setState({
			games: this.state.games.concat(new Game(name.value, path.value))
		});
		name.value = "";
		path.value = "";
	}

	setSteamLocation()
	{		
		let steamLocation = document.getElementById("steamLocation");
		this.setState({
			steamLocation: steamLocation.value
		});
	}

	launch(game)
	{
		this.setState({open: game.name});
		game.on("close", () => this.setState({open: null}));
		game.launch();
	}

	render()
	{
		return (
			<div>
				<p>Currently open: {this.state.open || "None"}</p>
				<input id="steamLocation" type="text" placeholder="steamLocation" />
				<button onClick={this.setSteamLocation.bind(this)}>Set Steam Location</button>

				<input id="name" type="text" placeholder="Name" />
				<input id="path" type="text" placeholder="Executable path" />
				<button onClick={this.addGame.bind(this)}>Add game</button>

				{this.state.games.map((game) =>
					<button
						key={game.name}
						onClick={this.launch.bind(this, game)}>
						{`Launch ${game.name}`}
						</button>)}
			</div>
		);
	}
};

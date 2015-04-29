import React from "react";
import Game from "../game";

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

	componentDidUpdate()
	{
		localStorage.setItem("games", JSON.stringify(this.state.games));
	}

	addGame()
	{
		let name = document.getElementById("name");
		let path = document.getElementById("path");
		this.setState({
			games: this.state.games.concat({name: name.value, path: path.value})
		});
		name.value = "";
		path.value = "";
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

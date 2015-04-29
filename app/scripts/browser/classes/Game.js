import React from "react";
import remote from "remote";
import {dirname} from "path";

const {spawn} = remote.require("child_process");

export default class Game extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	launch()
	{
		spawn(this.props.path, {cwd: dirname(this.props.path)});
	}

	render()
	{
		return (
			<button onClick={this.launch.bind(this)}>{`Launch ${this.props.name}`}</button>
		);
	}
};

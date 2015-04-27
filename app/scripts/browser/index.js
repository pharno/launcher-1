import React from "react";

class App extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<p>test</p>
		);
	}
}

React.render(<App />, document.getElementById("app"));

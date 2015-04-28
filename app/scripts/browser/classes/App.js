import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<div>
				<Sidebar />
				<Content />
			</div>
		);
	}
};

import React from "react";

export default class Sidebar extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<aside id="sidebar">
				<div id="search">
					<i className="fa fa-fw fa-search" />
					<input type="text" placeholder="Search Library" />
				</div>
				<div id="games">
					<ul>
						<li className="game">
							<img src="images/limbo.png" />
							<span>LIMBO</span>
						</li>
						<li className="game selected">
							<img src="images/supermeatboy.png" />
							<span>Super Meat Boy</span>
						</li>
					</ul>
				</div>
			</aside>
		);
	}
};

import React from "react";

export default class Content extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<main id="content">
				<header>
					<div id="info">
						<img src="images/supermeatboy.png" />
						<span>Super Meat Boy</span>
					</div>
				</header>

				<footer>
					<div id="share">
						Share this game if you like it.
					</div>

					<div id="more-like">
						More like this game:
					</div>
				</footer>
			</main>
		);
	}
};

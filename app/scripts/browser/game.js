import remote from "remote";
import {EventEmitter} from "events";
import {dirname} from "path";
const {spawn} = remote.require("child_process");

export default class Game extends EventEmitter
{
	constructor(name, path)
	{
		super();
		this.name = name;
		this.path = path;
	}

	launch()
	{
		let child = spawn(this.path, {cwd: dirname(this.path)});
		child.on("exit", () => this.emit("close"));
	}
};

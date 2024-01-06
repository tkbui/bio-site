import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/tatami book cover square.png";

function Intro() {
	return (
		<div className="intro">
			<Link to="https://www.imdb.com/title/tt1847445/mediaviewer/rm1674906113/">
				<img src={image} alt="Tatami Galaxy book cover" />
			</Link>
			<h1>Hi there! ( ´ ▽ ` )ﾉ</h1>
			<p>
				I'm T.K. and this is just me practicing full-stack with React! This site
				will serve as a little bio site for casual practice. I'll probably
				include pages to display some games and music that I love and hopefully
				build off onto more complex pages as I improve my skills!
			</p>
		</div>
	);
}

export default Intro;

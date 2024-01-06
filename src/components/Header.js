import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<ul className>
					<li>
						<NavLink to="/" className="nav-link">
							Bio
						</NavLink>
					</li>
					<li>
						<NavLink to="/games" className="nav-link">
							Games
						</NavLink>
					</li>
					<li>
						<NavLink to="/music" className="nav-link">
							Music
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;

import AstroLogo from "/astronaut.svg"
import "./Navbar.css";

function Navbar({links}) {
    console.log(links);
const navStyles = {
backgroundColor: "#f16b5e", 
};

return (
    <nav className="nav-container" style={navStyles}>
    <img className="nav-logo" src={AstroLogo} alt="space-app logo"></img>
    <div className="links-container">
        {links.map((item) => (
            <a key={item.id} href={item.href}>
                {item.text}
                </a>
        ))}
</div>
</nav>
);
}

export default Navbar;
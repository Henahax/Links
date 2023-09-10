import "./App.css";
import profile from "../public/profile.json";
import links from "../public/links.json";

function App() {
  return (
    <>
      <div id="profile">
        <img className="avatar" src={profile.avatar}></img>
        <h1 className="name">{profile.name}</h1>
        <h2 className="tags">{profile.tags}</h2>
        <h3 className="description">{profile.description}</h3>
      </div>

      <div id="links">
        <ul>
          {links
            .filter(function (link) {
              return link.link.length > 0;
            })
            .map((link) => (
              <li>
                <a href={link.link} className={"link " + link.type}>
                  <i className={"icon " + link.icon}></i>
                  <div className="text">{link.name}</div>
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div id="footer">{profile.footer}</div>
    </>
  );
}

export default App;

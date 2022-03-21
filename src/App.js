import "./App.css";
import writers from "./writers";

function App() {
  return (
    <div>
      <h1>Writers Profiles</h1>
      <div className="container">
        {writers.map((write) => (
          <div className="card">
            <img
              src={`/images/${write.avatar}.png`}
              width="300px"
              height="300px"
              alt=""
            />
            <div className="textGroup">
              <h3>{write.name}</h3>
              <p>{write.email}</p>
              <p>{write.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

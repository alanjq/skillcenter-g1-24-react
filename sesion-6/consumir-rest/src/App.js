import CreatePost from "./CreatePost";
import Currencies from "./Currencies";

export function App() {
    return <div>
      <h1>Peticiones REST</h1>
      <hr />
      <Currencies />

      <hr />
      <h2>Peticiones con POST</h2>
      <CreatePost />
    </div>;
  }
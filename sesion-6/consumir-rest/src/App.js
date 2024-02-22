import Currencies from "./components/Currencies";
import CreatePost from "./components/CreatePost";
import PatchPost from "./components/PatchPost";
import DeletePost from "./components/DeletePost";

export function App() {
  return <div>
    <h1>Peticiones REST</h1>
    <hr />
    <Currencies />

    <hr />
    <h2>Peticiones con POST</h2>
    <CreatePost />
    <PatchPost />
    <DeletePost />
  </div>;
}
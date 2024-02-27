import Currencies from "./components/Currencies";
import CreatePost from "./components/CreatePost";
import PatchPost from "./components/PatchPost";
import DeletePost from "./components/DeletePost";
import Heading from "./components/Heading";

export function App() {
  return <div className="px-8 my-2">
    <Heading label="Obteniendo monedas con peticiones REST" />
    <Currencies />

    <Heading label="Peticiones con POST" />
    <div className="text-center py-3">
      <CreatePost />
      <PatchPost />
      <DeletePost />
    </div>
  </div>;
}
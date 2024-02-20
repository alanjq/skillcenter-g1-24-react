import BotonCalculadora from "./components/BotonCalculadora";

export function App() {
  return <div>
    <h1>Calculadora</h1>
    <section className="w-36">
      <div className="grid-cols-3 grid">
        <div><BotonCalculadora value={7} /></div>
        <div><BotonCalculadora value={8} /></div>
        <div><BotonCalculadora value={9} /></div>
        <div><BotonCalculadora value={4} /></div>
        <div><BotonCalculadora value={5} /></div>
        <div><BotonCalculadora value={6} /></div>
        <div><BotonCalculadora value={1} /></div>
        <div><BotonCalculadora value={2} /></div>
        <div><BotonCalculadora value={3} /></div>
      </div>
    </section>
  </div>
}
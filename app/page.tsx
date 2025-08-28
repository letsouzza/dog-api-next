import DogGallery from "../components/dogGallery";
// Import do componente 

// Exportar componentes na tela Home para utilizar
export default function Home() {
  return (
    <main className="container">
      <h1 className="titulo-principal">DOG API 🦮</h1>
      <DogGallery /> 
    </main>
  );
}

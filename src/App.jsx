import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Container from "./components/Container";
import "./App.css";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Rank />
        <ImageLinkForm />
      </Container>
      <ParticlesBg color="#ffffff" type="cobweb" num={180} bg={true} />
    </>
  );
}

export default App;

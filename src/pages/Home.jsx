import Hero from '../components/home/Hero';
import MateriasGrid from '../components/home/MateriasGrid';

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="materias">
        <MateriasGrid />
      </div>
    </div>
  );
};

export default Home;


import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Songs from './components/Songs/Songs';
import TopAlbum from './components/Topalbum/TopAlbum';
import NewAlbum from './components/newAlbum/NewAlbum';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <TopAlbum/>
    <NewAlbum/>
    <Songs/>
    </>
  );
}

export default App;

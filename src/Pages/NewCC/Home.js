import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
// import DashBoard from '../../Components/DashBoard/DashBoard';
import FeaturesBar from '../../Components/FeaturesBar/FeaturesBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';

function Home() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <SlideBar />
        {/* <DashBoard content={SlideBar} /> */}
        <div className="MainDash">
          <PlacesBar />
        </div>
        <FeaturesBar />
      </div>
    </div>
  );
}

export default Home;

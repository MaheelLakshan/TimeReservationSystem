import '../CommonTemplate.css';
import SlideBar from '../../Components/SlideBar/SideBar';
// import DashBoard from '../../Components/DashBoard/DashBoard';
import FeaturesBar from '../../Components/FeaturesBar/FeaturesBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import TheCalendar from '../../Components/Calander/NewccTheCalendar';

function Home() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <SlideBar />
        {/* <DashBoard content={SlideBar} /> */}
        <div className="MainDash">
          <div>
            <PlacesBar />
            <h3
              style={{
                paddingLeft: '20px',
                color: '#fcc81f',
                background: '#6B6E70',
                marginBottom: '10px',
              }}
            >
              Welcome to the New CC DashBoard
            </h3>
          </div>
          <div>
            <TheCalendar />
          </div>
        </div>
        <div className="feat-a">
          <FeaturesBar />
        </div>
      </div>
    </div>
  );
}

export default Home;

import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
// import DashBoard from '../../Components/DashBoard/DashBoard';
import Semi_FeaturesBar from '../../Components/FeaturesBar/Semi_FeaturesBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';
import TheCalendar from '../../Components/Calander/Semi_TheCalendar';

function Old_Home() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <div className="sidebr">
          <Semi_SideBar />
        </div>
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
              Welcome to the Seminar Room DashBoard
            </h3>
          </div>
          <div>
            <TheCalendar />
          </div>
        </div>
        <div className="feat-a">
          <Semi_FeaturesBar />
        </div>
      </div>
      <div className="feat-b">
        <Semi_FeaturesBar />
      </div>
    </div>
  );
}

export default Old_Home;

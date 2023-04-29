import '../CommonTemplate.css';
import Semi_SideBar from '../../Components/SlideBar/Semi_SideBar';
// import DashBoard from '../../Components/DashBoard/DashBoard';
import Semi_FeaturesBar from '../../Components/FeaturesBar/Semi_FeaturesBar';
import PlacesBar from '../../Components/PlacesBar/PlacesBar';

function Old_Home() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <Semi_SideBar />
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
        </div>
        <Semi_FeaturesBar />
      </div>
    </div>
  );
}

export default Old_Home;

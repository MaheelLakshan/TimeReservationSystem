import '../CommonTemplate.css';
import Old_SideBar from '../../Components/SlideBar/Old_SideBar';
// import DashBoard from '../../Components/DashBoard/DashBoard';
import Old_FeaturesBar from '../../Components/FeaturesBar/Old_FeaturesBar';
//old features bar should be created and add
import PlacesBar from '../../Components/PlacesBar/PlacesBar';

function Old_Home() {
  return (
    <div className="Common">
      <div className="CommonGlass">
        <Old_SideBar />
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
              Welcome to the OLD CC DashBoard
            </h3>
          </div>
        </div>
        <Old_FeaturesBar />
      </div>
    </div>
  );
}

export default Old_Home;

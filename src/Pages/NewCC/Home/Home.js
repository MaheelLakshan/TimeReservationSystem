import './Home.css';
import SlideBar from '../../../Components/SlideBar/SideBar';
import DashBoard from '../../../Components/DashBoard/DashBoard';

function Home() {
  return (
    <div className="Home">
      <div className="HomeGlass">
        <SlideBar />
        <DashBoard />
        {/* <Slidebar />

      <MainDash />

      <Updates /> */}
      </div>
    </div>
  );
}

export default Home;

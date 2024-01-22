import "./home.css";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import HeaderSearch from "../../components/HeaderSerch/HeaderSearch";
const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <HeaderSearch />
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
};

export default Home;

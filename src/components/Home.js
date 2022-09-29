import Feed from "./Feed";
import Side from "./Side";

const Home = () => {
  return (
    <>
      <div className="flex ">
        <Feed />
        <Side />
      </div>
    </>
  );
};

export default Home;

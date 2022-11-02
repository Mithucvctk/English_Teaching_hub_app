import Signin from "./Signin/signin";
function Home() {
    return (
      <div className="hii">
        <h1>This is the home page</h1>
        <Signin />

        {/* <Link to="/signin">Click to view our signin page</Link> */}
      </div>
    );
  }
  
  export default Home;
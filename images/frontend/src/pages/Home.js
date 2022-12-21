function Home({ authenticatedUser }) {
    return (
        <>
            <h2>Home</h2>
            {authenticatedUser && 
                <p>Please proceed to the Cases page to start reviewing cases</p>
            }
            {!authenticatedUser && 
                <p>Please create an account and login to review cases</p>
            }
        </>
    );
  }
  
  export default Home;
  
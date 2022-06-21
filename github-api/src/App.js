import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import NoSearch from "./components/no-search";
import useGithub from "./components/hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? ( <>
        {githubState.loading ? (
        <p>Loading</p>
          ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </>
    ) : (
      <NoSearch />
    )}
    </Layout>
  );
};

export default App;
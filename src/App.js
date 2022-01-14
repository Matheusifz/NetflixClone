import { useEffect } from "react";

import Api from "./services/Api";

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);

  return <div>Hello World</div>;
};

export default App;

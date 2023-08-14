import { useState } from "react";

import Questions from "./Questions";
import questions from "./data";

const App = () => {
  const [data, setData] = useState(questions);

  return (
    <main>
      <Questions data={data} />
    </main>
  );
};
export default App;

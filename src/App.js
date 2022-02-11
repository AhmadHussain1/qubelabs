import Form from "./components/Form";
import Header from "./components/Header";
import Invest from "./components/Invest";
import Qube from "./components/Qube";
import Question from "./components/Question";
import Stack from "./components/Stack";
import Work from "./components/Work";

function App() {
  return (
    <div className="main-div">
      <Header />
      <Qube></Qube>
      <Work></Work>
      <Stack/>
      <Invest></Invest>
      <Question></Question>
      <Form></Form>
     
    </div>
  );
}

export default App;

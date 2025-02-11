import Greetings from "./Greetings";
import Navbar from "./Header/Navbar";

export default function App(){
  return(
    <>
    <Navbar/>
    <h1><marquee>Welcome to React</marquee></h1>
    <Greetings/>
    </>
  );
}
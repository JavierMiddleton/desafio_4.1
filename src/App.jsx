import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header title="Adopta tu perrito" />
      <div className="cardCss">
        <MyCard
          title="Juan"
          description="Tiene un lindo nombre de pila y vistió la 10 en Barcelona, el mejor club."
          btnColor="warning"
          btnTxt="Kiltro"
          image="https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <MyCard
          title="Román"
          description="Es como la capital romana, con la diferencia de que ganó diversas Libertadores."
          btnColor="secondary"
          btnTxt="Pomerania"
          image="https://images.pexels.com/photos/17407385/pexels-photo-17407385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />{" "}
        <MyCard
          title="Riquelme"
          description="Qué se puede decir de él... Es un crack del esférico en todo sentido."
          btnColor="success"
          btnTxt="Bulldog"
          image="https://images.pexels.com/photos/13581209/pexels-photo-13581209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />{" "}
        <MyCard
          title="Boca"
          description="En este club la rompió y se transformó en ídolo máximo tras ganar todo lo posible."
          btnColor="danger"
          btnTxt="Poodle"
          image="https://images.pexels.com/photos/10140370/pexels-photo-10140370.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <Footer text="Esta es una página creada para Desafío Latam. Se trata de adoptar perritos que hagan homenaje al último 10 del fútbol contemporáneo, Juan Román Riquelme." />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import imagenVenus from "./assets/images/venus.jpg";
import imagenAdan from "./assets/images/creacion-adan.jpg";
import imagenDali from "./assets/images/persistencia-memoria.jpg";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      list: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newList = [...this.state.list, this.state.task];
    this.setState({ task: "", list: newList });
  };

  render() {
    return (
      <div>
        <Formu
          value={this.state.task}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <List items={this.state.list} />
      </div>
    );
  }
}

function List(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

function Formu(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h1>¿En qué estarás trabajando hoy?</h1>
        <input
          type="text"
          name="task"
          value={props.value}
          onChange={props.onChange}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

class Form extends React.Component {
  // El constructor declara el estado del la clase, en esto caso como string
  constructor() {
    super(); //llama las propeidades y metodos de React.component
    //this.state solo puede ser llamado desd el constructor
    //this sirve para guardar contexto de la clase(definir props dentro de una clase o metodos
    this.state = {
      para: "",
      asunto: "",
      description: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target; //Es un evento de javascript que tiene que ver con eventos en el DOOM
    //this.setState para prgogramas actualizaciones al estado local de componente
    //setState sirve para actualizar el estado
    this.setState({ [name]: value }); //declaro el objeto que recibira name como variable y tendra un valor que le llegara desde el formulario
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviado");
    console.log(this.state);
  };
  //Render dice que regresara
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <label for="para"></label>
          <input
            name="para"
            type="text"
            placeholder="Para"
            value={this.state.para}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label for="asunto"></label>
          <input
            placeholder="Asunto"
            name="asunto"
            value={this.state.asunto}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            name="description"
            value={this.state.description}
            placeholder="Descripcion"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <label for="category"></label>
        </div>
        <input className="submit" type="submit" value="Enviar" />
      </form>
    );
  }
}

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <button className="likes_button" onClick={this.handleClick}>
        {this.state.clicks} likes
      </button>
    );
  }
}

function Title() {
  return (
    <div className="title">
      <h2>Obras de arte</h2>
    </div>
  );
}

function ArtCard(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.image} alt="" />
      <div className="card_info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h6>{props.category}</h6>
      </div>
      <Button />
    </div>
  );
}

//Ejemplo de un juego de gato echo con = "https://es.reactjs.org/tutorial/tutorial.html"

class Square extends React.Component {
  //React.component nos traera todos los metodos de la biblioteca
  render() {
    //render es lo que quieres mostrar en pantalla
    return (
      <button className="boton">
        {/* 3.- Con this.props.value muestro el valor que traigo desde Board  */}
        {this.props.value}
        {/* this hace la funcion de invocar */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    //PREGUNTAR POR renderSquare al profe
    // 2.- Con renderSquare pasaremos el valor de "value" a Square
    return <Square value={i} />; //1.- En value declaramos el valor que tomara en Square con ayuda de renderSquare
  }

  render() {
    const estado = "Next player: X";

    return (
      <div>
        <div className="estado">{estado}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div>
          <div>{this.props.value}</div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import Wrapper from "./components/Wrapper";
import PrincessCard from "./components/PrincessCard";
import princess from "./components/princess.json";
import "./styles/App.css"

class App extends React.Component {
  state = {
    princess,
    clickedImage: [],
    highScore: 0,
    currentScore: 0
  };

  shuffle() {
    this.setState({ princess: princess.sort(() => Math.random() - 0.5) });
  }

  isClicked(id) {
    if (!this.state.clickedImage.includes(id)) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        highScore:
          this.state.currentScore + 1 > this.state.highScore
            ? this.state.currentScore + 1
            : this.state.highScore,
        clickedImage: [...this.state.clickedImage, id]
      });
    } else {
      alert("Sorry! You Lose!");
      this.setState({
        currentScore: 0,
        clickedImage: []
      });
    }
    this.shuffle();
  }

  render() {
    return (
      <Wrapper>
<div className="jumbotron jumbotron-fluid">
<div className="container">
<h1 className="display-4">Clicky Game</h1>
<p className="lead instructions">Click on the images to get the highest score without clicking on the same image twice!</p>
<p className="lead highscore">High Score: {this.state.highScore} | Current Score: {this.state.currentScore}</p>
    <div className="row">
            {princess.map(f => (
              <PrincessCard
                image={f.image}
                id={f.id}
                isClicked={() => this.isClicked(f.id)}
              />
            ))}
          </div>
  </div>
</div>



















        {/* <h1 className="text-center">Clicky Game</h1>
        <p className = "instructions">
          Click on the images to get the highest score without clicking on the same image twice!
        </p>
        <div className="container">
          <p>High Score: {this.state.highScore} | Current Score: {this.state.currentScore}</p>
        </div>
        <div>
          
        </div> */}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Points = props => (
  <tr>
    <td>{props.points.username}</td>
   
    <td>{props.points.point}</td>
    <td>{props.points.date.substring(0,10)}</td>
    <td>
     <a href="#" onClick={() => { props.deleteScore(props.points._id) }}>delete</a>
    </td>
  </tr>
)

export default class ScoresList extends Component {
  constructor(props) {
    super(props);

    this.deleteScore = this.deleteScore.bind(this)

    this.state = {scores: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/scores/')
      .then(response => {
        this.setState({ scores: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteScore(id) {
    axios.delete('http://localhost:5000/scores/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      scores: this.state.scores.filter(el => el._id !== id)
    })
  }

  scoreList() {
    return this.state.scores.map(currentscore => {
      return <Points points={currentscore} deleteScore={this.deleteScore} key={currentscore._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Scores</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              
              <th>Score</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.scoreList() }
          </tbody>
        </table>
      </div>
    )
  }
}
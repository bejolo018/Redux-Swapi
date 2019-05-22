import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetch } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <div> loading... </div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return{
    characters: state.charsReducer.characters,
    fetch: state.charsReducer.error,
    error: state.charsReducer.fetching,
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetch
  }
)(CharacterListView);

import React, { Component } from "react";
import NavBar from "../components/navbar";

class DashBoardPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>PresentAIble</h3>
        <NavBar></NavBar>
        <h3>Dash Board</h3>
        <h5>My Submissions</h5>
        <p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              explicabo eum voluptatem perferendis illo quos magnam, earum fugit
              fugiat impedit, laborum deleniti ea sint voluptatum quisquam
              repudiandae inventore nam repellat.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
              dolores iure pariatur adipisci velit, ad minima molestiae, minus
              odit voluptatem distinctio ea ut fuga dignissimos laborum
              repudiandae dolorem eos.
            </li>
          </ul>
        </p>
      </React.Fragment>
    );
  }
}

export default DashBoardPage;

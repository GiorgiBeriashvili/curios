import HalfMoon from "../../../../web_modules/halfmoon.js";
import React from "../../../../web_modules/react.js";
import {Link} from "../../../../web_modules/react-router-dom.js";
import {toastAlert} from "../../shared/Toast.js";
class CurioPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curio: "/curios/gif-maker"
    };
  }
  render() {
    return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("select", {
      name: "curio",
      onChange: (event) => {
        this.setState({curio: event.target.value});
        toastAlert(`Picked ${event.target.value}!`);
      },
      value: this.state.curio
    }, /* @__PURE__ */ React.createElement("option", {
      value: "/curios/gif-maker"
    }, "GIF Maker"), /* @__PURE__ */ React.createElement("option", {
      value: "/curios/periodic-table"
    }, "Periodic Table")), /* @__PURE__ */ React.createElement("button", {
      onClick: () => this.props.navigateTo(this.state.curio),
      className: "btn btn-primary ml-5 mr-5",
      type: "button"
    }, "Pick Curio"));
  }
}
class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosing: false,
      route: ""
    };
  }
  componentDidMount() {
    HalfMoon.onDOMContentLoaded();
  }
  render() {
    return this.state.choosing ? /* @__PURE__ */ React.createElement(CurioPicker, {
      navigateTo: (link) => {
        this.setState({choosing: false, route: link});
        console.log(link, this.state);
      }
    }) : /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("button", {
      className: "btn",
      onClick: () => {
        toastAlert("Choose the Curio!");
        this.setState({choosing: true});
      },
      type: "button"
    }, "Quick Navigation"), this.state.route !== "" && /* @__PURE__ */ React.createElement(Link, {
      to: this.state.route
    }, /* @__PURE__ */ React.createElement("button", {
      className: "btn btn-primary ml-5 mr-5",
      type: "button"
    }, "Navigate")));
  }
}
export default Introduction;

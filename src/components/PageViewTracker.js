import { Component } from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
import data from "../data/content.js";

ReactGA.initialize(data.gaId);

class PageViewTracker extends Component {
  componentDidMount() {
    this.trackPageView();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.trackPageView();
    }
  }

  trackPageView = () => {
    const url = window.location.pathname + window.location.search;
    ReactGA.pageview(url);
  };

  render() {
    return this.props.children;
  }
}

export default withRouter(PageViewTracker);

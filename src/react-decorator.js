import React from 'react';
import PropTypes from 'prop-types';

class ReactDecorator extends React.Component {
  constructor(props) {
    super(props);
    this.props.onMount();
  }
  componentWillUnmount() {
    this.props.onUnMount();
  }
  render() {
    return this.props.story;
  }
}
ReactDecorator.propTypes = {
  story: PropTypes.node.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnMount: PropTypes.func.isRequired,
};
export default ReactDecorator;

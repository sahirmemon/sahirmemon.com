import React from 'react';

class Icon extends React.Component {
  render() {
    const { glyph, ...props } = this.props;
    return (
      <svg {...props}>
          <use xlinkHref={`#${glyph.id}`} />
      </svg>
    );
  }
};

export default Icon;

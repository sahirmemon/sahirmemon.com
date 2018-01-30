import React from 'react';

class Icon extends React.Component {
  render() {
    const { glyph, ...props } = this.props;
    console.log(glyph);
    return (
      <svg {...props}>
          <use xlinkHref={`#${glyph.id}`} />
      </svg>
    );
  }
};

export default Icon;

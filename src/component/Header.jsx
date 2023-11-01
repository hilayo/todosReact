import PropTypes from 'prop-types';

function Header({text,bgcolor}) {
  return (
    <div style={{backgroundColor:bgcolor}}>
      <h1>{text}</h1>
    </div>
  )
}

Header.defaultProps={
    text:'defult',
    bgcolor:"red"
}

Header.propTypes={
text: PropTypes.string
}

export default Header

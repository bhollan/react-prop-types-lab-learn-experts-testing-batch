const React = require('react');

let checkWeight = function(props, propName){
  const weight = props[propName];
  if (weight == undefined){
    return new Error(`${propName} is undefined`);
  }
  if (isNaN(weight)){
  // if (!Number.isInteger(weight)){
    return new Error(`crap`);
  }
  if (weight < 80 || weight > 300){
    return new Error(`${weight} is not in valid range`)
  }
}

class Product extends React.Component{
  render(){
    return (
        <div>
          <p>Stuff</p>
        </div>
    )
  }
}


Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  // weight: React.PropTypes.number.isRequired
  // weight: (props, propName) => {
  //   
  // }
  weight: checkWeight
}


module.exports = Product;

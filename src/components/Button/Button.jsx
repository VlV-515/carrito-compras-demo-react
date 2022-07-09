import './Button.css';
function Button(props) {
  return (
    <div className='button'>
      <button {...props} className='button-producto'/>
    </div>
  );
}

export default Button;
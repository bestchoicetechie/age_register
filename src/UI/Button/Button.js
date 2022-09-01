import './Button.css';

const Button =(props) =>{
  return (
    <button className='button' type={props.type || 'button'} onClick={props.btnClick}>
        {props.children}
    </button>
  )
}

export default Button
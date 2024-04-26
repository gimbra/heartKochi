import './style.css';

const Input = ({ type = 'text', onChange, placeholder, className = '' }) => {
  return (
    <input
      className={`custom-input ${className}`}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

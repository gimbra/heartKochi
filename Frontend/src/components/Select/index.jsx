import './style.css';

const Select = ({ className = '', onChange, options, placeholder }) => {
  return (
    <select onChange={onChange} className={`custom-select ${className}`}>
      <option selected disabled>
        {placeholder}
      </option>
      {options.map(item => {
        return <option value={item.value}>{item.label}</option>;
      })}
    </select>
  );
};

export default Select;

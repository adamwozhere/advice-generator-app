function Button({ children, handleClick }) {
  return (
    <button id="advice-btn" className="container" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

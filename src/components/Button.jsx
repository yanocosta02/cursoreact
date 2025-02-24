function Button(props) {
  return (
    <button {...props} className="bg-slate-800 text-white p-2 rounded-md ml-2">
      {props.children}
    </button>
  );
}

export default Button;

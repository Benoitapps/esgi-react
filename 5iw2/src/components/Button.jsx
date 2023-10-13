function Button({
  title = "Title",
  variant = "rounded",
  component: Component = 'button',
  onClick = () => {
    throw new Error("Click handler not defined");
  },
  children,
  ...props
}) {
  const style = {
    backgroundColor: "red",
    color: "green",
  };
  switch (variant) {
    case "squared":
      style.borderRadius = 0;
      break;
    case "rounded":
      style.borderRadius = "10px";
      break;
    case "circle":
      style.borderRadius = "50%";
      style.height = "50px";
      style.width = "50px";
      title = title.slice(0, 1);
      break;
  }

  return (
    <Component onClick={onClick} style={style} {...props}>
      {children ?? title}
    </Component>
  );
}

export default Button;

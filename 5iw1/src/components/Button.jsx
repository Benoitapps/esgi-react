export default function Button({
  title,
  variant,
  component: Component = "button",
  onClick,
  theme = {},
  children
}) {
  const style = {
    borderRadius: 0,
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "1px",
    ...theme
  };
  switch (variant) {
    case "rounded":
      style.borderRadius = "5px";
      break;
    case "circle":
      style.borderRadius = "50%";
      style.width = "50px";
      style.height = "50px";
      style.display = "flex";
      style.justifyContent = "center";
      style.alignItems = "center";
      title = title[0];
      break;
    case "text":
      style.border = "none";
      style.backgroundColor = "transparent";
      style.color = "pink";
      Component = "a";
  }

  return <Component style={style} onClick={onClick}>{children || title}</Component>;
}

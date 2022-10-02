import styled from "styled-components";

export const Button = styled.button`
  margin: 0.5rem;
  transition: 0.2s ease all;
  cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  padding: ${(props) =>
    props.shape == "round" ? "0.8rem 1rem" : "0.5rem 1rem"};
  background-color: ${(props) =>
    props.variant == "solid"
      ? props.color || "#000"
      : props.variant == "outline"
      ? "transparent"
      : "#000"};
  color: ${(props) =>
    props.variant == "solid"
      ? "#fff"
      : props.variant == "outline"
      ? props.color
      : "#fff"};
  border: 1px solid
    ${(props) =>
      props.variant == "solid"
        ? props.color || "#000"
        : props.variant == "outline"
        ? props.color
        : "#000"};

  border-radius: ${(props) =>
    props.shape == "pill" ? "1rem" : props.shape == "round" ? "50%" : "0.2rem"};

  &:hover {
    transform: scale(1.01);
    background-color: ${(props) =>
      props.variant == "solid"
        ? "transparent"
        : props.variant == "outline"
        ? props.color
        : "transparent"};
    color: ${(props) =>
      props.variant == "solid"
        ? props.color || "#000"
        : props.variant == "outline"
        ? "#fff"
        : "#000"};
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  }
`;
export default Button;

export const StatusButton = styled(Button)`
  cursor: default;
  background-color: ${(props) =>
    props.variant == "available"
      ? "rgba(110, 248, 117, 0.2)"
      : props.variant == "breakdown"
      ? "rgba(254, 72, 56, 0.2)"
      : props.variant == "maintenance"
      ? "rgba(255, 247, 85, 0.2)"
      : "#000"};
  color: ${(props) =>
    props.variant == "available"
      ? "rgb(110, 248, 117)"
      : props.variant == "breakdown"
      ? "rgb(254, 72, 56)"
      : props.variant == "maintenance"
      ? "rgb(245, 234, 42)"
      : "#000"};
  border: 1px solid
    ${(props) =>
      props.variant == "available"
        ? "rgb(110, 248, 117)"
        : props.variant == "breakdown"
        ? "rgb(254, 72, 56)"
        : props.variant == "maintenance"
        ? "rgb(255, 247, 85)"
        : "#000"};
  &:hover {
    transform: scale(1);
    background-color: ${(props) =>
      props.variant == "available"
        ? "rgba(110, 248, 117, 0.2)"
        : props.variant == "breakdown"
        ? "rgba(254, 72, 56, 0.2)"
        : props.variant == "maintenance"
        ? "rgba(255, 247, 85, 0.2)"
        : "#000"};
    color: ${(props) =>
      props.variant == "available"
        ? "rgb(110, 248, 117)"
        : props.variant == "breakdown"
        ? "rgb(254, 72, 56)"
        : props.variant == "maintenance"
        ? "rgb(245, 234, 42)"
        : "#000"};
    box-shadow: none;
  }
`;

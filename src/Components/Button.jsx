import styled from "styled-components";

export const Button = styled.button`
  margin: 0.5rem;
  transition: 0.2s ease all;
  cursor: ${(props) => (props.disabled == true ? "not-allowed" : "pointer")};
  padding: ${(props) => (props.shape == "round" ? "1rem" : "0.5rem 1rem")};
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

export const IconButton = styled(Button)`
  background-image: linear-gradient(to right, #f5f5 0%, #f5f5f5 100%);
`;

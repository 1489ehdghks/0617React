import styled from "styled-components";


const ButtonBlock =styled.div`
    color: blue,
    background: "teal",
    padding: ".375rem .75rem",
    border: "1px solid teal",
    borderRadius: "0.25rem",
    fontSize: "1rem",
    lineHeight: 1.5,
`;
const BlueButton = props => <ButtonBlock {...props}/>;

export default BlueButton;
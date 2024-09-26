import styled from "styled-components";

const ScreenBackground = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: url("https://i.pinimg.com/originals/08/c5/ec/08c5ec8fddd5fd3c965e773cad127e2b.jpg");
`;

export const LockScreen = ({ children }) => <ScreenBackground>{children}</ScreenBackground>
import styled from "styled-components";
import { Colors } from "../shared/constants/colors";

const StyledMacScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${Colors.black};
`;

export const MacScreen = ({ children }) =>
    (<StyledMacScreen className="mac-screen">{children}</StyledMacScreen>);
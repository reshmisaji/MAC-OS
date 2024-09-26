import styled from "styled-components";
import { useEffect, useState } from "react";
import { getDay, getMonth } from "../shared/utils/dateTime";
import { Colors } from "../shared/constants/colors";

const ScreenBackground = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: url("https://i.pinimg.com/originals/08/c5/ec/08c5ec8fddd5fd3c965e773cad127e2b.jpg");
`;

const StyledDate = styled.span`
    color: ${Colors.aliceBlue};

    font-weight: 600;
    font-size: 27px;
`;

const StyledTime = styled.span`
    color: ${Colors.aliceBlue};

    font-size: 100px;
    font-weight: bold;
`;

const StyledDateContainer = styled.div`
    display: flex;
    column-gap: 5px;
`;

const DateSection = ({dateTime}) => <StyledDateContainer>
    <StyledDate>
        {getDay(dateTime)}
    </StyledDate>
    <StyledDate>
        {dateTime.getDate()}
    </StyledDate>
    <StyledDate>
        {getMonth(dateTime)}
    </StyledDate>   
</StyledDateContainer>

const DateTimeSection = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

export const LockScreen = () => {
    const [dateTime, setDateTime] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    
    return (
        <ScreenBackground>
            <DateTimeSection>
                <DateSection dateTime={dateTime} />
                <StyledTime>
                    {dateTime.toLocaleTimeString().slice(0,5)}
                </StyledTime>
            </DateTimeSection>
        </ScreenBackground>
    );
}
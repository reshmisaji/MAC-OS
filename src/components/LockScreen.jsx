import styled from "styled-components";
import { useEffect, useState } from "react";
import { getDay, getMonth } from "../shared/utils/dateTime";
import { Colors } from "../shared/constants/colors";
import { WifiIcon } from "./WifiIcon";
import { BatteryIcon } from "./BatteryIcon";
import { KeyBoardIcon } from "./KeyBoardIcon";

const ScreenBackground = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: url("https://images.jawamotorcycles.com/medium/perak/perak-story-bg.jpg?da?v=1");
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

const StyledTopNav = styled.div`
    margin-right: 20px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 5px;
`;

const StyledNavText = styled.span`
    color: ${Colors.aliceBlue};
    font-size: 15px;
`;

const StyledBatteryIcon = styled.div`
    margin-left:10px;
    margin-right:5px;
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
    opacity: 0.7;
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
            <StyledTopNav>
                <StyledNavText>ABC - India</StyledNavText>
                <KeyBoardIcon color={Colors.aliceBlue} size="18px" />
                <StyledBatteryIcon>
                    <BatteryIcon color={Colors.aliceBlue} size="23px" />
                </StyledBatteryIcon>
                <WifiIcon color={Colors.aliceBlue} size="26px" />
            </StyledTopNav>
            <DateTimeSection>
                <DateSection dateTime={dateTime} />
                <StyledTime>
                    {dateTime.toLocaleTimeString().slice(0,5)}
                </StyledTime>
            </DateTimeSection>
        </ScreenBackground>
    );
}
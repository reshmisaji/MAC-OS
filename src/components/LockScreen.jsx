import styled from "styled-components";
import { useEffect, useState } from "react";
import { getDay, getMonth } from "../shared/utils/dateTime";
import { Colors } from "../shared/constants/colors";
import { WifiIcon } from "./WifiIcon";
import { BatteryIcon } from "./BatteryIcon";
import { KeyBoardIcon } from "./KeyBoardIcon";

const StyledScreenBackground = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: url("https://images.jawamotorcycles.com/medium/perak/perak-story-bg.jpg?da?v=1");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 60vh;
`;

const StyledDate = styled.span`
    color: ${Colors.aliceBlue};

    font-weight: 600;
    font-size: 27px;
`;

const StyledTime = styled.span`
    color: ${Colors.aliceBlue};

    font-size: 115px;
    font-weight: bold;
`;

const StyledDateContainer = styled.div`
    display: flex;
    column-gap: 5px;
`;

const StyledTopIconContainer = styled.div`
    margin-right: 20px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 5px;
`;

const StyledLangText = styled.span`
    color: ${Colors.aliceBlue};
    font-size: 15px;
`;

const StyledBatteryIcon = styled.div`
    margin-left:10px;
    margin-right:5px;
`;

const StyledDateTimeSection = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    opacity: 0.7;
`;

const StyledHintText = styled.span`
    color: ${Colors.aliceBlue};
    opacity: 0.7;
    font-size: 13px;
`;

const StyledProfileIcon = styled.div`
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFheFAPTNaKkOqKHtRwnV5QvjFRES_WD-kQ&s");
    background-size: cover;
    
    width: 50px;
    height:50px;
    border-radius: 50%;
`;

const StyledName = styled.div`
    color: ${Colors.white};
    font-weight: 600;
`;

const StyledBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`;

const StyledTopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`;

const DateSection = ({ dateTime }) => (
    <StyledDateContainer>
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
)

const TopRightIconsSection = () => (
    <StyledTopIconContainer>
        <StyledLangText>ABC - India</StyledLangText>
        <KeyBoardIcon color={Colors.aliceBlue} size="18px" />
        <StyledBatteryIcon>
            <BatteryIcon color={Colors.aliceBlue} size="23px" />
        </StyledBatteryIcon>
        <WifiIcon color={Colors.aliceBlue} size="26px" />
    </StyledTopIconContainer>
);

const BottomSection = () => (
    <StyledBottomContainer>
        <StyledProfileIcon />
        <StyledName>
            Reshmi R S
        </StyledName>
        <StyledHintText>
            Touch ID or Enter Password
        </StyledHintText>
    </StyledBottomContainer>
);

const TopSection = ({dateTime}) => (
    <StyledTopContainer>
        <TopRightIconsSection />
        <StyledDateTimeSection>
            <DateSection dateTime={dateTime} />
            <StyledTime>
                {dateTime.toLocaleTimeString().slice(0,5)}
            </StyledTime>
        </StyledDateTimeSection>
    </StyledTopContainer>
)

export const LockScreen = () => {
    const [dateTime, setDateTime] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    
    return (
        <StyledScreenBackground>
            <TopSection dateTime={dateTime} />
            <BottomSection />
        </StyledScreenBackground>
    );
}
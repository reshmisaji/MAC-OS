import styled from "styled-components";
import { useEffect, useState } from "react";
import { getDay, getMonth } from "../shared/utils/dateTime";
import { Colors } from "../shared/constants/colors";
import { WifiIcon } from "./WifiIcon";
import { BatteryIcon } from "./BatteryIcon";
import { KeyBoardIcon } from "./KeyBoardIcon";
import { appConstants } from "../shared/constants/appConstants";
import { CircledArrowRight } from "./icons/CircledArrowRight";

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
    color: ${Colors.lightGrey};
    font-size: 13px;
    font-weight: 600;
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

const StyledInputContainer = styled.div`
    position: relative  ;
`;

const StyledInput = styled.input`
    width: 150px;
    height: 25px;
    border-radius: 20px;
    border:0px;
    font-weight: 700;
    padding-left: 10px;

    background: ${Colors.mediumGrey};
    caret-color: ${Colors.aliceBlue};
    color: ${Colors.darkGray};

    &::placeholder{
        color: ${Colors.lightGrey};
    }

    &:focus-visible{
        outline: none;
    }
`;

const StyledRightArrow = styled.span`
    width: 25px;
    position: absolute;
    right: 0;
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
        <StyledLangText>{appConstants.LANGUAGE}</StyledLangText>
        <KeyBoardIcon color={Colors.aliceBlue} size="18px" />
        <StyledBatteryIcon>
            <BatteryIcon color={Colors.aliceBlue} size="23px" />
        </StyledBatteryIcon>
        <WifiIcon color={Colors.aliceBlue} size="26px" />
    </StyledTopIconContainer>
);

const BottomSection = ({name, setName, setIsLoggedIn}) => {
    const [userName, setUserName] = useState('');
    const [showName, setShowName] = useState(true);

    const handleContinue = () => {
        const updatedName = userName;
        setName(updatedName);
        setUserName('');
    }

    const handleKeyDown = ({ code }) => code === appConstants.ENTER && handleContinue();

    const handleLogin = () => setIsLoggedIn(true);

    const renderInput = () => {
        if (!name)
            return (
                <StyledInputContainer>
                    <StyledInput placeholder="Enter Name" value={userName} onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
                    {userName && <StyledRightArrow onClick={handleContinue}>
                        <CircledArrowRight size="25px" color={Colors.darkGray} />
                    </StyledRightArrow>}
                </StyledInputContainer>);
        
        return (
            <StyledInputContainer>
                <StyledInput placeholder="Enter Password" type="password" onKeyDown={({code})=> code === appConstants.ENTER && handleLogin() } />
                {<StyledRightArrow onClick={handleLogin}>
                    <CircledArrowRight size="25px" color={Colors.darkGray} />
                </StyledRightArrow>}
            </StyledInputContainer>
        )
    }

    return (
    <StyledBottomContainer>
        <StyledProfileIcon />
        {name && showName? (<StyledName onClick={()=>setShowName(false)}>
           {name}
            </StyledName>) : renderInput()
        } 
        {name && <StyledHintText>
            {appConstants.LOCK_SCREEN_HINT}
        </StyledHintText>}
    </StyledBottomContainer>
);}

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

export const LockScreen = ({setIsLoggedIn}) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [name, setName] = useState('');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    
    return (
        <StyledScreenBackground>
            <TopSection dateTime={dateTime} />
            <BottomSection name={name} setName={setName} setIsLoggedIn={setIsLoggedIn} />
        </StyledScreenBackground>
    );
}
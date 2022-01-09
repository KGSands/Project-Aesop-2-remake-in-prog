import React, { useState } from 'react';
import { AesopBanner, Container, EntryBox, SendButton, StoryArea, UserInputArea } from './styles';
import { useTranslation } from "react-i18next";

const code = process.env.REACT_APP_SECRET_CODE

const App = () => {
    const { t } = useTranslation();
    const [line, setLine] = useState<string>('');
    const [story, setStory] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);
    const [isInputPhase, setIsInputPhase] = useState<boolean>(true);

    function addToStory(submittedText: string) {
        const newStory = [...story];
        newStory.push(submittedText);
        setStory(newStory);
        if (newStory.length >= 16) {
            setStory([])
        }
    }

    function resetGame() {
        setStory([]);
    }

    function handleChange(event: any) {
        setLine(event.target.value);
    }

    return (
        <>
        <AesopBanner></AesopBanner>
            {t('game.phase', {currentPhase: story.length+1, phaseTotal: 16})}
            <Container>
                <StoryArea>
                    {story.map(line => ' ' + line)}
                </StoryArea>
                <UserInputArea>
                    {count + "/25"}
                    <EntryBox maxLength={25} value={line} onChange={e => {handleChange(e); setCount(e.target.value.length)}}></EntryBox>
                    <SendButton disabled={!isInputPhase} onClick={() => addToStory(line)}>{t('game.submit')}</SendButton>
                </UserInputArea>
            </Container>
        </>
    )
}

export default App;


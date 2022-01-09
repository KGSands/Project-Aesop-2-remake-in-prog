import styled from 'styled-components'

export const AesopBanner = styled.div`
    height: 100px;
    border-bottom: 1px solid black;
    margin-left: -8px;
    width: 100vw;
`

export const Container = styled.div`
    width: 50vw;
    margin: 20px auto;
    border: 1px solid black;
    min-height: 50vh;
    padding: 5px;
    display: flex;
    flex-direction: column;
`

export const StoryArea = styled.div`
    flex-grow: 1;
`

export const UserInputArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const EntryBox = styled.input`
    align-self: flex-end;
    flex: 0 1 80%;
    height: 24px;
    min-width: 1px;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
`

export const SendButton = styled.button`
    align-self: flex-end;
    flex: 0 1 15%;
    height: 30px;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
`
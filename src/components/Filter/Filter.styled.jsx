import styled from '@emotion/styled';

export const FilterTitle = styled.h2`
    font-size: 30px;
    color: rgb(78, 41, 20);
    text-shadow: 2px 2px 2px rgb(255, 203, 173);
`
export const Filterinput = styled.input`
    width: 275px;
    margin-bottom: 10px;
    padding: 4px;
    border: 0.3px solid rgb(78, 41, 20);
    border-radius: 3px;
    background-color: rgb(255, 244, 234);
    font-size: 18px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
        &:focus, :hover {
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
}
    
`
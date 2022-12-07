import styled from '@emotion/styled';

export const FormTitle = styled.h1`
    font-size: 35px;
    color: rgb(78, 41, 20);
    text-shadow: 2px 2px 2px rgb(255, 203, 173);;
`
export const PhonebookForm = styled.form`
    display: flex;
    flex-direction: column;

    width: 500px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: rgb(255, 203, 173);
    color: rgb(78, 41, 20);
`
export const FormLabel = styled.label`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`
export const FormInput = styled.input`
    width: 250px;
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
export const FormBtn = styled.button`
    width: 125px;
    padding: 10px 15px;
    margin-top: 20px;
    background-color: rgb(78, 41, 20);
    color: white;
    border: none;
    border-radius: 15px;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
        background-color: rgb(253, 232, 212);
        color: rgb(78, 41, 20);
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
        }
`
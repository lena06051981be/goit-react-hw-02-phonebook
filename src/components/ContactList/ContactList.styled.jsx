import styled from '@emotion/styled';

export const ContactsTitle = styled.h2`
    margin-left: 20px;
    font-size: 30px;
    color: rgb(78, 41, 20);
    text-shadow: 2px 2px 2px rgb(255, 203, 173);
`

export const ContactList = styled.ul`
    max-width: 420px;
    margin-left: 20px;
    padding: 0;
    list-style: inside;
    font-size: 20px;
    color: rgb(78, 41, 20);
    background-color: tomato;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactBtn = styled.button`
    width: 100px;
    padding: 5px 10px;
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
// export const ContactItem = styled.li`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;  
// `


// export const ContactsWrap = styled.div` 
// width: 400px;
// `;

// export const ContactListStyled=styled.ul` display: flex;
// padding: 0px;
// flex-direction: column;
// /* color: #000; */
// gap: 10px;
// `;

// export const ContactItem=styled.li` display: flex;
// justify-content: space-between;
// aline-items: center;
// `;

// export const ContactItemText=styled.p` margin: 0px auto 0px 0px;
// `;
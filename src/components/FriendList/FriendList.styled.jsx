import styled from '@emotion/styled';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 20px;
  padding: 8px;
  /* background-color: #6d9886; */
  /* border: 2px solid #393e46; */
  border-radius: 4px;
`;

export const FriendsItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 85px;
  width: 320px;
  padding: 4px;
  /* background-color: #f2e7d5; */
  border: 1px solid rgb(112, 109, 109);
  border-radius: 18px;
  cursor: pointer;
  /* box-shadow: 0px 0px 2px 4px rgba(129, 129, 129, 0.4); */
  transition: box-shadow 150ms ;
  :hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
  }
`;

export const FriendsStatus = styled.span`
  display: block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.status ? 'green' : 'red';
  }};
`;

export const FriendsName = styled.p`
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #393e46;
`;
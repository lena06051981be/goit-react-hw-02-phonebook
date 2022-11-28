import styled from '@emotion/styled';

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
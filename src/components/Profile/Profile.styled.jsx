import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
   /* max-width: 40%; */
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  border-radius: 6px;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  padding-bottom: 10px;
 `

export const AvatarImg = styled.img`
  display: flex;
  max-width: 50%;
  border-radius: 50%;
  border: 1px dashed grey;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`
export const Username = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  /* font-weight: bold; */
  font-weight: 700;
  /* color: #8a8a8a; */
  letter-spacing: 0.03em;
  margin: 0.5rem;
`
export const UserNickname = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  color: #8a8b8e;
  letter-spacing: 0.03em;
`
export const UserLocation = styled.p`
  font-family: 'Roboto', sans-serif;
  margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
`
export const Stats = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;  
`
export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d3d5e3; 
  border-right: 1px solid #d3d5e3;  
  background-color: rgba(241, 241, 241, 0.833);  
`
export const StatsLabel = styled.span`
  margin-bottom: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #393e46;
`;

export const StatsQuantity = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #5f6773;
`;


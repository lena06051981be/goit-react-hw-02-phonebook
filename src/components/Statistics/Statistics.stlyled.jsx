import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  padding: 20px 0px;
  width: 578px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;  
`;

export const StatisticTitle = styled.h2`
  margin: 30px 0px;
  padding: 0px 70px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 34px;
`;

export const StatisticList = styled.ul`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`;

export const StatisticItem = styled.li`
  width: calc(100% / 5);
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-shadow: 0 0 1px #d3d3d3;
  box-shadow: 0 0 2px rgb(91, 89, 89);
  transition: text-shadow 150ms, color 150ms ;
  :hover {
    color: #fff;
    /* text-shadow: 0px 2.5px 0px #5c5c5c;S */
  }
`;

export const StatisticLabel = styled.span`
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 700;  
`;

export const StatisticPercentage = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: bold;
`;

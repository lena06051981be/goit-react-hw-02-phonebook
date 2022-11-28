import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  min-width: 578px;
  /* border-collapse: collapse; */
  width: 60%;
  margin: 15px auto;

  font-size: 16px;
  line-height: 2.5;

  border-collapse: separate;
  border-spacing: 0px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`;

export const TableHead = styled.thead`
  color: #ffffff;
  background-color: rgb(3, 210, 210);
  text-transform: uppercase;
  text-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  /* border-top-left-radius: 4px;
  border-top-right-radius: 24px; */
`;

export const TableTitle = styled.th`
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid #ffffff;
  color: #ffffff;
`;
export const TableItem = styled.td`
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
  border: 2px solid #ffffff;
`;
export const TableRow = styled.tr`
  /* color: grey; */
  text-align: center;
  text-transform: capitalize;
  :nth-of-type(even) {
    background-color: rgb(190, 231, 247);
  }
`;
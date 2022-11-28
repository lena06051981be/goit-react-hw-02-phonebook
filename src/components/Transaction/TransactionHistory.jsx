import PropTypes from 'prop-types';
import {
    TransactionsTable,
    TableHead,
    TableTitle,
    TableItem,
    TableRow,
  } from './TransactionHistory.styled';

export const TransactionHistory = ({ transaction }) => {
    return (
        <TransactionsTable className="transaction-history">
            <TableHead>
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </TableHead>
            <tbody>
                {transaction.map(item => (
                    <TableRow key={item.id}>
                        <TableItem>{item.type}</TableItem>
                        <TableItem>{item.amount}</TableItem>
                        <TableItem>{item.currency}</TableItem>
                    </TableRow>                    
                ))}
            </tbody>  
        </TransactionsTable>
    )
}


TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const TransactionHistory =({transaction}) => {
    return (
        <div>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map(item => (
                    <tr>
                        <td>{item.type}</td>
                        <td></td>
                        <td></td>
                    </tr>                    
                ))}

            </tbody>
            

        </div>


    )
}
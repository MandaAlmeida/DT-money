import { PriceHighLight, TableContainer } from "./styled";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Table() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <TableContainer>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighLight variant={transaction.type}>
                  {transaction.type === "outcome" && "- "}
                  {priceFormatter.format(transaction.price)}
                </PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

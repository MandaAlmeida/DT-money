import { PriceHighLight, TableContainer } from "./styled";

export function Table() {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighLight variant="outcome">- R$ 12.000,00</PriceHighLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>
            <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
      </tbody>
    </TableContainer>
  );
}

import { Summary } from "../../components/Summary";
import { Header } from "../../components/header/index";
import { SearchForm } from "./components/SearchForm";
import { Table } from "./components/table";
import { TranactionsContainer } from "./styled";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TranactionsContainer>
        <SearchForm />
        <Table />
      </TranactionsContainer>
    </div>
  );
}

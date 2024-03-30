import { MagnifyingGlass, X } from "phosphor-react";
import { ButtonClear, ButtonSubmit, SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

/**
 * Por que um componente renderiza?
 * - Hooks changed (mudou estado, context, reducer);
 * - Props changed (mudou propriedades);
 * - Parent rerendered (componente pai renderizou);
 *
 * Qual o fluxo de renderização?
 * 1. O React recria o HTML da interface daquele componente.
 * 2. Compara a versão do HTML recriada com a versão anterior
 * 3. SE mudou alguma coisa, ele reescreve o HTML na tela.
 *
 * Memo:
 * 0. Hooks changed, Props changed (deep comparison) 'mudou algo?'
 * 0.1 Comparar com a versão anterior dos hooks e props
 * 0.2 SE mudou algo, ele vai permitir a nova rederização
 *
 */

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const { register, handleSubmit, reset, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  const query = watch("query");
  const isSubmitDisabled = !query;

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <ButtonClear
        type="button"
        onClick={() => {
          if (query.length !== 0) {
            reset({ query: "" });
            fetchTransactions();
          }
        }}
        disabled={isSubmitDisabled}
      >
        <X size={20} weight="bold" />
      </ButtonClear>
      <ButtonSubmit type="submit" disabled={isSubmitDisabled}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </ButtonSubmit>
    </SearchFormContainer>
  );
}

export const SeachForm = memo(SearchFormComponent);

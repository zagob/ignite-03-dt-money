import { TagChevron } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  PriceHighlightMobile,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableMobile,
} from "./styles";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === "outcome" && "- "}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>

        {transactions?.map((transaction) => (
          <TransactionsTableMobile key={transaction.id}>
            <h2>{transaction.description}</h2>
            <PriceHighlightMobile variant={transaction.type}>
              {transaction.type === "outcome" && "- "}
              {priceFormatter.format(transaction.price)}
            </PriceHighlightMobile>
            <div>
              <span>
                <TagChevron />
                {transaction.category}
              </span>
              <time>
                {dateFormatter.format(new Date(transaction.createdAt))}
              </time>
            </div>
          </TransactionsTableMobile>
        ))}
      </TransactionsContainer>
    </>
  );
}

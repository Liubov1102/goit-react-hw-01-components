
import { Transaction } from 'components/TransactionHistory/Transaction';
import { TransactionTable, TransactionHead,TransactionItem, TransactionBody, TransHead } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable >
      <TransactionHead>
        <TransHead>
          <TransactionItem>Type</TransactionItem>
          <TransactionItem>Amount</TransactionItem>
          <TransactionItem>Currency</TransactionItem>
        </TransHead>
      </TransactionHead>
      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency} />
        ),
        )
        }       
      </TransactionBody>
    </TransactionTable>
  );
};

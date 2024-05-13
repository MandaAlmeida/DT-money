import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query: string) => void;
  createTransaction: (data: CreateTransactionInput) => void;
}

interface TransactionsProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const saveTransactions = useCallback((data: Transaction[]) => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, []);

  const fetchTransactions = useCallback((query?: string) => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      const transactions: Transaction[] = JSON.parse(storedTransactions);
      if (query) {
        const filteredTransactions: Transaction[] = transactions.filter(
          (transaction) =>
            transaction.description.toLowerCase().includes(query.toLowerCase())
        );
        setTransactions(filteredTransactions);
      } else {
        setTransactions(transactions);
      }
    }
  }, []);

  const createTransaction = useCallback(
    (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;
      const newTransaction: Transaction = {
        id: Date.now(), // Gere um ID único para a transação
        description,
        price,
        category,
        type,
        createdAt: new Date().toISOString(),
      };

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      saveTransactions(updatedTransactions);
    },
    [transactions, saveTransactions]
  );

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

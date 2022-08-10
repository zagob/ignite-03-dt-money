import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface TransactionsProps {
  id: number;
  type: "income" | "outcome";
  category: string;
  description: string;
  createdAt: string;
  price: number;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: TransactionsProps[];
  fetchTransaction: (query?: string) => Promise<void>;
  onCreateTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<TransactionsProps[]>([]);

  const fetchTransaction = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransaction(response.data);
  }, []);

  const onCreateTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;
      const response = await api.post("/transactions", {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });

      setTransaction((oldTransaction) => [...oldTransaction, response.data]);
    },
    []
  );

  useEffect(() => {
    fetchTransaction();
  }, []);
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransaction, onCreateTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

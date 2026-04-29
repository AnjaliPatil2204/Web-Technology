import { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expense;

  return (
    <div className="container">
      <h2>💰 Expense Tracker</h2>

      <div className="balance">
        <h2>Balance: ₹{balance}</h2>
        <div className="inc-exp">
          <p className="income">Income: ₹{income}</p>
          <p className="expense">Expense: ₹{Math.abs(expense)}</p>
        </div>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter amount (+ income, - expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      <h3>History</h3>

      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount > 0 ? "plus" : "minus"}>
            {t.text} <span>₹{t.amount}</span>
            <button onClick={() => deleteTransaction(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
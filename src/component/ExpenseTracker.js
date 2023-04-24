import React, { useState } from "react";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenses([
      ...expenses,
      { id: productId, name: productName, value: parseInt(productValue) },
    ]);

    setProductId("");
    setProductName("");
    setProductValue("");
  };

  const handleDelete = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(filteredExpenses);
  };

  const totalValue = expenses.reduce(
    (value, expense) => value + expense.value,
    0
  );

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productValue">Product Value:</label>
          <input
            type="number"
            id="productValue"
            value={productValue}
            onChange={(e) => setProductValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Expense
        </button>
      </form>
      <div className="total-value">
        <h2>TOTAL VALUE</h2>
        <p>{totalValue}</p>
      </div>
      <table className="expense-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.name}</td>
              <td>{expense.value}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTracker;

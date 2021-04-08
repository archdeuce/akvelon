import { useState } from "react";
import { generate } from "shortid";
import Title from "../../components/Title";
import "./CreateInvoiceView.css";

export default function CreateInvoiceView({ onSaveBtn }) {
  const [number, setNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [supplyDate, setSupplyDate] = useState("");
  const [comment, setComment] = useState("");

  const reformatDate = (date) => {
    const s = date.split("-");
    return s[2] + "-" + s[1] + "-" + s[0];
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSaveBtn({
      id: generate(),
      number: number,
      date_created: reformatDate(invoiceDate),
      date_supplied: reformatDate(supplyDate),
      comment: comment,
    });
  };

  const changeHandler = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case "invoiceNumber":
        setNumber(value);
        break;
      case "invoiceDate":
        setInvoiceDate(value);
        break;
      case "supplyDate":
        setSupplyDate(value);
        break;
      case "comment":
        setComment(value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Title title="Create Invoice" />

      <div className="container">
        <form
          className="createInvoceForm"
          action="URL"
          onSubmit={submitHandler}
        >
          <table className="createInvoceTable">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="invoiceNumber">Number:</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    placeholder="INV-000002"
                    autoComplete="off"
                    minLength="3"
                    value={number}
                    onChange={changeHandler}
                    required
                  ></input>
                </td>
                <td>
                  <label htmlFor="invoiceDate">Invoice Date:</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    placeolder="Select date"
                    value={invoiceDate}
                    onChange={changeHandler}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="supplyDate">Supply Date:</label>
                  <input
                    type="date"
                    name="supplyDate"
                    placeholder="Select date"
                    value={supplyDate}
                    onChange={changeHandler}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td colSpan="2">
                  <label htmlFor="comment">Comment:</label>
                  <textarea
                    rows="4"
                    name="comment"
                    maxLength="160"
                    value={comment}
                    onChange={changeHandler}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn saveBtn">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

import Title from "../../components/Title";
import Actions from "../../components/Actions";
import "./MainView.css";

export default function MainView({ invoices, onAddButton, onDelete }) {
  return (
    <>
      <Title title="Invoices" />
      <Actions onAddButton={onAddButton} />

      <div className="container">
        <table className="invoicesTable">
          <thead>
            <tr>
              <th>Create</th>
              <th>No</th>
              <th>Supply</th>
              <th>Comment</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map(
              ({ id, number, date_created, date_supplied, comment }, index) => (
                <tr key={index}>
                  <td>{date_created}</td>
                  <td className="invoice-no">{number}</td>
                  <td>{date_supplied}</td>
                  <td>{comment}</td>
                  <td>
                    <button
                      name="removeBtn"
                      className="removeBtn"
                      type="button"
                      onClick={() => onDelete(id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

import "./Actions.css";

export default function Actions({ onAddButton }) {
  return (
    <div className="container">
      <h3>Actions</h3>
      <button className="btn addBtn" onClick={onAddButton}>
        Add new
      </button>
    </div>
  );
}

import "./App.css";
import * as api from "./services/invoice-api";
import { useState, useEffect } from "react";
import MainView from "./views/MainView";
import CreateInvoiceView from "./views/CreateInvoiceView";

function App() {
  const [invoices, setInvoices] = useState([{}]);
  const [isShowInvoices, setIsShowInvoices] = useState(true);
  const [isCreateInvoices, setIsCreateInvoices] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    api.fetchInvoices().then((invoices) => {
      setInvoices(invoices);
    });
  };

  const onAddButton = () => {
    setIsShowInvoices(false);
    setIsCreateInvoices(true);
  };

  const onSaveBtn = (invoice) => {
    api.pushInvoice(invoice).then(() => {
      fetchData();
    });

    setIsShowInvoices(true);
    setIsCreateInvoices(false);
  };

  const onDelete = (invoiceId) => {
    api.deleteInvoiceById(invoiceId).then(() => {
      fetchData();
    });
  };

  return (
    <div className="App">
      {isCreateInvoices && <CreateInvoiceView onSaveBtn={onSaveBtn} />}

      {isShowInvoices && (
        <MainView
          invoices={invoices}
          onAddButton={onAddButton}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

export default App;

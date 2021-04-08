const BASE_URL = "http://localhost:3000";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchInvoices() {
  return fetchWithErrorHandling(`${BASE_URL}/invoices`);
}

export function pushInvoice(invoice) {
  const config = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invoice),
  };

  return fetchWithErrorHandling(`${BASE_URL}/invoices/`, config);
}

export function fetchInvoiceById(id) {
  return fetchWithErrorHandling(`${BASE_URL}/invoices/${id}`);
}

export function deleteInvoiceById(id) {
  console.log("deleteInvoiceById -> id", id);
  const config = { method: "delete" };

  return fetchWithErrorHandling(`${BASE_URL}/invoices/${id}`, config);
}

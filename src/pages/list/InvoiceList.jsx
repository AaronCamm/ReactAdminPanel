import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { invoiceColumns } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const InvoiceList = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Invoices</span>
        </div>
        <Link to="/invoices/new">
          <div className="addicon">
            <AddIcon />
          </div>
        </Link>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="invoices"
          columns={invoiceColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default InvoiceList;

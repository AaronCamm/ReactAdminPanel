import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { invoiceColumns } from "../../columns/columnData";

const InvoiceList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="bodyContainer">
          <div className="backing">
            <div className="widget">
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
                <Datatable db="invoices" columns={invoiceColumns} className="datatable" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;

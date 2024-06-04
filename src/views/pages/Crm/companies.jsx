import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CompaniesModal from '../../../components/modelpopup/CompaniesModal';
import AddNotes from '../../../components/modelpopup/Crm/AddNotes';
import CompaniesGrid from './CompaniesGrid';
import CompaniesHeader from './CompaniesHeader';
import FilterFields from './FilterFields';
import CompaniesTable from './CompaniesTable';
import CompanyDetails from './CompanyDetails';
import { getCompanies, deleteCompany } from '../../../apiService';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [fieldInputs, setFieldInputs] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [inputValueThree, setInputValueThree] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewType, setViewType] = useState('table');

  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await getCompanies();
      setCompanies(data);
      setFilteredCompanies(data);
    };

    fetchCompanies();
  }, []);

  const handleSearch = () => {
    const filtered = companies.filter(company => {
      return (
        (inputValue ? company.name.toLowerCase().includes(inputValue.toLowerCase()) : true) &&
        (inputValueTwo ? company.email.toLowerCase().includes(inputValueTwo.toLowerCase()) : true) &&
        (inputValueThree ? company.phone_number.toLowerCase().includes(inputValueThree.toLowerCase()) : true)
      );
    });
    setFilteredCompanies(filtered);
  };

  const handleEdit = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleAddCompany = () => {
    setSelectedCompany(null);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedCompany) {
      await deleteCompany(selectedCompany.id);
      const updatedCompanies = companies.filter(company => company.id !== selectedCompany.id);
      setCompanies(updatedCompanies);
      setFilteredCompanies(updatedCompanies);
      setSelectedCompany(null);
    }
  };

  const handleSave = async () => {
    const data = await getCompanies();
    setCompanies(data);
    setFilteredCompanies(data);
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="d-flex">
          <div>
            <h2 className="table-avatar d-flex align-items-center table-padding">
              <Link to="#" className="company-img" onClick={() => handleSelectCompany(record)}>
                <img src={record.profile_image || 'default-image-path'} alt="UserImage" />
              </Link>
              <Link to="#" className="profile-split" onClick={() => handleSelectCompany(record)}>{record.name}</Link>
            </h2>
          </div>
        </div>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label">
          <Link to="#" className={text === "Inactive" ? "btn btn-white btn-sm badge-outline-danger status-color-dg" :
            "btn btn-white btn-sm badge-outline-success status-color"}> {text} </Link>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action text-end">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#add_company"
              onClick={() => handleEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_company"
              onClick={() => setSelectedCompany(record)}
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
            <Link className="dropdown-item" to="#" onClick={() => handleSelectCompany(record)}>
              <i className="fa-regular fa-eye"></i> Preview
            </Link>
            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#add_notes" >
              <i className="la la-file-prescription"></i> Notes
            </Link>
          </div>
        </div>
      ),
    },
  ];

  if (selectedCompany) {
    return <CompanyDetails company={selectedCompany} onBack={() => setSelectedCompany(null)} />;
  }

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <CompaniesHeader 
          setViewType={setViewType}
          fieldInputs={fieldInputs}
          setFieldInputs={setFieldInputs}
          handleAddCompany={handleAddCompany}
        />
        <FilterFields 
          fieldInputs={fieldInputs}
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputValueTwo={inputValueTwo}
          setInputValueTwo={setInputValueTwo}
          inputValueThree={inputValueThree}
          setInputValueThree={setInputValueThree}
          handleSearch={handleSearch}
        />
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              {viewType === 'table' ? (
                <CompaniesTable columns={columns} data={filteredCompanies} />
              ) : (
                <CompaniesGrid companies={filteredCompanies} />
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <CompaniesModal
          company={selectedCompany}
          onSave={handleSave}
        />
      )}
      <AddNotes />
      <div className="modal fade" id="delete_company" tabIndex="-1" aria-labelledby="delete_companyLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="delete_companyLabel">Delete Company</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this company?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;

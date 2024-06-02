import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';

const DealsModal = () => {

    const options = [
        { value: 'select', label: 'Select' },
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'calls', label: 'Calls' },
      ];
      
      const statusOptions = [
        { value: 'select', label: 'Select' },
        { value: 'open', label: 'Open' },
        { value: 'lost', label: 'Lost' },
        { value: 'won', label: 'Won' },
      ];
      
      const currencyOptions = [
        { value: 'select', label: 'Select' },
        { value: 'dollar', label: '$' },
        { value: 'euro', label: '€' },
      ];
      
      const userOptions = [
        { value: 'select', label: 'Select' },
        { value: 'barryCuda', label: 'Barry Cuda' },
        { value: 'tressaWexler', label: 'Tressa Wexler' },
      ];
      
      const priorityOptions = [
        { value: 'select', label: 'Select' },
        { value: 'high', label: 'High' },
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
      ];
      
      const fieldOptions = [
        { value: 'allFields', label: 'All Fields' },
        { value: 'contact', label: 'Contact' },
        { value: 'company', label: 'Company' },
      ];
  return (


    <div>
  {/* Add Deals */}
  <div className="modal custom-modal fade custom-modal-two modal-padding" id="add_deals" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header header-border justify-content-between p-0">
          <h5 className="modal-title">Add New Deals</h5>
          <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <form action="/deals">
            <div className="contact-input-set">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Deal Name <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6 pipeline-add-col">
                  <div className="input-block mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="col-form-label">Pipeline <span className="text-danger">*</span></label>
                      <Link to="#" className="add-new add-pipeline-btn"><i className="la la-plus-circle me-2" />Add New</Link>
                    </div>
                    <Select className="select" options={options} />

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status <span className="text-danger">*</span></label>
                    <Select className="select" options={statusOptions} />

                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Deal Value<span className="text-danger"> *</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                    <Select className="select" options={currencyOptions} />

                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Period <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>	
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Period Value <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>										
                <div className="col-md-12">
                  <div className="input-block tag-with-img mb-3">
                    <label className="col-form-label">Contact <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" name="Label" defaultValue="James, Darlee Robertson" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Project <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox2" type="text" data-role="tagsinput" name="Label" defaultValue="Divine dran" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Due Date <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>	
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Expected Closing Date <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>	
                <div className="col-md-12">
                  <div className="input-block tag-with-img mb-3">
                    <label className="col-form-label">Assignee <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox3" type="text" data-role="tagsinput" name="Label" defaultValue="James" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Tags <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox4" type="text" data-role="tagsinput" name="Label" defaultValue="Label, Label" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Follow-up date <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>	
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Source <span className="text-danger">*</span></label>
                    <Select className="select" options={userOptions} />

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Priority <span className="text-danger">*</span></label>
                    <Select className="select" options={priorityOptions} />

                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows={5} defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12 text-end form-wizard-button">
                  <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                  <button className="btn btn-primary" type="submit">Save Deal</button>
                </div>
              </div>									
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Deals */}
  {/* Edit Deals */}
  <div className="modal custom-modal fade custom-modal-two modal-padding" id="edit_deals" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header header-border justify-content-between p-0">
          <h5 className="modal-title">Edit Deals</h5>
          <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <form action="/deals">
            <div className="contact-input-set">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Deal Name <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="Adams" />
                  </div>
                </div>
                <div className="col-md-6 pipeline-add-col">
                  <div className="input-block mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="col-form-label">Pipeline <span className="text-danger">*</span></label>
                      <Link to="#" className="add-new add-pipeline-btn"><i className="la la-plus-circle me-2" />Add New</Link>
                    </div>
                    <Select className="select" options={options} />

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Status <span className="text-danger">*</span></label>
                    <Select className="select" options={statusOptions} />

                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Deal Value<span className="text-danger"> *</span></label>
                    <input className="form-control" type="text" defaultValue={5} />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Currency <span className="text-danger">*</span></label>
                    <Select className="select" options={currencyOptions} />

                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Period <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue />
                  </div>
                </div>	
                <div className="col-lg-3 col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Period Value <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue={10} />
                  </div>
                </div>										
                <div className="col-md-12">
                  <div className="input-block tag-with-img mb-3">
                    <label className="col-form-label">Contact <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox5" type="text" data-role="tagsinput" name="Label" defaultValue="James, Darlee Robertson" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Project <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox6" type="text" data-role="tagsinput" name="Label" defaultValue="Divine dran" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Due Date <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="5 Mar 2024" />
                  </div>
                </div>	
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Expected Closing Date <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="10 Mar 2024" />
                  </div>
                </div>	
                <div className="col-md-12">
                  <div className="input-block tag-with-img mb-3">
                    <label className="col-form-label">Assignee <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox7" type="text" data-role="tagsinput" name="Label" defaultValue="James" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Tags <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox8" type="text" data-role="tagsinput" name="Label" defaultValue="Label, Label" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Follow-up date <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="5 Mar 2024" />
                  </div>
                </div>	
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Source <span className="text-danger">*</span></label>
                    <Select className="select" options={userOptions} />

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Priority <span className="text-danger">*</span></label>
                    <Select className="select" options={priorityOptions} />
\
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows={5} defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12 text-end form-wizard-button">
                  <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              </div>									
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Deals */}
  {/* Delete Deals */}
  <div className="modal custom-modal fade" id="delete_deals" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="success-message text-center">
            <div className="success-popup-icon bg-danger">
              <i className="la la-trash-restore" />
            </div>
            <h3>Are you sure, You want to delete</h3>
            <p>Deal ”Collins” from your Account</p>
            <div className="col-lg-12 text-center form-wizard-button">
              <Link to="#" className="button btn-lights" data-bs-dismiss="modal">Not Now</Link>
              <Link to="/deals" className="btn btn-primary" data-bs-dismiss="modal">Okay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Deals */}
  {/* Export */}
  <div className="modal custom-modal fade modal-padding" id="export" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header header-border justify-content-between p-0">
          <h5 className="modal-title">Export</h5>
          <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <form action="/deals">
            <div className="row">
              <div className="col-md-12">
                <div className="input-block mb-3">
                  <h5 className="mb-3">Export</h5>
                  <div className="status-radio-btns d-flex">
                    <div className="people-status-radio">
                      <input type="radio" className="status-radio" id="pdf" name="export-type" defaultChecked />
                      <label htmlFor="pdf">Person</label>
                    </div>
                    <div className="people-status-radio">
                      <input type="radio" className="status-radio" id="excel" name="export-type" />
                      <label htmlFor="excel">Organization</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h4 className="mb-3">Filters</h4>
                <div className="input-block mb-3">
                  <label className="col-form-label">Fields <span className="text-danger">*</span></label>
                  <Select className="select" options={fieldOptions} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">From Date <span className="text-danger">*</span></label>
                  <div className="cal-icon">									
                    <input className="form-control floating datetimepicker" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-block mb-3">
                  <label className="col-form-label">To Date <span className="text-danger">*</span></label>
                  <div className="cal-icon">
                    <input className="form-control floating datetimepicker" type="text" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-end form-wizard-button">
                <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                <button className="btn btn-primary" type="submit">Export Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Export */}
</div>




  )
}

export default DealsModal
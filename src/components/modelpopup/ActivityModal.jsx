import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from 'antd';
import { TagsInput } from 'react-tag-input-component';


dayjs.extend(customParseFormat);


const ActivityModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [owner] = useState(["Darlee Robertson"]);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    const options1 = [
        { label: 'Minutes', value: 'Minutes' },
        { label: 'Hours', value: 'Hours' }
      ];
      
      const options2 = [
        { label: 'Select', value: 'Select' },
        { label: 'Monty Beer', value: 'Monty Beer' },
        { label: 'Itzel', value: 'Itzel' },
        { label: 'Andrew', value: 'Andrew' }
      ];
      
      const options3 = [
        { label: 'Select', value: 'Select' },
        { label: 'Collins', value: 'Collins' },
        { label: 'Konopelski', value: 'Konopelski' },
        { label: 'Adams', value: 'Adams' }
      ];
      
      const options4 = [
        { label: 'Darlee Robertson', value: 'Darlee Robertson' },
        { label: 'Sharon Roy', value: 'Sharon Roy' },
        { label: 'Vaughan', value: 'Vaughan' }
      ];
      
      const options5 = [
        { label: 'NovaWaveLLC', value: 'NovaWaveLLC' },
        { label: 'SilverHawk', value: 'SilverHawk' },
        { label: 'SummitPeak', value: 'SummitPeak' }
      ];
      
      const options6 = [
        { label: 'Minutes', value: 'Minutes' },
        { label: 'Hours', value: 'Hours' }
      ];
      
      const options7 = [
        { label: 'Monty Beer', value: 'Monty Beer' },
        { label: 'Itzel', value: 'Itzel' },
        { label: 'Andrew', value: 'Andrew' }
      ];
      
      const options8 = [
        { label: 'Collins', value: 'Collins' },
        { label: 'Konopelski', value: 'Konopelski' },
        { label: 'Adams', value: 'Adams' }
      ];
      
      const options9 = [
        { label: 'Darlee Robertson', value: 'Darlee Robertson' },
        { label: 'Sharon Roy', value: 'Sharon Roy' },
        { label: 'Vaughan', value: 'Vaughan' }
      ];
      
      const options10 = [
        { label: 'NovaWaveLLC', value: 'NovaWaveLLC' },
        { label: 'SilverHawk', value: 'SilverHawk' },
        { label: 'SummitPeak', value: 'SummitPeak' }
      ];
      
      const options11 = [
        { label: 'All Fields', value: 'All Fields' },
        { label: 'contact', value: 'contact' },
        { label: 'Company', value: 'Company' }
      ];


      const [selects, setSelects] = useState([{ id: 1, value: '' }]);
      const [selectsTwo, setSelectsTwo] = useState([{ id: 1, value: '' }]);
      const [selectsThree, setSelectsThree] = useState([{ id: 1, value: '' }]);

 

  const handleAddSelect = () => {
    const newId = selects.length + 1;
    const newSelect = { id: newId, value: '' };
    setSelects([...selects, newSelect]);
  };

  const handleAddSelectTwo = () => {
    const newId = selectsTwo.length + 1;
    const newSelect = { id: newId, value: '' };
    setSelectsTwo([...selectsTwo, newSelect]);
  };
  const handleAddSelectThree = () => {
    const newId = selectsThree.length + 1;
    const newSelect = { id: newId, value: '' };
    setSelectsThree([...selectsThree, newSelect]);
  };
  
  return (
   
   <div>
  {/* Add Activity */}
  <div className="modal custom-modal fade custom-modal-two modal-padding" id="add_activity" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header header-border justify-content-between p-0">
          <h5 className="modal-title">Add New Activity</h5>
          <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <form action="/activities">
            <div className="contact-input-set">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Title <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3 activity-date-picker">
                    <label className="col-form-label">Due Date <span className="text-danger">*</span></label>
                    <div className="cal-icon">
                    <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                type="date"
                className="form-control floating datetimepicker"
                dateFormat="dd-MM-yyyy"
              />                          </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="activity-date-picker input-block mb-3">
                    <label className="col-form-label">Time <span className="text-danger">*</span></label>
                    <div className="cal-icon time-icon">
                    <TimePicker
                      className="form-control timepicker"
                      bordered={false}
                      defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                  />     
                   <span className="cus-icon"><i className="feather-clock" /></span>
                    </div>
                  </div>									
                </div>
                <div className="col-md-6">
                  <div className="activity-date-picker input-block mb-3">
                    <label className="col-form-label">Reminder <span className="text-danger">*</span></label>
                    <div className="cal-icon reminder">
                      <input type="text" className="form-control" />
                      <span className="cus-icon"><i className="feather-clock" /></span>
                    </div>
                  </div>									
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <div className="input-block mb-3 d-flex align-items-center">
                    <div className="w-100">
                    <Select options={options1} placeholder={"select"}/>

                    </div>
                    <span className="use-before">Before Use</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Owner <span className="text-danger">*</span></label>
                    <Select options={options2} placeholder={"select"}/>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block tag-with-img mb-3">
                    <label className="col-form-label">Guests <span className="text-danger">*</span></label>
                    {/* <input className="input-tags form-control" id="inputBox4" type="text" data-role="tagsinput" name="Label" defaultValue="Darlee Robertson" /> */}
                    <TagsInput
                                                        tags={owner}
                                                        value={owner}
                                                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows={5} defaultValue={""} />
                  </div>
                </div>
                {selects.map(select => (
                <div className="col-md-12 deals-add-col">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="col-form-label">Deals <span className="text-danger">*</span></label>
                          <Link to="#" className="add-new add-new-deal" onClick={handleAddSelect}><i className="la la-plus-circle me-2" />Add New</Link>
                        </div>
                        <Select options={options3} placeholder={"select"}/>


                      </div>
                    </div>
                  </div>
                </div>
                ))}
                
                {selectsTwo.map(select => (
                <div className="col-md-12 contact-add-col">
                  <div className="input-block mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="col-form-label">Contacts <span className="text-danger">*</span></label>
                      <Link to="#" className="add-new add-new-contact" onClick={handleAddSelectTwo}><i className="la la-plus-circle me-2" />Add New</Link>
                    </div>
                    <Select options={options4} placeholder={"select"}/>

                  </div>
                </div>
                ))}
                 {selectsThree.map(select => (
                <div className="col-md-12 company-add-col">
                  <div className="input-block mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="col-form-label">Company <span className="text-danger">*</span></label>
                      <Link to="#" className="add-new add-new-company" onClick={handleAddSelectThree}><i className="la la-plus-circle me-2" />Add New</Link>
                    </div>
                    <Select options={options5} placeholder={"select"}/>

                  </div>
                </div>
                 ))}
                <div className="col-lg-12 text-end form-wizard-button">
                  <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                  <button className="btn btn-primary" type="submit">Save Activity</button>
                </div>
              </div>									
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Activity */}
  {/* Edit Activity */}
  <div className="modal custom-modal fade custom-modal-two modal-padding" id="edit_activity" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header header-border justify-content-between p-0">
          <h5 className="modal-title">Edit Activity</h5>
          <button type="button" className="btn-close position-static" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body p-0">
          <form action="/activities">
            <div className="contact-input-set">
              <div className="row">
                <div className="col-md-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Title <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="We scheduled a meeting for next week" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block mb-3 activity-date-picker">
                    <label className="col-form-label">Due Date <span className="text-danger">*</span></label>
                    <div className="cal-icon">
                    <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                type="date"
                className="form-control floating datetimepicker"
                dateFormat="dd-MM-yyyy"
              />                   
               </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="activity-date-picker input-block mb-3">
                    <label className="col-form-label">Time <span className="text-danger">*</span></label>
                    <div className="cal-icon time-icon">
                    <TimePicker
                      className="form-control timepicker"
                      bordered={false}
                      defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                  />                        <span className="cus-icon"><i className="feather-clock" /></span>
                    </div>
                  </div>									
                </div>
                <div className="col-md-6">
                  <div className="activity-date-picker input-block mb-3">
                    <label className="col-form-label">Reminder <span className="text-danger">*</span></label>
                    <div className="cal-icon reminder">
                      <input type="text" className="form-control" />
                      <span className="cus-icon"><i className="feather-clock" /></span>
                    </div>
                  </div>									
                </div>
                <div className="col-lg-6 d-flex align-items-end">
                  <div className="input-block mb-3 d-flex align-items-center">
                    <div className="w-100">
                    <Select options={options6} placeholder={"select"}/>

                    </div>
                    <span className="use-before">Before Use</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Owner <span className="text-danger">*</span></label>
                    <Select options={options7} placeholder={"select"}/>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-block tag-with-img mb-3">
                    <label className="col-form-label">Guests <span className="text-danger">*</span></label>
                    <input className="input-tags form-control" id="inputBox3" type="text" data-role="tagsinput" name="Label" defaultValue="Darlee Robertson" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows={5} defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12 deals-add-col">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="col-form-label">Deals <span className="text-danger">*</span></label>
                          <Link to="#" className="add-new add-new-deal"><i className="la la-plus-circle me-2" />Add New</Link>
                        </div>
                        <Select options={options8} placeholder={"select"}/>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 contact-add-col">
                  <div className="input-block mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="col-form-label">Contacts <span className="text-danger">*</span></label>
                      <Link to="#" className="add-new add-new-contact"><i className="la la-plus-circle me-2" />Add New</Link>
                    </div>
                    <Select options={options9} placeholder={"select"}/>

                  </div>
                </div>
                <div className="col-md-12 company-add-col">
                  <div className="input-block mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="col-form-label">Company <span className="text-danger">*</span></label>
                      <Link to="#" className="add-new add-new-company"><i className="la la-plus-circle me-2" />Add New</Link>
                    </div>
                    <Select options={options10} placeholder={"select"}/>

                  </div>
                </div>
                <div className="col-lg-12 text-end form-wizard-button">
                  <button className="button btn-lights reset-btn" type="reset" data-bs-dismiss="modal">Reset</button>
                  <button className="btn btn-primary" type="submit">Save Activity</button>
                </div>
              </div>									
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Activity */}
  {/* Delete Activity */}
  <div className="modal custom-modal fade" id="delete_activity" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="success-message text-center">
            <div className="success-popup-icon bg-danger">
              <i className="la la-trash-restore" />
            </div>
            <h3>Are you sure, You want to delete</h3>
            <p> Selected Activity from your Account</p>
            <div className="col-lg-12 text-center form-wizard-button">
              <Link to="#" className="button btn-lights" data-bs-dismiss="modal">Not Now</Link>
              <Link to="/pipeline" className="btn btn-primary">Okay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Activity */}
  {/* Delete Pipeline */}
  <div className="modal custom-modal fade" id="delete_stage" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="success-message text-center">
            <div className="success-popup-icon bg-danger">
              <i className="la la-trash-restore" />
            </div>
            <h3>Are you sure, You want to delete</h3>
            <p>Stage ”Inpipeline” from your Account</p>
            <div className="col-lg-12 text-center form-wizard-button">
              <Link to="#" className="button btn-lights" data-bs-dismiss="modal">Not Now</Link>
              <Link to="/activities" className="btn btn-primary " data-bs-dismiss="modal">Okay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Pipeline */}
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
          <form action="/activities">
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
                  <Select options={options11} placeholder={"select"}/>

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

export default ActivityModal
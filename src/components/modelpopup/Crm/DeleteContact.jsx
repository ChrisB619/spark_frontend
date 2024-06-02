import React from 'react'
import { Link } from 'react-router-dom'

const DeleteContact = () => {
  return (
    <div>
    {/* Delete Contact */}
    <div className="modal custom-modal fade" id="delete_contact" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="success-message text-center">
              <div className="success-popup-icon bg-danger">
                <i className="la la-trash-restore" />
              </div>
              <h3>Are you sure, You want to delete</h3>
              <p>Contact ”Sharron Roy” from your Account</p>
              <div className="col-lg-12 text-center form-wizard-button">
                <Link to="#" className="button btn-lights" data-bs-dismiss="modal" >
                  Not Now
                </Link>
                <Link to="#" className="btn btn-primary" data-bs-dismiss="modal">
                  Okay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Delete Contact */}
  </div>
  
  )
}

export default DeleteContact

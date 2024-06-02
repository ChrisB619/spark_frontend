import React, { useState, useEffect } from 'react';
import { createCompany, updateCompany } from '../../apiService';

const CompaniesModal = ({ company, onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone_number: '',
    telephone_number: '',
    website: '',
    about_company: '',
    street_address: '',
    city: '',
    state_province: '',
    zipcode: '',
    country: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    skype: '',
    whatsapp: '',
    instagram: '',
    status: 'Active'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (company) {
      setFormData(company);
    } else {
      setFormData({
        id: '',
        name: '',
        email: '',
        phone_number: '',
        telephone_number: '',
        website: '',
        about_company: '',
        street_address: '',
        city: '',
        state_province: '',
        zipcode: '',
        country: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        skype: '',
        whatsapp: '',
        instagram: '',
        status: 'Active'
      });
    }
  }, [company]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone_number) newErrors.phone_number = 'Phone number is required';
    if (!formData.website) {
      newErrors.website = 'Website is required';
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.website)) {
      newErrors.website = 'Website must be a valid URL';
    }
    if (!formData.status) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      if (formData.id) {
        await updateCompany(formData.id, formData);
      } else {
        await createCompany(formData);
      }
      onSave();
      // Reset form fields
      setFormData({
        id: '',
        name: '',
        email: '',
        phone_number: '',
        telephone_number: '',
        website: '',
        about_company: '',
        street_address: '',
        city: '',
        state_province: '',
        zipcode: '',
        country: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        skype: '',
        whatsapp: '',
        instagram: '',
        status: 'Active'
      });
      // Close modal after save
      const closeModalButton = document.querySelector('#add_company .btn-close');
      if (closeModalButton) {
        closeModalButton.click();
      }
    } catch (error) {
      console.error('Error saving company:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors({ submit: error.response.data.errors });
      } else {
        setErrors({ submit: { general: 'An error occurred. Please try again later.' } });
      }
    }
  };

  return (
    <div className="modal fade" id="add_company" tabIndex="-1" role="dialog" aria-labelledby="add_company" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{formData.id ? 'Edit Company' : 'Add Company'}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`} name="phone_number" value={formData.phone_number} onChange={handleChange} />
                {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
              </div>
              <div className="form-group">
                <label>Telephone Number</label>
                <input type="text" className="form-control" name="telephone_number" value={formData.telephone_number} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input type="text" className={`form-control ${errors.website ? 'is-invalid' : ''}`} name="website" value={formData.website} onChange={handleChange} />
                {errors.website && <div className="text-danger">{errors.website}</div>}
              </div>
              <div className="form-group">
                <label>About Company</label>
                <textarea className="form-control" name="about_company" value={formData.about_company} onChange={handleChange}></textarea>
              </div>
              <div className="form-group">
                <label>Street Address</label>
                <input type="text" className="form-control" name="street_address" value={formData.street_address} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>State/Province</label>
                <input type="text" className="form-control" name="state_province" value={formData.state_province} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Zipcode</label>
                <input type="text" className="form-control" name="zipcode" value={formData.zipcode} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Facebook</label>
                <input type="text" className="form-control" name="facebook" value={formData.facebook} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Twitter</label>
                <input type="text" className="form-control" name="twitter" value={formData.twitter} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>LinkedIn</label>
                <input type="text" className="form-control" name="linkedin" value={formData.linkedin} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Skype</label>
                <input type="text" className="form-control" name="skype" value={formData.skype} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>WhatsApp</label>
                <input type="text" className="form-control" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Instagram</label>
                <input type="text" className="form-control" name="instagram" value={formData.instagram} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select className={`form-control ${errors.status ? 'is-invalid' : ''}`} name="status" value={formData.status} onChange={handleChange}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Closed">Closed</option>
                </select>
                {errors.status && <div className="text-danger">{errors.status}</div>}
              </div>
              {errors.submit && (
                <div className="text-danger">
                  {Object.entries(errors.submit).map(([field, messages]) => (
                    <div key={field}>
                      {field}: {Array.isArray(messages) ? messages.join(', ') : messages}
                    </div>
                  ))}
                </div>
              )}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesModal;

import React from 'react';
import './index.css'

const ProfileSection = () => {
  return (
    <section className="section profile">
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body pt-3">
              {/* Bordered Tabs */}
              <ul className="nav nav-tabs nav-tabs-bordered">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                  >
                    Overview
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-settings"
                  >
                    Settings
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-change-password"
                  >
                    Change Password
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-2">
                <div
                  className="tab-pane fade show active profile-overview"
                  id="profile-overview"
                >
                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Profile Image</div>
                    <div className="col-md-8 col-lg-9">
                      <img
                        className="rounded-circle"
                        src="assets/img/profile-img.jpg"
                        alt="Profile"
                      />
                      <div className="pt-2">
                        <a
                          href="#"
                          className="btn btn-primary btn-sm"
                          title="Upload new profile image"
                        >
                          <i className="bi bi-upload"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger btn-sm"
                          title="Remove my profile image"
                        >
                          <i className="bi bi-trash"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Full Name</div>
                    <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Organization</div>
                    <div className="col-lg-9 col-md-8">Alpha Sigma Phi</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">
                      k.anderson@example.com
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade pt-3" id="profile-settings">
                  {/* Settings Form */}
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="emailNotifications"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Email Notifications
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="changesMade"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="changesMade"
                          >
                            Changes made to your account
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="newProducts"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="newProducts"
                          >
                            Information on new products and services
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="proOffers"
                          />
                          <label className="form-check-label" htmlFor="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="securityNotify"
                            defaultChecked
                            disabled
                          />
                          <label
                            className="form-check-label"
                            htmlFor="securityNotify"
                          >
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                  {/* End settings Form */}
                </div>

                <div className="tab-pane fade pt-3" id="profile-change-password">
                  {/* Change Password Form */}
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="currentPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Current Password
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="currentPassword"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="newPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        New Password
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="newpassword"
                          type="password"
                          className="form-control"
                          id="newPassword"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="renewPassword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Re-enter New Password
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="renewpassword"
                          type="password"
                          className="form-control"
                          id="renewPassword"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Change Password
                      </button>
                    </div>
                  </form>
                  {/* End Change Password Form */}
                </div>
              </div>
              {/* End Bordered Tabs */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

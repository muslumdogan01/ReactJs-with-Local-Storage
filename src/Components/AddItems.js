import React from "react";

const AddItems = ({ setForm, form, saveItem }) => {
  return (
    <div className="container">
      <div className="d-flex flex-column  p-5">
        <h1 className="text-center">Add New Avatar !</h1>
        <span className="input-group-text mt-5">Full name</span>
        <input
          type="text"
          aria-label="First name"
          placeholder="Name"
          className="form-control mt-1"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          aria-label="Last name"
          placeholder="What is your job?"
          className="form-control mt-3"
          value={form.job}
          onChange={(e) => setForm({ ...form, job: e.target.value })}
        />

        <div className="d-flex justify-content-center">
          <button className="btn btn-dark" onClick={saveItem}>
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItems;

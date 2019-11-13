import React, { useState } from "react";

const MemberForm = props => {
  //const [note, setNote] = useState({ title: "", body: "" });
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };


  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Member Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        name="role"
        value={member.role}
        onChange={handleChanges}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default MemberForm;
import React, { useState } from "react";

const MemberForm = props => {
  //const [note, setNote] = useState({ title: "", body: "" });
  const [member, setMember] = useState({ userName: "", email: "", role: "" });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ userName: "", email: "", role: "" });
  };


  return (
    <form onSubmit={submitForm}>
      <label htmlFor="memName">Member Name</label>
      <input
        id="memName"
        type="text"
        name="userName"
        onChange={handleChanges}
        value={member.userName}
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
import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            onChange={onInputChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='student'>Student</option>
            <option value='alumni'>Alumni</option>
            <option value='instructor'>Instructor</option>
            <option value='tl'>Team Lead</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Single
          <input
            type='radio'
            name='civil'
            value='single'
            checked={values.civil === 'single'}
            onChange={onInputChange}
          />

        </label>

        <label>Married
        <input
            type='radio'
            name='civil'
            value='married'
            checked={values.civil === 'married'}
            onChange={onInputChange}
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Hiking
          <input 
          type="checkbox"
          name="hiking"
          checked={values.hobbies.hiking === true}
          onChange={onCheckboxChange}
          />
        </label>

        <label>Reading
          <input 
            type="checkbox"
            name="reading"
            checked={values.hobbies.reading === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Coding
          <input 
            type="checkbox"
            name="coding"
            checked={values.hobbies.coding === true}
            onChange={onCheckboxChange}
          />
        </label>
      </div>
    </form>
  )
}

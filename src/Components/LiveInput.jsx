import React, { useState } from 'react'

function LiveInput() {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <h2>1. Form Handling (Live Input Update)</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: '8px', width: '250px' }}
      />

      <p style={{ marginTop: '10px' }}>
        Your Name: {name}
      </p>
    </div>
  )
}

export default LiveInput
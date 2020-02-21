import React, { useState } from 'react'
import { navigate, Link } from 'gatsby'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const contactForm = ({ latest }) => {
  const [form, setForm] = useState({
    email: '',
    emailValid: false,
  })

  const validateEmail = () => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (reg.test(form.email)) {
      return true
    }
    return false
  }

  const updateField = e => {
    const { name, value } = e.target
    const emailValid = validateEmail()
    setForm({
      ...form,
      [name]: value,
      emailValid,
    })
  }

  // const handleSubmit = e => {
  //   const body = encode({ 'form-name': 'contact', email: form.email })
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body,
  //   })
  //     .then(() => navigate('/success'))
  //     .catch(error => alert(error))

  //   e.preventDefault()
  // }

  const handleSubmit = e => {
    const body = JSON.stringify({ email: form.email })

    if (form && !form.bottyMcBotface) {
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(() => navigate('/success'))
        .catch(error => alert(error))
    }

    e.preventDefault()
  }

  return (
    <div className="flex-1 contactForm text-center">
      <h1>NC Tech Scene</h1>
      <h2>A weekly email newsletter about tech in North Carolina.</h2>
      <form
        name="contact"
        method="post"
        className="mt-8"
        onSubmit={handleSubmit}
      >
        <p className="hidden">
          <label htmlFor="bottyMcBotface">
            Dear Human, please don't fill this out:{' '}
            <input
              type="hidden"
              name="bottyMcBotface"
              onChange={updateField}
              value={form.bottyMcBotface}
            />
            <input type="hidden" name="form-name" value="contact" />
          </label>
        </p>
        <p>
          <label
            htmlFor="email"
            className="flex content-center items-center flex-col"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={form.email}
              onChange={updateField}
              className="p-4 border block border-gray-600 flex-initial w-1/2 placeholder-gray-600::placeholder font-sans text-lg"
            />
          </label>
        </p>

        <p>
          <button className="btn" type="submit">
            Subscribe
          </button>
        </p>
      </form>

      <h4 className="">Join other North Carolinians interested in Tech.</h4>

      <p>
        <Link to={`/issue/${latest.issue}`}>Latest Issue ({latest.issue})</Link>
      </p>
      <p className="hint">Published by Simple Creative Webdevelopment.</p>

      <p className="">
        <Link to="/privacy">Privacy</Link>
      </p>
    </div>
  )
}

export default contactForm

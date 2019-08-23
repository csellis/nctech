import React from 'react'

const contactForm = () => (
  <div className="flex-1 text-center p-6 font-sans self-center">
    <h1 className="font-bold inline-block px-8 bg-orange-300 text-4xl">
      NC Tech Scene
    </h1>
    <h2 className="text-xl mt-12">
      A weekly email newsletter about tech in North Carolina.
    </h2>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bottyMcBotface"
      className="mt-8"
    >
      <p className="hidden">
        <label htmlFor="bottyMcBotface">
          Dear Human, please don't fill this out:{' '}
          <input type="hidden" name="bottyMcBotface" />
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
            placeholder="Your email address"
            className="p-4 border block border-gray-600 flex-initial w-1/2 placeholder-gray-600::placeholder font-sans text-lg"
          />
        </label>
      </p>

      <p>
        <button
          className="bg-orange-300 hover:bg-orange-200 font-sans text-lg font-bold py-2 px-4 rounded m-4"
          type="submit"
        >
          Subscribe
        </button>
      </p>
    </form>

    <p className="text-lg">Join other North Carolinians interested in Tech.</p>

    <p className="mt-8">Published by Simple Creative Webdevelopment</p>
  </div>
)

export default contactForm

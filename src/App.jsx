import React from 'react'

function App() {
  return (
    <main className='single'>
      <div className='single__one'>
        <h1 className='single__one-title'>Join our community</h1>
        <p className='single__one-text'>
          30-day, hassle-free money back guarantee
        </p>
        <p className='single__one-desc'>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className='single__two'>
        <div className='single__prices'>
          <h2 className='single__prices-title'>Monthly Subscription</h2>
          <div className='single__prices-price'>
            <div>
              $29 <span>per month</span>
            </div>
            <p>Full access for less than $1 a day</p>
          </div>
          <a className='single__prices-signup' href='#'>
            Sign Up
          </a>
        </div>
        <div className='single__why'>
          <h2 className='single__why-title'>Why Us</h2>
          <p className='single__why-desc'>
            Tutorials by industry experts <br />
            Peer & expert code review <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week
          </p>
        </div>
      </div>
    </main>
  )
}

export default App

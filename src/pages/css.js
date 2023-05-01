import React from 'react'

function CssPage() {
    return(
      <article className='cssPage'>
        <h2>CSS & Design</h2>
        <ul>
          <li>Color Theory</li>
          <li>Fonts</li>
          <li>UI/UX</li>
        </ul>
        <pre>
        <code>{`
          body {background: red;}
        `}</code>
        </pre>
      </article>
    )
}

export default CssPage
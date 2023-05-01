import React from 'react'

function HtmlPage () {
    return (
        <article className='html-page'>
            <h1>HTML</h1>
            <p>HTML or HyperText Markup Language defines the structure and content of webpages. An HTML element is a chunk of information surrounded by HTML tags. Here's an example of HTML that displays a header with a paragraph of text underneath:</p>
            <pre>
                <code>
                    {` <h1>Title of Section</h1> `}<br/>
                    {` <p>This is where some description goes.</p>`}
                </code>
            </pre>
        </article>
    )
}

export default HtmlPage
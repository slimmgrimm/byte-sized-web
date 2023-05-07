import React from 'react'
import Article from '../components/ArticleElements/Article.js'
import './html.css'

function HtmlPage() {
    return (
        <div>
            <Article
                title='What is HTML?'
                text='HyperText Markup Language defines the structure of a webpage. An HTML element is the basic building block of a webpage and is indicated by HTML tags. Here is a element bound by <h1> tags: '
                code='<h1>Title of Section</h1>'

            />
            <article className='html-boilerplate html-article'>
                <header className='html-header'>
                    <h1 className='html-title'>HTML Boilerplate</h1>
                </header>
                <section className='html-section'>
                    <p>Boilerplate code is a template of the bare minimum code that you need in order to share a page across the web.
                        The first tag in the document will declare what type of data is stored within so we use the <strong>html</strong> tag.
                        The second tag includes files, scripts, and styles for formatting your webpage within the <strong>head</strong> tag.
                        Finally the third tag you need contains all the info you want to display within the <strong>body</strong> tag.
                        The basic structure looks like this but in a working webpage there will be tons of code in between those tags!
                    </p>
                    <pre className='code-block'>
                        <code>
                            {`<html>    `}<br />
                            {`   <head> `}<br />
                            {/* {`          `}<br /> */}
                            {`   </head>`}<br />
                            {`   <body> `}<br />
                            {/* {`          `}<br /> */}
                            {`   </body>`}<br />
                            {`</html>   `}<br />
                        </code>
                    </pre>
                </section>
            </article>

        </div>

    )
}

export default HtmlPage
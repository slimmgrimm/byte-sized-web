import React from 'react'
import Article from '../components/ArticleElements/Article.js'
import cssLogo from '../images/CSS3_logo.svg'
import './css.css'

function CssPage() {
    return(
      <div>
        <Article
          headerStyle='css-header'
          title='What is CSS?'
          text='Cascading Style Sheets are a way of styling the plain text of the HTML document. CSS can change the color, font, size, and spacing of HTML elements.'
          src={cssLogo}
        />
      </div>
    )
}

export default CssPage
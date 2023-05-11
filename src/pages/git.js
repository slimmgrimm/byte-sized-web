import React from 'react'
import Article from '../components/ArticleElements/Article.js'
import BashLogo from '../images/bash-logo.png'
import './git.css'

function GitPage() {
    return(
        <div>
            <Article 
                headerStyle='git-header'
                title='What is a CLI?'
                text='The Command Line Interface is a text based UI that allows you to run programs, manage files and interact with the computer. Every operating system comes with a built in CLI. Other names for CLI are Command Prompt or Terminal. The shortcut to open terminal on Linux is Ctrl + Alt + T'
                src={BashLogo}
            />
        </div>
    )
}

export default GitPage
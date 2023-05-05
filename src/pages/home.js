import React from 'react'

function Home() {
    return (
        <article>
        <h1>Welcome to the Home screen. Test a link for me!</h1>
        {/* <form onSubmit={e => {
             e.preventDefault();
             //function addToArticleArray();
            }} 
            action='http://localhost:3000/posts.json' 
            method='post'>

            <label htmlFor='title'>Article Title: </label>
            <input type='text' id='title' name='title'></input>

            <label htmlFor='subtitle'>Subtitle: </label>
            <input type='text' id='subtitle' name='subtitle'></input>

            <label htmlFor='text'>Body Text: </label>
            <textarea rows='20' cols='60' id='text' name='text'></textarea>

            <button type='submit'>Submit</button>
        </form> */}
        </article>
    )
}

export default Home
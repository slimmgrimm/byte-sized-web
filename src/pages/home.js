import React from 'react'

function Home() {
    return (
        <article>
        <h1>Welcome to the Home screen. Test a link for me!</h1>
        <form action='./posts.json' method='post'>

            <label for='title'>Article Title: </label>
            <input type='text' id='title' name='title'></input>

            <label for='subtitle'>Subtitle: </label>
            <input type='text' id='subtitle' name='subtitle'></input>

            <label for='text'>Body Text: </label>
            <textarea rows='20' cols='60' id='text' name='text'></textarea>

            <button type='submit'>Submit</button>
        </form>
        </article>
    )
}

export default Home
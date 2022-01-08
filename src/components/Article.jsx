import React from 'react'
import '../assets/styles/components/Article.scss'

const Article = () => {
    return (
        <article className='article'>
            <figure className='article__img'></figure>
            <section className='article__description'>
            <header >This is a Lorem Ipsum Heading</header>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat adipisci voluptatibus a! Similique nulla praesentium veritatis adipisci quasi. Dolor ab odit explicabo! Earum iste laboriosam magnam quasi explicabo, aliquid pariatur?</p>
            <a href='/'>Read More</a>
            </section>
        </article>
    )
}

export default Article

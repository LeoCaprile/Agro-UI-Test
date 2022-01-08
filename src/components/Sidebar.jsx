import React from 'react'
import '../assets/styles/components/Sidebar.scss'

const Sidebar = () => {
    return (
        <aside className='sidebar'>

            <section>
            <h1>Sidebar Links</h1>
            <a href="/">Link 1</a><a href="/">Link 2</a><a href="/">Link 3</a><a href="/">Link 4</a>
            </section>
            
            <section>
            <h1>Other Widgets</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quibusdam commodi numquam amet, cum vero, veniam deserunt quas itaque rem nulla in similique nostrum animi possimus vitae harum corrupti consequatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, est.</p>
            </section>
            
        </aside>
    )
}

export default Sidebar

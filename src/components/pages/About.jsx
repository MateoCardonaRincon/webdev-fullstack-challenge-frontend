import React from 'react'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <h1>About</h1>
                </div>
            </div>

            <div className="row about-div">
                <p className="about-p">This is an app about a To-Do task manager, and is just great!</p>
                <p className="about-p">
                    Create your custom to-dos with descriptive title and message, and organize them by categories.
                </p>
                <p className="about-p">
                    You can manage the state of your notes as you want. Check a note as done when you finish it, or
                    update the title and message of the ones that are still pending to be completed.</p>
                <p className="about-p">
                    If you want to get a note out of your sight, just delete it with a click!
                    Did you finish all the notes of a category?
                    You can also delete the category if you want, but be careful because all the notes will go with it.
                </p>
                <h6 className="about-p">
                    What are you waiting for to create your notes?!
                </h6>
            </div>
            <h4>Developed by Mateo Cardona Rincón</h4><span>Developed as a challenge for the Web Development course</span>
        </div>
    )
}

export default About
import React from 'react';

function Form() {
    return (
        <div>
            <form action="https://formspree.io/f/mjvdznrp" method="post">
                <label htmlFor="email">Your Email</label>
                <input name="Email" id="email" type="email"/>
                    <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
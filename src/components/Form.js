import React from 'react';

const Form = () => {
    return (
        <div className="ui raised padded text container segment" style={{marginTop: '10%'}}>
            <div class="ui equal width form">
                <div class="fields">
                    <div class="field">
                        <label>To</label>
                        <input type="email" placeholder="Recipient's Email" required />
                    </div>
                    <div class="field">
                        <label>From</label>
                        <input type="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div class="field">
                    <label>Subject</label>
                    <input type="text" required />
                </div>
                <div class="field">
                    <label>Content</label>
                    <textarea rows="5" required></textarea>
                </div>
            </div>
        </div>
    )
}

export default Form;
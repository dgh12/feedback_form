import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback:'',
    rating:''
  });
  const handleChannge = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    const confirmationMessage = `
    Name: ${formData.name}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:',formData);
      setFormData({
        name: '',
        email:'',
        feedback:'',
        rating:''
      })
      alert('Thank you for your valuable feedback!');
    }
  };
  };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>  
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChannge}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChannge}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChannge}
        ></textarea>
        <div className="rating">
          <span>RATE US!</span>
         <p> <input 
          type="radio" 
          name="rating" 
          value="1" 
          onChange={handleChannge}
          />1</p>
          <p> <input 
          type="radio" 
          name="rating" 
          value="1" 
          onChange={handleChannge}
          />2</p>
          <p> <input 
          type="radio" 
          name="rating" 
          value="1" 
          onChange={handleChannge}
          />3</p>
          <p> <input 
          type="radio" 
          name="rating" 
          value="1" 
          onChange={handleChannge}
          />4</p>
          <p> <input 
          type="radio" 
          name="rating" 
          value="1" 
          onChange={handleChannge}
          />5</p>
                 <button onClick={handleSubmit} onlick={handleEmptySubmitions} type="submit">Submit Feedback</button>
        </div>
      </form>

    </>
  );
};

export default FeedbackForm;

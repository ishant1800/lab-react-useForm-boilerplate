import { useState } from 'react';
import './App.css'; // 
import { useForm } from 'react-hook-form';

function CustomRegistrationForm() { 
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const [fieldValue, setFieldValue] = useState(false); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleFormSubmit = (data) => { 
    setFieldValue(data); 
    setIsSubmitted(true); 
  };

  return (
    <>
      <div className="registration-form-container"> {/* Changed id to className */}
        <form onSubmit={handleSubmit(handleFormSubmit)}> {/* Changed function reference */}
          <div className="registration-status">{isSubmitted ? "Registration successful" : null}</div> {/* Changed id to className */}
          <div><input type="text" placeholder="First Name" {...register('firstname', { required: "First name is required!" })} /></div>
          <div><p>{errors.firstname?.message}</p></div>
          <div><input type="text" placeholder="Last Name" {...register("lastname", { required: "Last Name is required" })} /></div>
          <div><p>{errors.lastname?.message}</p></div>
          <div><input type="text" placeholder="Email" {...register("email", { required: "Email is required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Invalid email" } })} /></div>
          <div><p>{errors.email?.message}</p></div>
          <div><input type="password" placeholder="Password" {...register("password", { required: "Password is required!", minLength: { value: 4, message: "Password must be more than 4 characters" }, maxLength: { value: 20, message: "Password cannot be more than 20 characters" } })} /></div>
          <div><p>{errors.password?.message}</p></div>
          <br />
          <button className="registration-button" type='submit'>Register</button> {/* Changed id to className */}
        </form>
      </div>
    </>
  );
}

export default CustomRegistrationForm; 

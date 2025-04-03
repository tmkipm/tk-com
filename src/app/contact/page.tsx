'use client'; // Required for react-hook-form and event handlers

import Link from 'next/link';
import { useState } from 'react'; // For handling form state (e.g., submitting, success, error)
import { useForm, SubmitHandler } from 'react-hook-form'; // Import useForm

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,         // Function to register input/select and apply validation rules
    handleSubmit,     // Function that receives form data if validation is successful
    formState: { errors, isSubmitting }, // Object containing form state (errors, isSubmitting)
    reset,            // Function to reset form fields
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitStatus(null);
    console.log("Submitting form data:", data);

    try {
      // Actual API call to the backend route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle non-2xx responses
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      // Handle success
      const result = await response.json();
      console.log('API response:', result);
      setSubmitStatus('success');
      reset(); // Reset form fields on successful submission

    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      // Optionally display more specific error message to user
      // if (error instanceof Error) { setErrorMessage(error.message); }
    }
    // isSubmitting is automatically handled by react-hook-form
  };

  return (
    <div className="space-y-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Send a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                {...register("name", { required: "Name is required" })} // Register input with validation
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>} { /* Display validation error */}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { 
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: "Invalid email address" 
                  } 
                })} // Register with validation
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>} { /* Display validation error */}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                {...register("message", { required: "Message is required" })} // Register with validation
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>} { /* Display validation error */}
            </div>

            {/* GDPR Notice */} 
            <div className="text-xs text-gray-500 dark:text-gray-400">
              By submitting this form, you acknowledge that your information will be used to respond to your inquiry.
              {/* Link to a more detailed privacy policy if needed */}
            </div>

            <button
              type="submit"
              disabled={isSubmitting} // Use isSubmitting from formState
              className={`w-full py-2 px-4 rounded-md font-semibold text-white transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && <p className="text-green-600 dark:text-green-400 mt-4 text-center">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-500 dark:text-red-400 mt-4 text-center">Failed to send message. Please review the form or try again later.</p>}
          </form>
        </section>

        {/* Direct Contact Info */}
        <section aria-labelledby="direct-contact-heading">
          <h2 id="direct-contact-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Direct Contact</h2>
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              Feel free to reach out directly through the following channels:
            </p>
            <div className="flex items-center space-x-2">
              {/* Replace # with actual LinkedIn URL */}
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                LinkedIn
              </Link>
            </div>
             <div className="flex items-center space-x-2">
              {/* Replace # with actual GitHub URL */}
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                GitHub
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="mailto:Tknibbs31@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Email: Tknibbs31@gmail.com
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
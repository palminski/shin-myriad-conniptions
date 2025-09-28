'use client';
import { useState, useEffect } from "react"
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
    const [state, handleSubmit, reset] = useForm("mblzdevq");
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const resetForm = () => {
        setFormData({
            email: '',
            subject: '',
            message: '',
        })
    }

    useEffect(() => {
        if (state.succeeded) {
            resetForm(); // Clear the form fields after submission
        }
    }, [state.succeeded]);

    

    return (
        <div className="rounded-lg w-full border border-purple-400 bg-theme-white overflow-hidden ">
            <div className="pt-5 pb-0.5 mb-4 px-3" >
                <h2 className="mb-2 text-2xl lg:text-4xl tracking-tight">Contact Me</h2>
                <p className="mb-4 font-light lg:text-lg">Have any questions about my services? Don't hesitate to reach out! I will respond as soon as I am able.</p>
            </div>

            <form onSubmit={(e) => {reset(); handleSubmit(e)}} className="space-y-8 px-3 pb-4">
                <div>
                    <label htmlFor="email" className="block mb-1 text-sm lg:text-base font-medium text-purple-400">Your Email</label>
                    <input type="email" name="email" onChange={handleFormChange} value={formData.email} id="email" className="placeholder:text-theme-blue/50 shadow-sm text-black border border-custom-green-dark text-sm lg:text-base rounded-lg focus:ring-custom-green-dark focus:border-custom-green-dark block w-full p-2.5 placeholder-gray-400" placeholder="name@email.com" required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-1 text-sm lg:text-base font-medium text-purple-400">Subject</label>
                    <input type="text" name="subject" onChange={handleFormChange} value={formData.subject} id="subject" className="block placeholder:text-theme-blue/50 text-black p-3 w-full text-sm lg:text-base  rounded-lg border border-custom-green-dark shadow-sm focus:ring-custom-green-dark focus:border-custom-green-dark  placeholder-gray-400" placeholder="Let me know how I can help you" required />
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-1 text-sm lg:text-base font-medium text-purple-400">Your Message</label>
                    <textarea id="message" name="message" onChange={handleFormChange} value={formData.message} rows="6" className="block placeholder:text-theme-blue/50 text-black p-2.5 w-full text-sm lg:text-base  rounded-lg shadow-sm border border-custom-green-dark focus:ring-custom-green-dark focus:border-custom-green-dark  placeholder-gray-400" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" disabled={state.submitting} className="border bg-theme-blue transform transition-transform duration-200 hover:scale-105 rounded-lg  lg:w-auto  w-full lg:text-2xl px-4 py-2">Send Message</button>
                {
                    state.submitting ? (
                        <span className="text-xl ml-5 block lg:inline">
                            Sending Message...
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-6 animate-spin inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </span>
                    ) : state.succeeded ? (
                        <span className="text-xl ml-5 block lg:inline">
                            Message Sent!
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                    ) : state.errors && (
                        <span className="text-xl ml-5 block lg:inline">
                            Error Sending Message
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 size-6 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </span>
                    )
                }
            </form>
        </div>

    )
}
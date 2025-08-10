// "use client";
// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import "./style.css";

// export default function Contact() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; text: string } | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear any existing messages when user starts typing
//     if (message) {
//       setMessage(null);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
//       setMessage({
//         type: 'warning',
//         text: 'Please fill in all fields before submitting.'
//       });
//       return;
//     }

//     if (!formData.email.includes('@')) {
//       setMessage({
//         type: 'error',
//         text: 'Please enter a valid email address.'
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setMessage({
//       type: 'info',
//       text: 'Sending your message...'
//     });

//     try {
//       // Simulate form submission (replace with actual API call)
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       setMessage({
//         type: 'success',
//         text: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
//       });
      
//       // Reset form
//       setFormData({ name: "", email: "", message: "" });
      
//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setMessage(null);
//       }, 5000);
      
//     } catch (error) {
//       setMessage({
//         type: 'error',
//         text: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* Same Navbar as About page for consistency */}
//       <nav className="fixed top-0 w-full bg-transparent flex justify-between items-center px-8 py-4 z-50">
//         <div className="text-white text-2xl">My Portfolio</div>
//         <div className="hidden md:flex gap-6 text-white">
//           <Link href="/" className="hover:text-yellow-400 text-white">Home</Link>
//           <Link href="/project" className="hover:text-yellow-400 text-white">Projects</Link>
//           <Link href="/about" className="hover:text-yellow-400 text-white">About</Link>
//           <Link href="/contact" className="hover:text-yellow-400 text-white">Contact</Link>
//         </div>
//         <div
//           className="md:hidden flex flex-col justify-around items-center w-8 h-6 cursor-pointer"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <span className="block h-1 w-full bg-white"></span>
//           <span className="block h-1 w-full bg-white"></span>
//           <span className="block h-1 w-full bg-white"></span>
//         </div>
//         {isMobileMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center py-4 space-y-2 text-white">
//             <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Home</Link>
//             <Link href="/project" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Projects</Link>
//             <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">About</Link>
//             <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Contact</Link>
//           </div>
//         )}
//       </nav>

//       {/* Same background as About page - bg-gray-900 */}
//       <section className="flex flex-col items-center justify-center bg-gray-900 pt-24 pb-16">
//         {/* Modern Header Section */}
//         <div className="contact-header">
//           <h1 className="contact-title">Get In Touch</h1>
//           <p className="contact-subtitle">
//             Ready to start a project or have a question? I'd love to hear from you! 
//             Send me a message and I'll respond within 24 hours.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} className="contact-form">
//           {/* Display Messages */}
//           {message && (
//             <div className={`message ${message.type}`}>
//               {message.type === 'success' && (
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//               )}
//               {message.type === 'error' && (
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               )}
//               {message.type === 'warning' && (
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                 </svg>
//               )}
//               {message.type === 'info' && (
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                 </svg>
//               )}
//               <span>{message.text}</span>
//             </div>
//           )}

//           <div className="form-group">
//             <label htmlFor="name" className="form-label">Your Name *</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Enter your full name"
//               className="form-input"
//               required
//               disabled={isSubmitting}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Your Email *</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email address"
//               className="form-input"
//               required
//               disabled={isSubmitting}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message" className="form-label">Your Message *</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Tell me about your project, idea, or question. I'm excited to hear from you!"
//               className="form-textarea"
//               required
//               disabled={isSubmitting}
//             ></textarea>
//           </div>

//           <button 
//             type="submit" 
//             className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>

//         {/* Additional Contact Information */}
//         <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto px-4">
//           <p className="text-lg mb-4">
//             💡 <strong>Quick Tip:</strong> The more details you provide about your project, 
//             the better I can help you bring your vision to life!
//           </p>
//           <p className="text-sm">
//             🔒 Your information is secure and will only be used to respond to your inquiry.
//           </p>
//         </div>
//       </section>
      
//       {/* Footer - now properly positioned */}
//       <Footer />
//     </>
//   );
// }








// "use client";
// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import "./style.css";

// export default function Contact() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; text: string } | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     if (message) {
//       setMessage(null);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
//       setMessage({
//         type: 'warning',
//         text: 'Please fill in all fields before submitting.'
//       });
//       return;
//     }

//     if (!formData.email.includes('@')) {
//       setMessage({
//         type: 'error',
//         text: 'Please enter a valid email address.'
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setMessage({
//       type: 'info',
//       text: 'Sending your message...'
//     });

//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       setMessage({
//         type: 'success',
//         text: 'Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!'
//       });

//       setFormData({ name: "", email: "", message: "" });

//       setTimeout(() => {
//         setMessage(null);
//       }, 5000);

//     } catch (error) {
//       setMessage({
//         type: 'error',
//         text: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 w-full bg-transparent flex justify-between items-center px-8 py-4 z-50">
//         <div className="text-white text-2xl">My Portfolio</div>
//         <div className="hidden md:flex gap-6 text-white">
//           <Link href="/" className="hover:text-yellow-400 text-white">Home</Link>
//           <Link href="/project" className="hover:text-yellow-400 text-white">Projects</Link>
//           <Link href="/about" className="hover:text-yellow-400 text-white">About</Link>
//           <Link href="/contact" className="hover:text-yellow-400 text-white">Contact</Link>
//         </div>
//         <div
//           className="md:hidden flex flex-col justify-around items-center w-8 h-6 cursor-pointer"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <span className="block h-1 w-full bg-white"></span>
//           <span className="block h-1 w-full bg-white"></span>
//           <span className="block h-1 w-full bg-white"></span>
//         </div>
//         {isMobileMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center py-4 space-y-2 text-white">
//             <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Home</Link>
//             <Link href="/project" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Projects</Link>
//             <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">About</Link>
//             <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Contact</Link>
//           </div>
//         )}
//       </nav>

//       <section className="flex flex-col items-center justify-center bg-gray-900 pt-24 pb-16">
//         <div className="contact-header">
//           <h1 className="contact-title">Get In Touch</h1>
//           <p className="contact-subtitle">
//             Ready to start a project or have a question? I&apos;d love to hear from you! 
//             Send me a message and I&apos;ll respond within 24 hours.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="contact-form">
//           {message && (
//             <div className={`message ${message.type}`}>
//               <span>{message.text}</span>
//             </div>
//           )}

//           <div className="form-group">
//             <label htmlFor="name" className="form-label">Your Name *</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Enter your full name"
//               className="form-input"
//               required
//               disabled={isSubmitting}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Your Email *</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email address"
//               className="form-input"
//               required
//               disabled={isSubmitting}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message" className="form-label">Your Message *</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Tell me about your project, idea, or question. I&apos;m excited to hear from you!"
//               className="form-textarea"
//               required
//               disabled={isSubmitting}
//             ></textarea>
//           </div>

//           <button 
//             type="submit" 
//             className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>

//         <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto px-4">
//           <p className="text-lg mb-4">
//             💡 <strong>Quick Tip:</strong> The more details you provide about your project, 
//             the better I can help you bring your vision to life!
//           </p>
//           <p className="text-sm">
//             🔒 Your information is secure and will only be used to respond to your inquiry.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }











"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Link from "next/link";
import "./style.css";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error' | 'warning' | 'info';
    text: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (message) {
      setMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessage({
        type: 'warning',
        text: 'Please fill in all fields before submitting.'
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setMessage({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setMessage({
      type: 'info',
      text: 'Sending your message...'
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "1324a681-7d01-45ce-bc52-9742d70cf431",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage({
          type: 'error',
          text: 'Failed to send message. Please try again later.'
        });
      }

    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Sorry, there was an error sending your message.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent flex justify-between items-center px-8 py-4 z-50">
        <div className="text-white text-2xl">My Portfolio</div>
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/" className="hover:text-yellow-400 text-white">Home</Link>
          <Link href="/project" className="hover:text-yellow-400 text-white">Projects</Link>
          <Link href="/about" className="hover:text-yellow-400 text-white">About</Link>
          <Link href="/contact" className="hover:text-yellow-400 text-white">Contact</Link>
        </div>
        <div
          className="md:hidden flex flex-col justify-around items-center w-8 h-6 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block h-1 w-full bg-white"></span>
          <span className="block h-1 w-full bg-white"></span>
          <span className="block h-1 w-full bg-white"></span>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center py-4 space-y-2 text-white">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Home</Link>
            <Link href="/project" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Projects</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">About</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-400">Contact</Link>
          </div>
        )}
      </nav>

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center bg-gray-900 pt-24 pb-16">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready to start a project or have a question? I'd love to hear from you!
            Send me a message and I'll respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {message && (
            <div className={`message ${message.type}`}>
              <span>{message.text}</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="form-input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="form-input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project, idea, or question."
              className="form-textarea"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto px-4">
          <p className="text-lg mb-4">
            💡 <strong>Quick Tip:</strong> The more details you provide, the better I can help!
          </p>
          <p className="text-sm">
            🔒 Your information is secure and will only be used to respond to your inquiry.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
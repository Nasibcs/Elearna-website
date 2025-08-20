// import React, { useState } from "react";

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     password: "",
//     agreePolicy: false,
//     marketingConsent: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
//       <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
//         <h1 className="text-3xl font-semibold text-white text-center mb-2">
//           Sign up
//         </h1>
//         <p className="text-gray-400 text-sm text-center mb-6">
//           More than 50k students join with us!
//         </p>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             required
//           />
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             required
//           />

//           <label className="flex items-start gap-2 text-gray-300 text-sm">
//             <input
//               type="checkbox"
//               name="agreePolicy"
//               checked={formData.agreePolicy}
//               onChange={handleChange}
//               className="mt-1"
//             />
//             By creating an account, I agree to this website's{" "}
//             <span className="text-yellow-500">privacy policy</span> and{" "}
//             <span className="text-yellow-500">terms of service</span>
//           </label>

//           <label className="flex items-start gap-2 text-gray-300 text-sm">
//             <input
//               type="checkbox"
//               name="marketingConsent"
//               checked={formData.marketingConsent}
//               onChange={handleChange}
//               className="mt-1"
//             />
//             I consent to receive marketing emails.
//           </label>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md hover:bg-yellow-600 transition-colors"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-gray-400 text-sm text-center mt-4">
//           Already have an account?{" "}
//           <span className="text-yellow-500 cursor-pointer">Log In</span>
//         </p>
//       </div>
//     </div>
//   );
// }

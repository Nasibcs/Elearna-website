import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import img from "./images/img.svg";

// Zod Schema
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  saveInfo: z.boolean().optional(),
});

// Type Inference

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-tr from-white to-gray-100 p-8">
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <h5 className="text-sm font-semibold uppercase tracking-widest mb-3 text-gray-600">
          Contact Us
        </h5>

        <h2 className="text-3xl md:text-3xl font-bold leading-tight text-gray-900 mb-6">
          Are you interested in online learning? Contact us
        </h2>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
          Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
          nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique
          nullam risus semper habitant urna nisl nam elit at.
        </p>

        <div>
          <img
            src={img}
            alt="Signature"
            className="h-12 mb-3"
          />
          <p className="font-semibold text-lg text-gray-900">Brayden Backham</p>
          <p className="text-xs tracking-widest text-gray-500">DIRECTOR</p>
        </div>
      </div>

      <div className="  w-[30rem] relative bottom-28 bg-white shadow-xl rounded-lg p-6 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Fill out for contact</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur libero donec.</p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email"
              {...register("email")}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <textarea
              rows={5}
              placeholder="Your message"
              {...register("message")}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="saveInfo"
              {...register("saveInfo")}
              className="mt-1"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-700">
              Save information for the next time comment.
            </label>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

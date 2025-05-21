import React, { useContext, useState } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      captcha: "",
    },
  });

  // CAPTCHA logic
  const [captcha, setCaptcha] = useState({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const validateCaptcha = (value) => {
    const sum = captcha.num1 + captcha.num2;
    if (parseInt(value) === sum) {
      setIsCaptchaValid(true);
      return true;
    } else {
      setIsCaptchaValid(false);
      return "CAPTCHA is incorrect";
    }
  };

  // handle form submit click
  const handleFormSubmit = async (values) => {
    if (!isCaptchaValid) {
      toast.error("Please solve the CAPTCHA correctly.");
      return;
    }

    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      name: companyDetails.name,
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: values.subject,
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(
        () => setSpinner(false),
        setCaptcha({
          num1: Math.floor(Math.random() * 10),
          num2: Math.floor(Math.random() * 10),
        })
      );
  };

  return (
    <div className="flex flex-col gap-4 py-[5rem] px-5 bg-primary/5">
      <h2
        data-aos="fade-up"
        className="heading-2 text-center max-w-[55rem] mx-auto"
      >
        Ready to ignite your brand's fire? <br />
        Let's connect!
      </h2>
      <p data-aos="fade-up" className="desc text-center max-w-[55rem] mx-auto">
        At SolByte Tech, we believe in the power of collaboration and shared
        passion. We're not just a team of developers, we're your partners in
        igniting your brand's unique potential. So, whether you're brimming with
        ideas or just starting to spark, reach out and let's chat!
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col gap-4 rounded-xl p-5 bg-background w-full max-w-4xl mx-auto mt-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Name</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Email</label>
            <input
              type="email"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Phone</label>
            <input
              type="tel"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2">Subject</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-black border"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2">Message</label>
          <textarea
            rows="4"
            className="outline-none p-2 rounded-2xl bg-white/60 text-black border"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        {/* CAPTCHA Section */}
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2">
            What is {captcha.num1} + {captcha.num2}?
          </label>
          <input
            type="text"
            className="outline-none p-2 rounded-full bg-white/60 text-black border"
            placeholder="Enter the sum"
            {...register("captcha", {
              required: "CAPTCHA is required",
              validate: validateCaptcha,
            })}
          />
          <small className="error-message">{errors.captcha?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className={`${
            isSubmitting ||
            (!isCaptchaValid && `!bg-primary/60 !cursor-not-allowed`)
          } secondary-btn mt-3 w-full`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadForm;

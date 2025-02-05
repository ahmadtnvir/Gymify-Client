import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import Select from "react-select";
import PageHeading from "../../../components/PageHeading/PageHeading";
import RouteNaming from "../../../components/RouteNaming";
import SectionHeading from "../../../components/SectionHeading";
import Container from "../../../utils/Container/Container";
import SectionContainer from "../../../utils/SectionContainer/SectionContainer";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const Career = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const allInfo = { ...data, status: "Pending" };
    // console.log(allInfo);
    // console.log("Selected Available Days:", data.availableDay);
    // ! store data in the database
    // useAxiosPublic.post("/career", data);
    axios
      .post("https://gymify-server-dusky.vercel.app/career", allInfo)
      .then((res) => {
        console.log(res.data);
        setBtnDisabled(true);
        toast.success("Your application has been submitted successfully!");
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong! Please try again.");
      });
  };
  // console.log(watch("example"));
  const options = [
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
  ];
  // const handleSelectedBook = (value) => {
  //   console.log(value);
  // };
  return (
    <Container>
      <RouteNaming name={"Career"}></RouteNaming>
      <PageHeading title={"Be a Trainer"}></PageHeading>
      <SectionContainer>
        <SectionHeading
          firstTitle={"Turn Your Passion Into a Career – "}
          secondTitle={"Become a Trainer!"}
          description={`Are you passionate about fitness and helping others achieve their
            goals? Join our team as a certified trainer and inspire a community
            of fitness enthusiasts. Apply today and take the first step toward a
            rewarding career!`}
        ></SectionHeading>
        {/* //! Form */}
        <div className="hero min-h-screen">
          <div className="hero-content w-full">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        defaultValue={user?.displayName}
                        className="input input-bordered"
                        {...register("fullName", { required: true })}
                      />
                      {errors.fullName && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered"
                        {...register("email", {
                          required: "Email is required",
                          pattern: /^\S+@\S+\.\S+$/,
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Age</span>
                      </label>
                      <input
                        type="number"
                        placeholder="age"
                        className="input input-bordered"
                        {...register("age", {
                          required: "Age is required",
                          min: 18,
                          max: 65,
                        })}
                      />
                      {errors.age && (
                        <p className="text-red-500">{errors.age.message}</p>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Profile Image Url</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Image Url"
                        defaultValue={user?.photoURL}
                        className="input input-bordered"
                        {...register("profileImage", {
                          required: "Profile Image is required",
                        })}
                      />
                      {errors.profileImage && (
                        <p className="text-red-500">
                          {errors.profileImage.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="divider divider-error"></div>
                <div>
                  <h2 className="text-2xl font-semibold">
                    Experience & Expertise
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Years of Experience</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Years of Experience"
                        className="input input-bordered"
                        {...register("experience", {
                          required: "Experience is required",
                        })}
                      />
                      {errors.experience && (
                        <p className="text-red-500">
                          {errors.experience.message}
                        </p>
                      )}
                    </div>

                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">
                          Pick one Specialization
                        </span>
                      </div>
                      <select
                        // onChange={(e) => handleSelectedBook(e.target.value)}
                        className="select select-bordered"
                        defaultValue="Pick one"
                        {...register("specialization", {
                          required: "Specialization is required",
                        })}
                      >
                        <option disabled value="Pick one">
                          Pick one
                        </option>
                        <option>Fitness & Strength</option>
                        <option>Cardio & Endurance</option>
                        <option>Mind & Body</option>
                        <option>Sports & Performance</option>
                        <option>Dance & Movement</option>
                        <option>Dance & Movement</option>
                        <option>Aquatic & Outdoor</option>
                        <option>Nutrition & Wellness</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="divider divider-error"></div>
                <div>
                  <h2 className="text-2xl font-semibold">Availability</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* //! */}
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">
                          Available day per week
                        </span>
                      </div>
                      <Select
                        isMulti
                        options={options}
                        className=" w-full"
                        {...register("availableDay")}
                        onChange={(selectedOptions) => {
                          const values = selectedOptions
                            ? selectedOptions.map((option) => option.value)
                            : [];
                          setValue("availableDay", values); // ✅ Store values in react-hook-form
                          // console.log(values); // 👉 Logs selected values when changed
                        }}
                      ></Select>
                    </label>
                    {/* //! */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Available time in a day
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="hours"
                        className="input input-bordered"
                        {...register("availableTime", {
                          required: "Available Time is required",
                        })}
                      />
                      {errors.availableTime && (
                        <p className="text-red-500">
                          {errors.availableTime.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  {/* //TODO: Make the btn disabled if the user already applied with this email. */}
                  <button
                    className={
                      "py-2.5 px-4 bg-red-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group text-[#322f30] text-xl font-semibold"
                    }
                  >
                    {btnDisabled ? "Applied" : "Apply Now"}
                    <BsArrowRight className="text-[1.3rem] font-bold text-[#322f30] group-hover:ml-2 transition-all duration-200" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Container>
  );
};

export default Career;

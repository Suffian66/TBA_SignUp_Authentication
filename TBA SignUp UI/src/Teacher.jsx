
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { useCreateTeacherMutation } from "./services/Teacher";

// const Teacher = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [createTeacher, { isLoading, error }] = useCreateTeacherMutation();

//   const onSubmit = async (data) => {
//     try {
//       await createTeacher(data).unwrap();
//       console.log('Teacher created successfully');
//     } catch (err) {
//       console.error('Failed to create teacher:', err);
//     }
//   };
//   return (
//     <div>
//       <section className="gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-12 col-lg-9 col-xl-7">
//               <div
//                 className="card shadow-2-strong card-registration shadow-lg"
//                 style={{ borderRadius: "20px" }}
//               >
//                 <div className="card-body p-4 p-md-5">
//                   <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Teacher Detail</h3>
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="row">
//                       <div className="col-12 mb-4">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           placeholder="Father/Husband Name"
//                           {...register("Father_HusbandName", { required: true })}
//                         />
//                         {errors.Father_HusbandName && <p>This field is required</p>}
//                       </div>
//                       <div className="col-12 mb-4">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           placeholder="Degree Qualification"
//                           {...register("DegreeQualification")}
//                         />
//                       </div>
//                       <div className="col-12 mb-4">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           placeholder="Certification"
//                           {...register("Certification", { maxLength: 50 })}
//                         />
//                         {errors.Certification?.type === 'maxLength' && <p>Certification cannot exceed 50 characters</p>}
//                       </div>
//                       <div className="col-12 mb-4">
//                         <input
//                           type="number"
//                           className="form-control form-control-lg"
//                           placeholder="Salary"
//                           {...register("Salary")}
//                         />
//                       </div>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <button
//                         className="btn btn-warning btn-lg"
//                         type="submit"
//                         disabled={isLoading}
//                       >
//                         {isLoading ? "Adding ..." : "Save"}
//                       </button>
//                       {error && <p>Failed to sign up. Please try again.</p>}
//                     </div>
//                     <div className="text-end">
//                       <Link to="/">
//                         <button className="btn btn-primary btn-lg">
//                           Back
//                         </button>
//                       </Link>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Teacher;

import { useLocation, useNavigate } from "react-router-dom";
// import { useAddStudentFamilyMutation } from "../services/Studentlist";
import { useFieldArray, useForm } from "react-hook-form";
import { useCreateStudentMutation } from "../services/Studentlist";

const StudentFamily = () => {
  const location = useLocation();
  const { studentData } = location.state; // Get student data from the state
  const navigate = useNavigate();
  const [createStudent, { isLoading, isSuccess, isError, error }] = useCreateStudentMutation();

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      studentFamilies: [{ familyMemberName: '', familyRelation: '', qualification: '', personOccupation: '', personIncome: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'studentFamilies',
  });

  const onSubmit = async (familyData) => {
    const combinedData = {
      ...studentData,
      studentFamilies: familyData.studentFamilies,
    };

    try {
      await createStudent(combinedData).unwrap();
      console.log('Student and family members added successfully');
      navigate('/studentlist'); // Navigate to a success page or another component
    } catch (err) {
      console.error('Failed to add student and family members:', err);
      alert('Failed to add student and family members. Please check the console for more details.');
    }
  };
  
    return (
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-10 studentform">
              <div className="card shadow-2-strong card-registration shadow-lg" style={{ borderRadius: "20px" }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Family Members</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => (
                      <div key={field.id} className="mb-4">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Family Member Name"
                              {...register(`studentFamilies.${index}.familyMemberName`, { required: true })}
                            />
                            {errors.studentFamilies?.[index]?.familyMemberName && <p>This field is required</p>}
                          </div>
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Family Relation"
                              {...register(`studentFamilies.${index}.familyRelation`, { required: true })}
                            />
                            {errors.studentFamilies?.[index]?.familyRelation && <p>This field is required</p>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Qualification"
                              {...register(`studentFamilies.${index}.qualification`, { required: true })}
                            />
                            {errors.studentFamilies?.[index]?.qualification && <p>This field is required</p>}
                          </div>
                          <div className="col-md-6 mb-4">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Person Occupation"
                              {...register(`studentFamilies.${index}.personOccupation`, { required: true })}
                            />
                            {errors.studentFamilies?.[index]?.personOccupation && <p>This field is required</p>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <input
                              type="number"
                              className="form-control form-control-lg"
                              placeholder="Person Income"
                              {...register(`studentFamilies.${index}.personIncome`, { required: true })}
                            />
                            {errors.studentFamilies?.[index]?.personIncome && <p>This field is required</p>}
                          </div>
                          <div className="col-md-6 mb-4">
                            <button type="button" className="btn btn-danger" onClick={() => remove(index)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button type="button" className="btn btn-secondary mb-4" onClick={() => append({ familyMemberName: '', familyRelation: '', qualification: '', personOccupation: '', personIncome: 0 })}>
                      Add Family Member
                    </button>
                    <div className="mt-4 pt-2">
                      <button className="btn btn-primary btn-lg" type="submit" disabled={isLoading}>
                        Submit
                      </button>
                      {isSuccess && <p>Family members added successfully!</p>}
                      {isError && <p>Error: {error?.data?.message}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StudentFamily;
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { Controller, useForm } from 'react-hook-form';
import { useGetCategoryDetailQuery } from '../../services/api/LookUp';
import { useGetMapSponsorStudentByIdQuery, useUpdateMapSponsorMutation } from '../../services/api/MapSponsorStudent';


function UpdateSponsorCart() {
    const { studentId } = useParams();
    // const queryParams = new URLSearchParams(location.search);
    // const studentId = queryParams.get("studentId");
    const { data: categoryData } = useGetCategoryDetailQuery();
    const { data: mapSponsorData } = useGetMapSponsorStudentByIdQuery(studentId);
    const [updateSponsor] = useUpdateMapSponsorMutation();
    const navigate = useNavigate();

    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            donationStartDate: '',
            donationChannel: '',
            donationFrequency: '',
            donationAmount: '',
            donationSourceAccount: '',
            donationDestinationAccount: '',
            notes: ''
        }
    });

    useEffect(() => {
        if (mapSponsorData) {
            const formattedDonationStartDate = mapSponsorData.donationStartDate.split('T')[0];
            reset({
                donationStartDate: formattedDonationStartDate,
                donationChannel: mapSponsorData.donationChannel,
                donationFrequency: mapSponsorData.donationFrequency,
                donationAmount: mapSponsorData.donationAmount,
                donationSourceAccount: mapSponsorData.donationSourceAccount,
                donationDestinationAccount: mapSponsorData.donationDestinationAccount,
                notes: mapSponsorData.notes,
                
            });
        }
    }, [mapSponsorData, reset]);

    const onSubmit = async (formData) => {
        try {
            const payload = {
                // $id: mapSponsorData.$id || "1", 
                
                donationStartDate: formData.donationStartDate,
                donationChannel: formData.donationChannel,
                donationFrequency: formData.donationFrequency,
                donationAmount: formData.donationAmount,
                donationSourceAccount: formData.donationSourceAccount,
                donationDestinationAccount: formData.donationDestinationAccount,
                notes: formData.notes,
                StudentId: mapSponsorData.studentId,
                Id: mapSponsorData.id,
                
            };
            await updateSponsor({ id: mapSponsorData.studentId, ...payload }).unwrap();
            alert('Student Details updated successfully');
            navigate(`/mapsponsorstudentlist?sponsorId=${mapSponsorData.id}`);
        } catch (error) {
            console.error('Failed to update sponsor: ', error);
            alert('Failed to update sponsor');
        }
    };

    const allCategoryDetails = categoryData?.$values || [];
    const donationFrequencies = allCategoryDetails.filter(item => item.description === "Donation Frequency");
    const donationChannels = allCategoryDetails.filter(item => item.description === "Donation Channel");

    return (
        <>             

                <div className="profilediv mt-5 me-5">
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} className='myprofilehead '>
                        <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                        <Form.Label className='myprofiletxt ms-2 '><h2>Update Student's Details</h2></Form.Label>
                    </Form.Group>
                </Row>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {/* <h4 className="ms-2 mt-3 mb-4 textcolor">Add to Sponsorship</h4> */}
                        <div className="row ms-2">
                            <div className="col-3 divcolor fw-bold">GR No</div>
                            <div className="col-3 divcolor">
                                <Form.Control type="text" value={mapSponsorData?.gR_No || ''} readOnly />
                            </div>
                            <div className="col-3 divcolor fw-bold">Student Name</div>
                            <div className="col-3 divcolor">
                                <Form.Control type="text" value={mapSponsorData?.firstName || ''} readOnly />
                            </div>
                        </div>
                        <div className="row ms-2">
                            <div className="col-3 divcolor fw-bold">Class</div>
                            <div className="col-3 divcolor">
                                <Form.Control type="text" value={mapSponsorData?.class || ''} readOnly />
                            </div>
                        </div>

                        <h4 className="ms-2 mt-3 mb-4 textcolor">Update the Following Fields</h4>

                        <div className="row ms-2">
                            <div className="col-3 divcolor fw-bold">Donation Amount</div>
                            <div className="col-3 divcolor">
                                <Controller
                                    name="donationAmount"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control type="number" {...field} />
                                    )}
                                />
                            </div>
                            <div className="col-3 divcolor fw-bold">Donation Frequency</div>
                            <div className="col-3 divcolor">
                                <Controller
                                    name="donationFrequency"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Select {...field}>
                                            <option value="">Select Frequency</option>
                                            {donationFrequencies.map((item) => (
                                                <option key={item.lookUpCtgDetailId} value={item.title}>
                                                    {item.title}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="row ms-2">
                            <div className="col-3 divcolor fw-bold">Donation Start Date</div>
                            <div className="col-3 divcolor">
                                <Controller
                                    name="donationStartDate"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control type="date" {...field} />
                                    )}
                                />
                            </div>
                            <div className="col-3 divcolor fw-bold">Donation Channel</div>
                            <div className="col-3 divcolor">
                                <Controller
                                    name="donationChannel"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Select {...field}>
                                            <option value="">Select Channel</option>
                                            {donationChannels.map((item) => (
                                                <option key={item.lookUpCtgDetailId} value={item.title}>
                                                    {item.title}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row ms-2">
                            <div className="col-3 divcolor fw-bold">Donation Source Account</div>
                            <div className="col-3 divcolor">
                                <Controller
                                    name="donationSourceAccount"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control type="text" {...field} />
                                    )}
                                />
                            </div>
                            <div className="col-3 divcolor fw-bold">Donation Destination Account</div>
                            <div className="col-3 divcolor">
                                <Controller
                                    name="donationDestinationAccount"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control type="text" {...field} />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row ms-2">
                            <div className="col-3 divcolor fw-bold">Notes</div>
                            <div className="col-9 divcolor">
                                <Controller
                                    name="notes"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control as="textarea" {...field} />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row float-start mt-5 ms-1">
                            <div className="d-flex">
                                <Button type="submit" className="btn btn-success me-2">
                                    Update
                                </Button>
                                <Button variant="secondary" onClick={() => navigate(-1)}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
        </>
    );
}

export default UpdateSponsorCart;

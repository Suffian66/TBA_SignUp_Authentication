import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { useGetSponsorByIdQuery, useUpdateSponsorMutation } from '../services/Sponsorlist';
import { useGetCategoryDetailQuery } from '../services/LookUp';

function UpdateSponsor() {
    const { id: sponsorId } = useParams();
    const { data: sponsor, error: sponsorError, isLoading: sponsorLoading } = useGetSponsorByIdQuery(sponsorId);
    const [updateSponsor] = useUpdateSponsorMutation();
    const { data } = useGetCategoryDetailQuery();
    
    const [formData, setFormData] = useState({});
    const allCategoryDetails = data?.$values || [];
    const genderOptions = allCategoryDetails.filter(item => itemm.description === "Gender");
    const addressTypeOptions = allCategoryDetails.filter(item => item.description === "Address Type");
    const countryOptions = allCategoryDetails.filter(item => item.description === "Country"); 

    useEffect(() => {
        if (sponsor) {
            setFormData(sponsor);
        }
    }, [sponsor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateSponsor(formData).unwrap();
            alert('Sponsor updated successfully');
        } catch (error) {
            console.error('Failed to update sponsor: ', error);
            alert('Failed to update sponsor');
        }
    };

    if (sponsorLoading) return <div>Loading...</div>;
    if (sponsorError) return <div>Error: {sponsorError.message}</div>;

    return (
        <>
            <div className='profilediv'>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} className='myprofilehead ms-2'>
                        <Form.Label><PersonFill size={40} className='ms-2' /></Form.Label>
                        <Form.Label className='myprofiletxt ms-2 '><h2>Update Sponsor's Profile</h2></Form.Label>
                    </Form.Group>
                </Row>

                <div className='mt-2 mb-5 ps-3 pe-5 dashboardbox profilebox'>
                    <h4 className='ms-2 textcolor'>Personal Information</h4>
                    <Form onSubmit={handleSubmit}>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='firstName'
                                    value={formData.firstName || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='middleName'
                                    value={formData.middleName || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='lastName'
                                    value={formData.lastName || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    as='select'
                                    name='gender'
                                    value={formData.gender || ''}
                                    onChange={handleChange}
                                >
                                    <option value=''>Select Gender</option>
                                    {genderOptions.map((option, index) => (
                                        <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    type='date'
                                    name='dob'
                                    value={formData.dob || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>CNIC</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='cnic'
                                    value={formData.cnic || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='occupation'
                                    value={formData.occupation || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>Address 1</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='address1'
                                    value={formData.address1 || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='address2'
                                    value={formData.address2 || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='postalCode'
                                    value={formData.postalCode || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Address Type</Form.Label>
                                <Form.Control
                                    as='select'
                                    name='addressType'
                                    value={formData.addressType || ''}
                                    onChange={handleChange}
                                >
                                    {addressTypeOptions.map((option, index) => (
                                      <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                                    ))}     
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='state'
                                    value={formData.state || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='city'
                                    value={formData.city || ''}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    as='select'
                                    name='country'
                                    value={formData.country || ''}
                                    onChange={handleChange}
                                >
                                     {countryOptions.map((option, index) => (
                                        <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Button type='submit' className='btn btn-primary btn-color'>Update Profile</Button>
                    </Form>
                </div>
                <hr />
                <div className='row float-start mt-5 ms-1'>
                    <div className='d-flex'>
                        <Link to='/sponsorlist'><Button className='btn btn-primary btnstudent btn-color me-2'>Back to Lists</Button></Link>
                        <Link to={`/studentlist/${sponsorId}`}><Button className='btn btn-primary btnstudent btn-color me-2'>Student List</Button></Link>
                        <Link to={`/mapSponsorStudentList?sponsorId=${sponsorId}`}><Button className='btn btn-primary btnstudent btn-color'>My Sponsor Cart</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateSponsor;

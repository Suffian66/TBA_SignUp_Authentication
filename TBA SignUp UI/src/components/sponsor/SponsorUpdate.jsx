import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { PersonFill } from 'react-bootstrap-icons';
import { useGetSponsorByIdQuery, useUpdateSponsorMutation } from '../../services/api/Sponsorlist';
import { useGetCategoryDetailQuery } from '../../services/api/LookUp';
import { Controller, useForm } from 'react-hook-form';

function SponsorUpdate() {
    const { id: sponsorId } = useParams();
    const {data: sponsor} = useGetSponsorByIdQuery(sponsorId);
    const [ updateSponsor ] = useUpdateSponsorMutation();
    const { data: categoryData } = useGetCategoryDetailQuery();
    const navigate = useNavigate();
    
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            dob: '',
            cnic: '',
            occupation: '',
            address1: '',
            address2: '',
            postalCode: '',
            addressType: '',
            state: '',
            city: '',
            country: '',
        }
    });

    useEffect(() => {
        if (sponsor && categoryData) {
            const allCategoryDetails = categoryData.$values || [];
            const genderOptions = allCategoryDetails.filter(item => item.description === "Gender");
            const addressTypeOptions = allCategoryDetails.filter(item => item.description === "Address Type");
            const countryOptions = allCategoryDetails.filter(item => item.description === "Country");

            const genderOption = genderOptions.find(option => option.title.toLowerCase() === sponsor.gender.toLowerCase());
            const addressTypeOption = addressTypeOptions.find(option => option.title.toLowerCase() === sponsor.addressType.toLowerCase());
            const countryOption = countryOptions.find(option => option.title.toLowerCase() === sponsor.country.toLowerCase());

            reset({
                ...sponsor,
                gender: genderOption ? genderOption.title : '',
                addressType: addressTypeOption ? addressTypeOption.lookUpCtgDetailId : '',
                country: countryOption ? countryOption.lookUpCtgDetailId : ''
            });
        }
    }, [sponsor, categoryData, reset]);

    const onSubmit = async (formData) => {
        try {
            const payload = {
                
                firstName: formData.firstName,
                middleName: formData.middleName,
                lastName: formData.lastName,
                gender: formData.gender,
                dob: formData.dob,
                cnic: formData.cnic,
                occupation: formData.occupation,
                address1: formData.address1,
                address2: formData.address2,
                postalCode: formData.postalCode,
                addressTypeId: formData.addressType,
                state: formData.state,
                city: formData.city,
                countryId: formData.country,
            };
            await updateSponsor({sponsorId, ...payload}).unwrap();
            alert('Sponsor updated successfully');
            navigate(`/sponsorprofile/${sponsorId ? `${sponsorId}` : ''}`)
            
        } catch (error) {
            console.error('Failed to update sponsor: ', error);
            alert('Failed to update sponsor');
        }
    };

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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('firstName')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('middleName')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('lastName')}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>Gender</Form.Label>
                                <Controller
                                    name='gender'
                                    control={control}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <Form.Control as='select' {...field}>
                                            <option value=''>Select Gender</option>
                                            {categoryData?.$values.filter(item => item.description === "Gender").map((option, index) => (
                                                <option key={index} value={option.title}>{option.title}</option>
                                            ))}
                                        </Form.Control>
                                    )}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('dob')}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>CNIC</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('cnic')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('occupation')}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>Address 1</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('address1')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('address2')}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('postalCode')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Address Type</Form.Label>
                                <Controller
                                    name='addressType'
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control as='select' {...field}>
                                             {categoryData?.$values.filter(item => item.description === "Address Type").map((option, index) => (
                                                <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                                            ))}
                                        </Form.Control>
                                    )}
                                />
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col}>
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('state')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type='text'
                                    {...register('city')}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Country</Form.Label>
                                <Controller
                                    name='country'
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control as='select' {...field}>
                                            {categoryData?.$values.filter(item => item.description === "Country").map((option, index) => (
                                                <option key={index} value={option.lookUpCtgDetailId}>{option.title}</option>
                                            ))}
                                        </Form.Control>
                                    )}
                                />
                            </Form.Group>
                        </Row>
                        <Button type='submit' className='btn btn-primary btn-color'>Update Profile</Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default SponsorUpdate;
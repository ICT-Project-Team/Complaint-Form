import React, { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import complain_type from '../data/complaint-type.json'
import faculty from '../data/faculty.json'
import department from '../data/department.json'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";

const FormComplain = () => {
    const navigate = useNavigate();
    const khmerMoulFont = { fontFamily: 'Moul, cursive' };
    const [isRevealIdentity, setIsRevealIdentity] = useState('អនាមិក');
    const [facultyId, setFacultyId] = useState(1);
    const [validated, setValidated] = useState(false);
    const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [typeOfComplain, setTypeOfComplain] = useState(1);
    const watchDepartment = watch('department_id', '1');
    const watchFields = watch(["department_id"]);

    const onSubmit = (data) => {
        // enable loading to start submit
        setLoading(true)
        setValidated(true);
        console.log(data);
        // append additional data
        data['reference'] = 'null'
        data['student_type'] = 'bachelor'
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(`${process.env.REACT_APP_CONTENT_BASE_URL}/api/send_complaint`, requestOptions).then(
            response => response.json()
        ).then(
            data => {
                if (data.status === 'ok') {
                    setLoading(false)
                    navigate('/submitted');
                } else {
                    alert('សំណើរនៃបណ្ដឹងបរាជ័យ!')
                }
            }
        )
    }

    useEffect(() => {
        // console.log(isRevealIdentity)
        setValue("department_id", `${department.type[facultyId - 1][0].id}`);
    }, [facultyId])

    const FormWrapper = styled.div`
      font-family: var(--primary-font);
      font-weight: 400;
      .container{
        max-width: 1000px;
      }
    `

    return (
        <div style={{fontFamily:"var(--primary-font)"}}>
            <div className='container-fluid'>
                <br />
                <Container className={"container"}>
                    <Row className='flex-xs-column-reverse flex-sm-column-reverse flex-lg-row'>
                        <Col xs={12} lg={12}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className='text-start'>
                                    <Form.Label
                                        style={{ marginRight: '1.5rem' }}
                                    >បណ្ដឹងធ្វើឡើងជាលក្ខណៈ&#42;</Form.Label>
                                    <div
                                        key={'radio'}
                                        className="mb-3">
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    {...register("identity", { required: true })}
                                                    type={'radio'}
                                                    label="អនាមិក"
                                                    name='identity'
                                                    value={'អនាមិក'}
                                                    id={`check-anonymous`}
                                                    checked={isRevealIdentity === 'អនាមិក' ? true : false}
                                                    onChange={(e) => setIsRevealIdentity(e.target.value)}
                                                >
                                                </Form.Check>
                                            </Col>
                                            <Col>
                                                <Form.Check
                                                    {...register("identity", { required: true })}
                                                    type={'radio'}
                                                    label="បង្ហាញអត្តសញ្ញាណ"
                                                    name='identity'
                                                    value={'បង្ហាញអត្តសញ្ញាណ'}
                                                    id={`check-identified`}
                                                    checked={isRevealIdentity === 'បង្ហាញអត្តសញ្ញាណ' ? true : false}
                                                    onChange={(e) => setIsRevealIdentity(e.target.value)}
                                                >
                                                </Form.Check>
                                            </Col>
                                        </Row>
                                        {/* <Form.Check
                            type={'radio'}
                            id={`check-api`}>
                            <Form.Check.Input
                                type={'radio'}
                                isValid />
                            <Form.Check.Label>តំណាងនិស្សិត</Form.Check.Label>
                        </Form.Check> */}
                                    </div>
                                </Form.Group>

                                <Row>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="facultyOrInstitute-selection text-start mb-3">
                                            <Form.Label>មហាវិទ្យាល័យ&#47;វិទ្យាស្ថាន&#42;</Form.Label>
                                            <Form.Select
                                                {...register("faculty_id")}
                                                onChange={(e) => setFacultyId(e.target.value)} // save faculty id
                                                className="faculty-selection mb-3">
                                                {
                                                    faculty.type.map(type => {
                                                        return <option key={type.name} value={type.id}>{type.name}</option>
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <Form.Group className="department-selection text-start mb-3">
                                            <Form.Label>ដេប៉ាតឺម៉ង់&#42;</Form.Label>
                                            <Form.Select
                                                {...register("department_id")}
                                                className="department-selection mb-3">
                                                {
                                                    department.type[facultyId - 1].map(type => {
                                                        return watchDepartment && <option key={type.name} value={type.id}>{type.name}</option>
                                                    })
                                                }
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <hr></hr>
                                {
                                    isRevealIdentity === 'បង្ហាញអត្តសញ្ញាណ' ? <>
                                        <h6 style={khmerMoulFont}>ពត័មានផ្ទាល់ខ្លួន</h6>
                                        <Row>
                                            <Col>
                                                <Form.Group className="name-input text-start mb-3">
                                                    <Form.Label>ខ្ញុំបាទ/នាងខ្ញុំ ឈ្មោះ&#42;</Form.Label>
                                                    <Form.Control
                                                        isInvalid={!!errors.student_name}
                                                        // pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
                                                        {...register("student_name", { required: true, pattern: /^([^0-9]*)$/g })} required type="text" placeholder="ឈ្មោះ" />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.student_name?.type === 'required' ? 'This field is required' : 'This name is invalid'}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="schoolId-input text-start mb-3">
                                                    <Form.Label>អត្តលេខ&#42;</Form.Label>
                                                    <Form.Control
                                                        {...register("student_id", { required: true, pattern: /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?-[A-Z][0-9]+(-(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g })}
                                                        required
                                                        type="text"
                                                        placeholder="Ex: 185-P28-0333"
                                                        isInvalid={!!errors.student_id}
                                                    />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.student_id?.type === 'required' ? 'This field is required' : 'This id is invalid'}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="text-start mb-3">
                                            <Form.Label
                                                style={{ marginRight: '1.5rem' }}
                                            >ភេទ&#42;</Form.Label>
                                            <div key={`inline-radio-gender`} className="mb-3">
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            {...register("gender", { required: true })}
                                                            className='flex-grow-1'
                                                            label="ប្រុស"
                                                            name="gender"
                                                            type={'radio'}
                                                            value="ប្រុស"
                                                            id={`inline-radio-gender-male`}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Form.Check
                                                            {...register("gender", { required: true })}
                                                            className='flex-grow-1'
                                                            label="ស្រី"
                                                            name="gender"
                                                            value="ស្រី"
                                                            type={'radio'}
                                                            id={`inline-radio-gender-female`}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="text-start">
                                            <Form.Label style={{ marginRight: '1.5rem' }}>ជានិស្សិតឆ្នាំទី៖&#42;</Form.Label>
                                            <div key={`inline-radio-student_year`} className="mb-3">
                                                <Row>
                                                    <Col>
                                                        <Form.Check
                                                            {...register("student_year", { required: true })}
                                                            label="1"
                                                            name="student_year"
                                                            type={'radio'}
                                                            value="1"
                                                            // checked
                                                            id={`inline-radio-1`}
                                                        />
                                                        <Form.Check
                                                            {...register("student_year", { required: true })}
                                                            label="2"
                                                            name="student_year"
                                                            type={'radio'}
                                                            id={`inline-radio-2`}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Form.Check
                                                            {...register("student_year", { required: true })}
                                                            label="3"
                                                            name="student_year"
                                                            type={'radio'}
                                                            value="3"
                                                            id={`inline-radio-3`}
                                                        />
                                                        <Form.Check
                                                            {...register("student_year", { required: true })}
                                                            inline
                                                            label="4"
                                                            name="student_year"
                                                            type={'radio'}
                                                            value="4"
                                                            id={`inline-radio-4`}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="text-start mb-3">
                                            <Form.Label>អាសយដ្ឋានបច្ចុប្បន្ន៖*</Form.Label>
                                            <Form.Control
                                                {...register('address', { required: true })}
                                                required
                                                type="text"
                                                isInvalid={!!errors.address}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.address?.type === 'required' ? 'This field is required' : ''}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Row>
                                            <Col>
                                                <Form.Group className="text-start mb-3">
                                                    <Form.Label>លេខទូរស័ព្ទ&#42;</Form.Label>
                                                    <Form.Control
                                                        required
                                                        {...register('phone_no', { required: true, pattern: /^[0-9]{9,15}$/g })}
                                                        type="text" placeholder="Ex: 012886342"
                                                        isInvalid={!!errors.phone_no}
                                                    />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.phoneNo?.type === 'required' ? 'This field is required!' : 'This phone number is invalid!'}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="text-start mb-3">
                                                    <Form.Label>សារអេឡិចត្រូនិច&#42;</Form.Label>
                                                    <Form.Control
                                                        {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                                                        required
                                                        isInvalid={!!errors.email}
                                                        type="text" placeholder="Ex: test@gmail.com" />
                                                    <Form.Control.Feedback type='invalid'>
                                                        {errors.email?.type === 'required' ? 'This field is required!' : 'This email is invalid!'}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <hr></hr>
                                    </> : null
                                }

                                <Form.Group className='text-start mb-3'>
                                    <Form.Label>ប្រភេទនៃបណ្ដឹងតវា៉&#42;</Form.Label>
                                    <Form.Select
                                        {...register("complain_sub_category_id")}
                                        className="complaint-type-selection mb-3"
                                        onChange={(e) => setTypeOfComplain(e.target.value)}>
                                        {
                                            complain_type.type.map((type) => {
                                                return <option key={type.name} value={type.id}>{type.name}</option>
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className={`text-start mb-3 ${typeOfComplain != 12 ? 'd-none' : ''}`} controlId="other">
                                    <Form.Label>ផេ្សងៗ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("other")}
                                    />
                                </Form.Group>

                                <Form.Group className="text-start mb-3">
                                    <Form.Label>កម្មវត្ថុ៖&#42;</Form.Label>
                                    <Form.Control
                                        {...register('objective', { required: true })}
                                        required
                                        type="text"
                                        isInvalid={!!errors.objective} />
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.objective?.type === 'required' ? 'This field is required!' : ''}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="text-start mb-3">
                                    <Form.Label>ខ្លឹមសារពាក្យបណ្ដឹងតវ៉ា&#42;</Form.Label>
                                    <Form.Control
                                        {...register('statement', { required: true })}
                                        required
                                        as="textarea"
                                        rows={6}
                                        type="text"
                                        isInvalid={!!errors.statement}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {errors.statement?.type === 'required' ? 'This field is required!' : ''}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formFileMultiple" className="text-start mb-3">
                                    <Form.Label>ឯកសារយោង</Form.Label>
                                    <Form.Control
                                        {...register('reference')}
                                        type="file"
                                        multiple />
                                </Form.Group>
                                <hr></hr>
                                <Button style={
                                    {
                                        fontFamily: 'Hanuman, serif',
                                        backgroundColor: '#831717',
                                    }
                                }
                                        className='submit-btn w-100' type="submit" variant="primary" size="md">
                                    {
                                        !loading ? 'ដាក់ស្នើ' : <span><Spinner animation="border" variant="light" size='sm' /> កំពុងស្នើ...</span>
                                    }
                                </Button>
                            </Form>
                        </Col>
                        {/*<Col xs={12} lg={4}>*/}
                        {/*    /!* Disclaimer *!/*/}
                        {/*    <Card*/}
                        {/*        className='text-start mb-3'*/}
                        {/*        style={{*/}
                        {/*            height: 'fit-content',*/}
                        {/*        }}>*/}
                        {/*        <Card.Body>*/}
                        {/*            <Card.Title className='fw-bold'>Frequently Asked</Card.Title>*/}
                        {/*            /!* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> *!/*/}
                        {/*            <Card.Text>*/}
                        {/*                A Disclaimer may be required if your website has access to external links, health information, fitness information, affiliate links, etc.*/}

                        {/*                Keep you business safe at all times and create a custom-made Disclaimer in less than 3 minutes to limit your liability related to the content you publish on your platform.*/}
                        {/*            </Card.Text>*/}
                        {/*            /!* <Card.Link href="#">Card Link</Card.Link>*/}
                        {/*        <Card.Link href="#">Another Link</Card.Link> *!/*/}
                        {/*        </Card.Body>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
                <br />
            </div>
        </div>
    )
}

export default FormComplain;
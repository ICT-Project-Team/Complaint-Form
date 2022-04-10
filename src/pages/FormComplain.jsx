import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

const FormComplain = () => {

    const khmerMoulFont = { fontFamily: 'Moul, cursive' };
    const [complainAs, setComplainAs] = useState('Non-Anonymous');
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setValidated(true);
        console.log(data)
    }
    return (
        <Container className="p-0">
            {/* <br />
            <h5 style={khmerMoulFont}>ពាក្យបណ្ដឹងតវ៉ា</h5>
            <br></br> */}

            <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col xs={12} sm={6}>
                        <Form.Group className="department-selection text-start mb-3">
                            <Form.Label>ដេប៉ាតឺម៉​ង់​&#42;</Form.Label>
                            <Form.Select className="department-selection mb-3">
                                <option>Bio-E</option>
                                <option>ITE</option>
                                <option>TEED</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Form.Group className="facultyOrInstitute-selection text-start mb-3">
                            <Form.Label>មហាវិទ្យាល័យ​&#47;វិទ្យាស្ថាន​&#42;</Form.Label>
                            <Form.Select>
                                <option>Faculty of Engineering</option>
                                <option>Faculty of Science</option>
                                <option>Institute of language</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="text-start mb-3">
                    <Form.Label>បណ្ដឹងធ្វើឡើងជាលក្ខណៈ​&#42;</Form.Label>
                    <Form.Select
                        defaultValue={complainAs}
                        onChange={(e) => setComplainAs(e.target.value)}
                        className="department-selection mb-3">
                        <option>Anonymous</option>
                        <option>Non-Anonymous</option>
                    </Form.Select>
                </Form.Group>
                <hr></hr>
                {
                    complainAs != 'Anonymous' ? <>
                        <h6 style={khmerMoulFont}>ពត័មានផ្ទាល់ខ្លួន</h6>
                        <Form.Group className="name-input text-start mb-3">
                            <Form.Label>ខ្ញុំបាទ/នាងខ្ញុំ ឈ្មោះ&#42;</Form.Label>
                            <Form.Control
                                isInvalid={!!errors.name}
                                // pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
                                {...register("name", { required: true, pattern: /^([^0-9]*)$/g})} required type="text" placeholder="ឈ្មោះ" />
                            <Form.Control.Feedback type='invalid'>
                                {errors.name?.type === 'required' ? 'This field is required' : 'This name is invalid'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="schoolId-input text-start mb-3">
                            <Form.Label>អត្តលេខ&#42;</Form.Label>
                            <Form.Control
                                {...register("id_number", { required: true, pattern: /([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?-[A-Z][0-9]+(-(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?/g })}
                                required
                                type="text"
                                placeholder="Ex: 185-P28-0333"
                                isInvalid={!!errors.id_number}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.id_number?.type === 'required' ? 'This field is required' : 'This id is invalid'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="text-start mb-3">
                            <Form.Label>ភេទ&#42;</Form.Label>
                            <Form.Select className="gender-selection mb-3">
                                <option>ប្រុស</option>
                                <option>ស្រី</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="text-start mb-3">
                            <Form.Label>ជានិស្សិតឆ្នាំទី៖&#42;</Form.Label>
                            <Form.Select className="year-selection mb-3">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="text-start mb-3">
                            <Form.Label>អាសយដ្ឋានបច្ចុប្បន្ន៖</Form.Label>
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
                                        {...register('phoneNo', { required: true, pattern: /^[0-9]{9,15}$/g })}
                                        type="text" placeholder="Ex: 012886342"
                                        isInvalid={!!errors.phoneNo}
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
                    </> : ''
                }

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
                <hr></hr>
                <Button style={
                        { 
                            fontFamily: 'Hanuman, serif', 
                            backgroundColor: '#831717',
                            
                        }
                    } 
                    className='submit-btn w-100' type="submit" variant="primary" size="md">
                    ដាក់ស្នើ
                </Button>
            </Form>
        </Container>
    )
}

export default FormComplain;
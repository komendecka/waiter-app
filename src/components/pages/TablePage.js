import {useState} from 'react';
import {getTableById} from "../../redux/tablesRedux";
import {Container, Button, Spinner, Form} from 'react-bootstrap';
import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'


const TablePage = () => {
    const {id} = useParams();
    const table = useSelector(state => getTableById(state, id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!table)
        return (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>)
    // return (
        // <Container>
        //     <h2 className={'my-2'}>Table {id}</h2>
        //     <Form>
        //         <Form.Group className="mb-3" controlId="formGroupEmail">
        //             <Form.Label>Status:</Form.Label>
        //             <Form.Select value={status}
        //                          onChange={(e) => setStatus(e.target.value)}
        //                          className="form-select" aria-label="Default select example">
        //                 {options.map((value) => (<option value={value} key={value}>{value}</option>))}
        //             </Form.Select>
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formGroupPassword">
        //             <Form.Label>People:</Form.Label>
        //             <Form.Control
        //                 type="number"
        //                 value={people}
        //                 onChange={(e) => setPeople(e.target.value)}
        //                 min="0"
        //                 max={maxPeople}
        //             />
        //         /
        //             <Form.Control
        //                 type="number"
        //                 value={maxPeople}
        //                 onChange={(e) => setMaxPeople(e.target.value)}
        //                 min="0"
        //                 max="10"
        //             />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formGroupPassword">
        //             <Form.Label>Bill:</Form.Label>
        //             <Form.Control className="my-2"
        //                           type="number"
        //                           value={bill}
        //                           onChange={(e) => setBill(e.target.value)}
        //                           min="0"
        //                           max="1000"
        //             />
        //         </Form.Group>
        //         <Button  variant="primary" type="submit">Update</Button>
        //     </Form>
        // </Container>
    // );
};
export default TablePage;
import getAllTables from '../../redux/tablesRedux';
import {Container, Button, ListGroup, Stack} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const Home = (id) => {
    const tables = useSelector(state => getAllTables(state, id));
    console.log(tables)
    return (
        <Container>
            <h1>LALALALAALA</h1>
            <h2 className='my-3'>All tables</h2>
            <ListGroup as="ol" numbered>
                {tables.map(table => (
                    <ListGroup.Item as="li">
                        <Stack direction="horizontal" gap={4}>
                            <h3>Table {table.id}</h3>
                            <Link className="ms-auto" to={`/table/${table.id}`}>
                                <Button variant='primary'>Show more</Button>
                            </Link>
                        </Stack>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};
export default Home;
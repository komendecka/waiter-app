import {Container} from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import TablePage from "./components/pages/TablePage";
import Error from "./components/pages/Error";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import {fetchTables} from "./redux/tablesRedux";
import {useDispatch} from "react-redux";
import {useEffect} from 'react';

const App = () => {

    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchTables()), [dispatch]);

    return (
        <main>
            <Container>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/table/:id' element={<TablePage/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
                <Footer/>
            </Container>
        </main>
    );
};

export default App;

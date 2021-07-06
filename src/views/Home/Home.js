import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <ItemListContainer />
        </Container>
    );
}

export default Home;

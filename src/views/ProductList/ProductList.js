import { Container } from "react-bootstrap";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function ProductList() {
    return (
        <Container className='mt-4'>
            <h1>Listado de productos</h1>
            <ItemListContainer />
        </Container>
    );
}

export default ProductList;
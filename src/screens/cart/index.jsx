// import Breadcrumb from "../../components/breadcrump/Breadcrump";
import Header from "../../components/header/Header";
import { CartContainer, Table, TableHead, TableRow, TableBody, TableCell, ProductImage, QuantityContainer, RemoveButton } from './styles';

function Cart() {
  const cartItems = [
    { id: 1, name: 'Nome do Produto', price: 150, quantity: 1, freight: 'FREE', subtotal: 150, image: '/path/to/image' },
    { id: 2, name: 'Nome do Produto', price: 150, quantity: 2, freight: 'FREE', subtotal: 300, image: '/path/to/image' },
    { id: 3, name: 'Nome do Produto', price: 150, quantity: 2, freight: 'R$ 55', subtotal: 300, image: '/path/to/image' },
  ];

  // const breadcrumbItems = [
  //   { label: 'Home', link: '/home' },
  //   { label: 'Carrinho' }
  // ];

  const handleRemove = (id) => {
    console.log('Remover item com ID:', id);
  };

  return (
    <>
      <Header />
      {/* <Breadcrumb items={breadcrumbItems}/> */}
      <CartContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>DETALHES DO PRODUTO</TableCell>
              <TableCell>PREÇO</TableCell>
              <TableCell>QUANTIA</TableCell>
              <TableCell>FRETE</TableCell>
              <TableCell>SUBTOTAL</TableCell>
              <TableCell>AÇÃO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <ProductImage src={item.image} alt={item.name} />
                  {item.name}
                </TableCell>
                <TableCell>R$ {item.price}/g</TableCell>
                <TableCell>
                  <QuantityContainer>
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </QuantityContainer>
                </TableCell>
                <TableCell>{item.freight}</TableCell>
                <TableCell>R$ {item.subtotal}</TableCell>
                <TableCell>
                  <RemoveButton onClick={() => handleRemove(item.id)}>
                    <i className="fas fa-trash"></i>
                  </RemoveButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CartContainer>
    </>
  );
}

export default Cart;

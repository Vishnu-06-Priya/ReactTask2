export default function Cart({ cartList, removeCart, incQuant, decQuant }) {
  return (
    <ol className="list-group list-group-numbered" >
      {cartList.map((item) => {
        return (
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.title}</div>
              Rs.{item.price} - {item.quantity}No's
              <button onClick={() => incQuant(item)} >+</button>
              <button onClick={() => decQuant(item)} >-</button>
            </div>
            <button onClick={() => removeCart(item)} className="badge bg-primary rounded-pill">X</button>
          </li>
        );
      }
      )}
    </ol>
  );
}
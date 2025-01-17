// import CartContext from "../store/CartContext";
// import UserProgress from "../store/UserProgress";
// import Modal from "../UI/Modal";
// import React, { useContext } from "react";
// import { currencyFormatter } from "../util/formatter";
// import Input from "../UI/Input";
// import Button from '../UI/Button'

// export default function Checkout() {
//     const cartCtx = useContext(CartContext)
//     const userProgressCtx = useContext(UserProgress)
//     const cartTotal = cartCtx.items.reduce((total, item) => {
//         return total + item.quantity * item.price;
//       }, 0);

//     function handleSubmit(event) {
//         event.preventDefault()
//         const fd = new FormData(event.target)
//         const customerData = Object.fromEntries(fd.entries());

//         fetch('http://localhost:3000/orders', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//              order : {
//                 items : cartCtx.items,
//                 customer : customerData
//              }
//             })
//           })

//     }

//     return <Modal open={userProgressCtx.progress === 'checkout'}>
//         <form onSubmit={handleSubmit}>
//             <h2>Checkout</h2>
//             <p>Your Total is : {currencyFormatter.format(cartTotal)}</p>
//             <Input label="Full Name" type="text" id="name"/>
//             <Input label="E-Mail" type="email" id="email"/>
//             <Input label="Street" type="text" id="street"/>

//             <div className="control-row">
//                 <Input label="Postal-Code" type="text" id="postal-code"/>
//                 <Input label="City" type="text" id="city"/>
//             </div>



//             <p className="modal-actions">
//                 <Button textOnly type="button" onClick={() => userProgressCtx.hideCheckout()}>Close</Button>
//                 <Button >Submit Order</Button>
//             </p>
//         </form>
//     </Modal>   
// }





import React, { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgress";
import Modal from "../UI/Modal";
import { currencyFormatter } from "../util/formatter";
import Input from "../UI/Input";
import Button from "../UI/Button";
import ThankYouModal from "./ThankYouModal";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    }).then(() => {
      setShowThankYouModal(true);
      userProgressCtx.hideCheckout();
    });
  }

  return (
    <>
      <Modal open={userProgressCtx.progress === "checkout"}>
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Your Total is: {currencyFormatter.format(cartTotal)}</p>
          <Input label="Full Name" type="text" id="name" />
          <Input label="E-Mail" type="email" id="email" />
          <Input label="Street" type="text" id="street" />
          <div className="control-row">
            <Input label="Postal-Code" type="text" id="postal-code" />
            <Input label="City" type="text" id="city" />
          </div>
          <p className="modal-actions">
            <Button textOnly type="button" onClick={() => userProgressCtx.hideCheckout()}>
              Close
            </Button>
            <Button type="submit">Submit Order</Button>
          </p>
        </form>
      </Modal>
      <ThankYouModal open={showThankYouModal} onClose={() => setShowThankYouModal(false)} />
    </>
  );
}

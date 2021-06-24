import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
import firebaseURL from "../url";

export const fetchCartData = () => {
  return (dispatch) => {
    fetch(`${firebaseURL}/cart.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        dispatch(cartActions.replaceCart(data));
      })
      .catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "fetching cart data failed",
          })
        );
      });
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    fetch(`${firebaseURL}/cart.json`, {
      method: "PUT",
      body: JSON.stringify({
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to send data");

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully",
          })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed",
          })
        );
      });
  };
};

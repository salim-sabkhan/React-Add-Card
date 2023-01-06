import { useState } from "react";
import Button from "@material-ui/core/Button";

export default function AddCart({ cartCount, setCartCount }) {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div>
        <Button
          type="button"
          className={
            add ? "btn btn-danger btn-lg" : "btn btn-primary btn-lg active"
          }
          onClick={() => {
            setCartCount(add ? cartCount - 1 : cartCount + 1);
            setAdd(!add);
          }}
        >
          {add ? "- Remove" : "+ Add"} Cart
        </Button>
      </div>
    </>
  );
}
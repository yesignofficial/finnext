"use client";
// import CartSheet from "@/components/cart/CartSheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { BetaMenuActive } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CartButton = ({ }) => {
  const { cartItems } = useCart();
  return (

    <Button
      className={cn(
        "fixed bottom-0 left-0 z-50 w-full h-11 bg-black text-white hover:bg-black",
        cartItems.length > 0 ? "flex" : "hidden",
      )}
      disabled={!BetaMenuActive}
    >
      <Link href="/cart">
        View Cart • {cartItems.length} Item{cartItems.length > 1 && "s"}
      </Link>
    </Button>

  );
};

export default CartButton;

import AddToCart from "@/app/components/AddToCart";

function ProductCard() {
  return (
    <div className='p-5 my-5 bg-sky-500 text-white text-xl hover:bg-sky-400 hover:cursor-pointer'>
      <AddToCart/>
    </div>
  );
}

export default ProductCard;
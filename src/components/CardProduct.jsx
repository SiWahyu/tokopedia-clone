export default function CardProduct({ product }) {
  return (
    <>
      <div className="card rounded-md max-w-[230px]">
        <figure>
          <img src={product.image} alt={product.name} className="rounded" />
        </figure>
        <div className="card-body p-0.5 py-2.5">
          <span className="block text-sm font-medium truncate overflow-hidden whitespace-nowrap max-w-full">
            {product.name}
          </span>
          <p className="text-sm font-extrabold text-black tracking-wide">
            {product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>
          <div className="text-xs my-1.5 -ml-0.5 text-gray-600">
            ⭐ 4.9 | {product.sold}+ terjual
          </div>
        </div>
      </div>
    </>
  );
}

const Icons = {
  mail: () => (
    <svg
      width={24}
      height={24}
      fill="var(--NN900, #1E2025)"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M20 4.25H4A1.76 1.76 0 0 0 2.25 6v12A1.76 1.76 0 0 0 4 19.75h16A1.76 1.76 0 0 0 21.75 18V6A1.76 1.76 0 0 0 20 4.25Zm-1 1.5-6.09 4.63a1.32 1.32 0 0 1-1.51 0L5.16 5.75H19Zm1 12.5H4a.25.25 0 0 1-.25-.25V6.57l6.71 5a2.86 2.86 0 0 0 3.29 0l6.5-4.94V18a.25.25 0 0 1-.25.25Z" />
    </svg>
  ),
  notif: () => (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M21 17.25h-1.25V11a7.76 7.76 0 0 0-6.06-7.56 2.12 2.12 0 0 0 .06-.44 1.75 1.75 0 0 0-3.5 0c.005.148.025.296.06.44A7.76 7.76 0 0 0 4.25 11v6.25H3a.75.75 0 1 0 0 1.5h5.25V19a3.75 3.75 0 0 0 7.5 0v-.25H21a.75.75 0 1 0 0-1.5ZM14.25 19a2.25 2.25 0 0 1-4.5 0v-.25h4.5V19Zm.75-1.75H5.75V11a6.25 6.25 0 0 1 12.5 0v6.25H15Z" />
    </svg>
  ),
  cart: () => (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M21.68 7.56a1.908 1.908 0 0 0-.35-.66 1.71 1.71 0 0 0-.58-.46 1.85 1.85 0 0 0-.75-.19H6.17a1.82 1.82 0 0 0-.57.13l-.06-.3a1.91 1.91 0 0 0-2-1.83h-1a.75.75 0 0 0 0 1.5h1c.42 0 .49.07.57.59l1.09 5.54.54 2.78A3.86 3.86 0 0 0 7 16.89a3.76 3.76 0 0 0 1.54.75A2 2 0 0 0 8 19a2 2 0 0 0 4 0 2 2 0 0 0-.46-1.25h2.88a2 2 0 1 0 3.06-.12 3.8 3.8 0 0 0 1.46-.7 3.71 3.71 0 0 0 1.32-2.1l1.47-6.46V8.3a1.68 1.68 0 0 0-.05-.74Zm-2.89 6.93a2.24 2.24 0 0 1-2.2 1.76H9.38a2.25 2.25 0 0 1-2.19-1.82L6 8.1A.62.62 0 0 1 6 8v-.14a.39.39 0 0 1 .1-.08H20a.28.28 0 0 1 .13 0 .389.389 0 0 1 .1.08c.03.03.05.069.06.11a.405.405 0 0 1 0 .11l-1.5 6.41Z" />
    </svg>
  ),
  search: ({ className }) => (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width={20}
      height={20}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="m20.53 19.46-4.4-4.4a7.33 7.33 0 1 0-1.07 1.06l4.41 4.41a.77.77 0 0 0 1.06 0 .77.77 0 0 0 0-1.07Zm-15.78-9a5.75 5.75 0 1 1 5.75 5.75 5.76 5.76 0 0 1-5.75-5.72v-.03Z" />
    </svg>
  ),
};

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4.5 py-0.5">
        <SearchInput />
        <div className="grid grid-cols-3 gap-3 order-1 mr-1.5">
          <Icons.mail />
          <Icons.notif />
          <Icons.cart />
        </div>
      </div>
    </header>
  );
};

const SearchInput = () => {
  return (
    <div className="flex items-center">
      <Icons.search className="absolute ml-2" />
      <input
        className="border w-[368px] h-[36px] ps-8 rounded-sm placeholder:text-[16.5px]"
        placeholder="Cari di Tokopedia"
      />
      <button className="-ml-11 font-bold text-[17.5px] mt-0.5">Cari</button>
    </div>
  );
};

export default Header;

const Icons = [
  {
    title: "Home",
    icon: (
      <img
        className="max-w-[24px]"
        alt="home-0-icon"
        src="https://images.tokopedia.net/img/iEWsxH/2024/4/21/9ffc8d54-59a2-4a15-84eb-183e7f9196a3.png?ect=4g"
      />
    ),
  },
  {
    title: "Feed",
    icon: (
      <img
        className="max-w-[24px]"
        alt="feed-1-icon"
        src="https://images.tokopedia.net/img/iEWsxH/2024/4/21/636aa35b-4ba1-4fab-9ea2-6d44ec2dd021.png?ect=4g"
      />
    ),
  },
  {
    title: "Promo",
    icon: (
      <img
        className="max-w-[24px]"
        alt="discopage-2-icon"
        src="https://images.tokopedia.net/img/iEWsxH/2025/2/24/0c25e039-6a3c-4d3a-9213-166ffdc81bca.png?ect=4g"
      />
    ),
  },
  {
    title: "Transaksi",
    icon: (
      <img
        className="max-w-[24px]"
        alt="transaction-3-icon"
        src="https://images.tokopedia.net/img/iEWsxH/2024/4/21/3b10de4f-3cf6-416e-ac51-b3cc73d92f35.png?ect=4g"
      />
    ),
  },
  {
    title: "Akun",
    icon: (
      <img
        className="max-w-[24px]"
        alt="me_page-4-icon"
        src="https://images.tokopedia.net/img/iEWsxH/2024/10/17/d2e92dec-ce25-4b93-95a9-39faca0b2aba.png?ect=4g"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto max-w-lg w-full bg-base-100  text-center  border-gray-200 border-t-2">
      <div className="grid grid-cols-5 px-1.5 place-items-center">
        {Icons.map((item, index) => (
          <div
            className="flex flex-col items-center text-neutral-500 gap-0.5 mt-1"
            key={index}
          >
            {item.icon}
            <span className="text-sm">
              <small>{item.title}</small>
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}

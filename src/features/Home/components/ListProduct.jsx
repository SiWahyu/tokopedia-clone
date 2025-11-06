import CardProduct from "../../../components/CardProduct";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      name: "Baju Kaos Anak 3D Mobile Legends ML - Alucard Pakaian Anak Laki - Laki Perempuan Kaos ML Premium  Usia 1-12 Tahun - S, Standar",
      price: 36900,
      image:
        "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/5c05adf04e9b4828b7100fcaf8cc5791~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1762465198&x-signature=fWjnA%2F0y86vvdq%2FOv%2FNEoqUbOuU%3D&x-signature-webp=ZpRA6R%2FUAbOPd%2BdtCJ8Mc%2FBL%2FOs%3D]",
      images: [],
      sold: 10,
      stock: 40,
      description:
        "Baju Kaos Anak 3D Mobile Legends ML Pakaian Anak Laki - Laki Perempuan Kaos ML Premium  Usia 1-12 Tahun",
    },
    {
      id: 2,
      name: 'ADVAN Workplus AMD Ryzen 5 6600H 14" FHD IPS 16GB/1TB Laptop Notebook Free Windows 11 Upgradeable - 512 GB',
      price: 11400,
      image:
        "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/11/15/f1f17bfa-819b-4588-a27e-c2069ee760be.png~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1762465958&x-signature=UqlZTJNnefyuMzQS9nGMil0lajM%3D&x-signature-webp=BFwPYNrlaidrXzE2gnHhrznXmi8%3D",
      images: [],
      sold: 700,
      stock: 100,
      description:
        "ADVAN Workplus menggunakan AMD Ryzen 5 6600H ditujukan untuk professional, sangat nyaman digunakan untuk bekerja, programing, content creator, IT, main game, serta mendukung semua kegiatan Anda.\n\nADVAN Workplus dapat di buka 180° sehingga dapat digunakan untuk berbagai aktifitas seperti presentasi dengan mudah dengan rekan kerja anda di dalam 1 meja.",
      store_name: "ADVAN INDONESIA",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 px-4.5">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

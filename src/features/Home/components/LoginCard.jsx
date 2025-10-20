export default function LoginCard() {
  return (
    <div className="flex justify-between gap-4 px-5.5 pt-2" id="header2">
      <div className=" flex gap-2 items-start w-fit">
        <img
          src="https://p16-images-comn-sg.tokopedia-static.net/tos-alisg-i-zr7vqa5nfb-sg/img/home/login_widget/toped_login.png~tplv-zr7vqa5nfb-image.webp?ect=4g"
          alt=""
          className="pt-0.5"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Hai, Topper!</span>
          <small className="font-extralight">Akses semua fitur, yuk~</small>
        </div>
      </div>
      <div className="masuk place-self-center">
        <button className="bg-[#00aa5b] px-[27px] text-white py-[5px] rounded-lg text-[15px] font-bold">
          Masuk
        </button>
      </div>
    </div>
  );
}

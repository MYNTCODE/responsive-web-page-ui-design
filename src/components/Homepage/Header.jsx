import ShoppingBagWindow from "../ShoppingBagWindow";
import "../../../src/App.css";

function Header() {
  return (
    <>
      <div className="h-[80vh] relative mb-10">
        <div className="img-head mt-[5%] lg:mt-[6%] mx-[5%] h-[80vh] lg:h-[60vh] absolute w-[90%] rounded-3xl border-solid border-[4px] bg-red-200 border-blue-800">
          <p
            title="Product"
            className="text-[50px] relative z-10 lg:text-[100px] text-left ml-[5%] lg:ml-[3%] text-white font-bold"
          >
            PRODUCT
          </p>
          <div className="blue-bg-box lg:absolute right-0 bottom-0  lg:w-[90%] lg:h-[85%] lg:rounded-br-2xl bg-blue-800 z-0">
            <img
              title="Product"
              className="box lg:relative lg:h-[80%] top-14 left-[70%] "
              src="https://cdn.discordapp.com/attachments/1144637676016898219/1166085150048788490/tshirt.png?ex=6549346c&is=6536bf6c&hm=df07b2a41c909b3e7d69cc545d4a045af76fcd491b382893e830186ad6816b7c&"
              alt="Product"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

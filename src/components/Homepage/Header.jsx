import ShoppingBagWindow from "../ShoppingBagWindow";
import "../../../src/App.css";

function Header() {
  return (
    <>
      <div className="h-[80vh]">
        <div className="img-head mt-[5%] lg:mt-[6%] mx-[5%] h-[80vh] lg:h-[60vh] absolute w-[90%]  rounded-3xl  border-solid border-[4px] bg-red-200 border-blue-800">
          <p className=" text-[50px] relative z-10 lg:text-[100px] text-left ml-[5%] lg:ml-[3%]  text-white font-bold">
            PRODUCT
          </p>
          <div className=" relative flex lg:w-[90%] lg:h-[85%] lg:left-[10%] lg:top-[-15%] rounded-br-2xl bg-blue-800 z-0">
            <img
              className="box  lg:relative left-[70%] lg:top-[5%] lg:h-[90%]"
              src="https://cdn.discordapp.com/attachments/1144637676016898219/1166085150048788490/tshirt.png?ex=6549346c&is=6536bf6c&hm=df07b2a41c909b3e7d69cc545d4a045af76fcd491b382893e830186ad6816b7c&"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

function Footer() {
  return (
    <>
      <div className=" h-[8vh] lg:h-[15vh] bg-red-200 p-4 flex-row pt-8">
        <h1 className=" hidden lg:block font-bold text-[18px] text-blue-950">
          Contact
        </h1>
        <div className="flex justify-center space-x-3 lg:pt-2 ">
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <img
              title="twitter"
              alt="twitter"
              className="h-[80%]"
              src="https://cdn.discordapp.com/attachments/1144637676016898219/1166730328682008646/twitter.png?ex=654b8d4b&is=6539184b&hm=550e3991880500317a50938cfb410db62169005b2934f72696ac859e065c52c7&"
            ></img>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              title="facebook"
              alt="facebook"
              className="h-[80%]"
              src="https://cdn.discordapp.com/attachments/1144637676016898219/1166730148566007868/facebook_1.png?ex=654b8d20&is=65391820&hm=adf96ee7a98aceac746f5e8f4f784032355675859ac7ff0f828d7c5ee882c43e&"
            ></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              title="instagram"
              alt="instagram"
              className="h-[80%]"
              src="https://cdn.discordapp.com/attachments/1144637676016898219/1166729921628999760/instagram_3.png?ex=654b8cea&is=653917ea&hm=f291eb2c1f6e0b6f93d3470a680c0df93647476959b3bf3392cb76309890e90f&"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;

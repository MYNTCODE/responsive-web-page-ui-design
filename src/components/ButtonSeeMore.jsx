import { Link } from "react-router-dom";

function ButtonSeeMore() {
  return (
    <>
      <Link to={`/collections`} autoFocus={false}>
        <div className="">
          <h1
            title="See more collection"
            className="text-black font-extrabold hover:underline hover:cursor-pointer "
          >
            See more collection ...
          </h1>
        </div>
      </Link>
    </>
  );
}
export default ButtonSeeMore;

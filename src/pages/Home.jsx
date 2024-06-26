import AllTodos from "../components/AllTodos";
import Greeting from "../components/ui/Greeting";
import { getCookie } from "../utils/utils";
import SignIn from "./SignIn";

export default function Home() {

 
  const access_token = getCookie("accessToken");
  return (
    <div className=" w-full relative min-h-screen pb-60 bg-[#1a0a36] ">
      <div className="max-w-[1300px] px-4">
        <div>
          {/* Nav bar */}
          <Greeting />

          {/* display all todos */}
          {access_token ? (
            <AllTodos />
          ) : (
            <SignIn></SignIn>
          )}

          {/* <div
            onClick={() => navigate("/addTodo")}
            className=" fixed bottom-8 w-44 h-12 max-sm:w-44 max-sm:h-12 cursor-pointer bg-white text-purple font-bold grid place-items-center hover:bg-purple-800 hover:text-white left-[50%] -translate-x-[50%]"
          >
            <RxPlus className=" text-4xl max-sm:text-3xl plusIcon" />
            <div className="flex items-center space-x-2">
              <RxPlus /> 
              <button>Create Todo</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

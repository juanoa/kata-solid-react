import {Button} from "./button.tsx";
import {FaHandPeace} from "react-icons/fa";
import {Header} from "./header.tsx";
import {OtherHeaderStuff} from "./other-header-stuff.tsx";

export const OpenClosedPage = () => {
  return (
    <div className="flex flex-col">
      {/*TODO: Make Header extensible*/}
      <Header />
      <div className="px-10 bg-gray-100 pb-5">
        <OtherHeaderStuff />
      </div>

      <div className="flex flex-col gap-10 p-20">
        {/*TODO: Make the Button extensible*/}
        <Button label="First button" icon={<FaHandPeace />} />
        <Button colorLabel="red" label="Second button" icon={<FaHandPeace />} />
      </div>
    </div>
  )
};

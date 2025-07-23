import { CONTACT } from "../constants";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 text-white">
      <h1 className="my-20 text-4xl text-center font-semibold text-purple-500">
        Contact
      </h1>
      <div className="w-full flex flex-col items-center space-y-4">
        <h6 className="text-base text-neutral-400">{CONTACT.address}</h6>
        <p className="cursor-pointer hover:text-purple-400 transition duration-200">
          {CONTACT.phoneNo}
        </p>
        <div
          className="flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded cursor-pointer hover:bg-neutral-800 transition duration-200"
          onClick={() => {
            window.location.href = `mailto:${CONTACT.email}`;
          }}
        >
          <MdEmail className="text-purple-500 text-xl" />
          <span className="text-sm text-purple-400">{CONTACT.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

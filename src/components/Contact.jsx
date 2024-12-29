import { CONTACT } from "../constants";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-20 text-4xl text-center">Contact</h1>
      <div className="w-full justify-center text-center">
        <h6 className="mb-5">{CONTACT.address}</h6>
        <p className="cursor-pointer hover:opacity-9">{CONTACT.phoneNo}</p>
        <p
          className="w-full flex flex-wrap justify-center text-center"
          onClick={() => {
            window.location.href = `mailto:${CONTACT.email}`;
          }}
        >
          <MdEmail className="text-2xl" />
          <span className="cursor-pointer text-purple-500 px-2 rounded bg-neutral-900">
            {CONTACT.email}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;

import { IoIosCall, IoIosMail } from 'react-icons/io';

export default function Contact() {
  return (
    <div className="flex flex-col items-center pb-10" id="contact">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <div className="flex gap-8">
        <div className="flex items-center flex-col font-semibold">
          <IoIosMail className="text-4xl" />
          emir.isikdev@gmail.com
        </div>
        <div className="flex items-center flex-col font-semibold">
          <IoIosCall className="text-4xl" />
          +90 555 057 88 34
        </div>
      </div>
    </div>
  );
}

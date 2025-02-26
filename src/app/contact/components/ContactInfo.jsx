import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import SocialIcons from "./SocialIcons";

const ContactInfo = () => {
  const items = [
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Słodka Pętelka",
      content: "ul. Mąkołowska 150 <br /> 43-100 Tychy",
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Telefon",
      content: "+48 789 741 964",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "zamowienia@slodkapetelka.pl",
    },
  ];

  return (
    <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg h-fit">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4 ">
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
      <SocialIcons />
    </div>
  );
};

export default ContactInfo;

import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import PageHeader from "./components/PageHeader";

const ContactPage = () => {
  return (
    <div className="min-h-screen mt-32 mb-16 rounded-lg shadow-xl bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <PageHeader
          title="Skontaktuj się z nami"
          description="Masz pytania lub chcesz złożyć zamówienie? Jesteśmy do Twojej dyspozycji!"
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;

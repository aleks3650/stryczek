const ContactForm = () => {
  return (
    <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6 w-full">
      <div>
        <label className="block text-gray-700 mb-2">Adres email</label>
        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Wiadomość</label>
        <textarea
          rows="6"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required></textarea>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Wyślij wiadomość
      </button>
    </form>
  );
};

export default ContactForm;

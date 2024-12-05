import "modern-normalize";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <h1 style={{ margin: 15 }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

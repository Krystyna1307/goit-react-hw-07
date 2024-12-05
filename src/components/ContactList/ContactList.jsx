import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const selectContacts = useSelector((state) => state.filters.filters.name);

  const selectNameFilter = contacts.filter((item) =>
    item.name.toLowerCase().includes(selectContacts.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {selectNameFilter.map((item) => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

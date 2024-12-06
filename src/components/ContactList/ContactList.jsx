import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectFilteredContacts);

  const selectNameFilter = contacts.filter((item) =>
    item.name.toLowerCase().includes(filtered.toLowerCase())
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

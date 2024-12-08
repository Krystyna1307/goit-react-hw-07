import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const selectFilteredName = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {selectFilteredName.map((item) => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

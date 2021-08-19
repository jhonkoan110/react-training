import { ContactItem } from './Contact/ContactItem';
import classes from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <h2 className={classes['contacts__heading']}>Contacts</h2>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <button className={classes['contacts__view-all-button']}>View All</button>
    </div>
  );
};

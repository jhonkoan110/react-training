import { RequestItem } from './RequestItem/RequestItem';
import classes from './Requests.module.scss';

export const Requests = () => {
  return <div className={classes.requests}>
    <h2 className={classes['requests__heading']}>Requests</h2>
    <RequestItem />
    <RequestItem />
  </div>;
};

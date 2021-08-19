import classes from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={classes.menu}>
      <div className={classes['menu__item']}>
        <div className={classes['menu__item__icon-home'] + ' ' + classes['menu__item__icon']} />
        <div className={classes['menu__item__title']}>Feed</div>
      </div>
      <div className={classes['menu__item']}>
        <div className={classes['menu__item__icon-explore'] + ' ' + classes['menu__item__icon']}></div>
        <div className={classes['menu__item__title']}>Explore</div>
      </div>
      <div className={classes['menu__item']}>
        <div className={classes['menu__item__icon-favorites'] + ' ' + classes['menu__item__icon']}></div>
        <div className={classes['menu__item__title']}>My favorites</div>
      </div>
      <div className={classes['menu__item']}>
        <div className={classes['menu__item__icon-direct'] + ' ' + classes['menu__item__icon']}></div>
        <div className={classes['menu__item__title']}>Direct</div>
      </div>
      <div className={classes['menu__item']}>
        <div className={classes['menu__item__icon-stats'] + ' ' + classes['menu__item__icon']}></div>
        <div className={classes['menu__item__title']}>Stats</div>
      </div>
      <div className={classes['menu__item']}>
        <div className={classes['menu__item__icon-settings'] + ' ' + classes['menu__item__icon']}></div>
        <div className={classes['menu__item__title']}>Settings</div>
      </div>
    </div>
  );
};

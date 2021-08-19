import classes from './CreateNewPostButton.module.scss';

export const CreateNewPostButton = () => {
  return (
    <button className={classes['create-new-post-button']}>
      <div className={classes['create-new-post-button__icon']} />
      <div className={classes['create-new-post-button__text']}>Create new post</div>
    </button>
  );
};

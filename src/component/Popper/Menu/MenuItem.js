import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

// function MenuItem({ data }) {
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        // <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
export default MenuItem;
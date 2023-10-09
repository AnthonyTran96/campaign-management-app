import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <button className={cx('submit-btn')}>SUBMIT</button>
        </div>
    );
}

export default Header;

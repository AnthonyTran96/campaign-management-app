import classNames from 'classnames/bind';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('info')}>
            <input className={cx('info-input')} type="text" placeholder="Tên chiến dịch" />
            <input className={cx('info-input')} type="text" placeholder="Mô tả" />
        </div>
    );
}

export default Info;

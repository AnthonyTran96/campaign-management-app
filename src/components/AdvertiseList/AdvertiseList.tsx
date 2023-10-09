import classNames from 'classnames/bind';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import styles from './AdvartiseList.module.scss';

const cx = classNames.bind(styles);

function AdvertiseList() {
    return (
        <div className={cx('list')}>
            <h2>DANH SÁCH QUẢNG CÁO</h2>
            <table className={cx('adv-table')}>
                <tr className={cx('adv-row')}>
                    <th>
                        <input className={cx('status-check-input')} type="checkbox" />
                    </th>
                    <th>
                        <p>Tên quảng cáo*</p>
                    </th>
                    <th>
                        <p>Số lượng*</p>
                    </th>
                    <th>
                        <button className={cx('add-adv')}>
                            <PlusIcon className={cx('add-adv-icon')} />
                            <p>Thêm</p>
                        </button>
                    </th>
                </tr>
                <tr className={cx('adv-row')}>
                    <td>
                        <input className={cx('status-check-input')} type="checkbox" />
                    </td>
                    <td>
                        <input type="text" className={cx('adv-input')} value="Quảng cáo 1" />
                    </td>
                    <td>
                        <input type="text" className={cx('adv-input')} value={0} />
                    </td>
                    <td>
                        <button>
                            <TrashIcon className={cx('delete-adv')} />
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default AdvertiseList;

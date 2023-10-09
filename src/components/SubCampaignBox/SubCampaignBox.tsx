import classNames from 'classnames/bind';
import { CheckIcon } from '@heroicons/react/24/solid';
import styles from './SubCampaignBox.module.scss';

const cx = classNames.bind(styles);

interface BoxProps {
    name: string;
    quantity: number;
    status: boolean;
}

function SubCampaignBox({ name, quantity, status }: BoxProps) {
    return (
        <div className={cx('box')}>
            <div className={cx('box-group')}>
                <span className={cx('box-name')}>{name}</span>
                <span className={cx('box-status')}>
                    <CheckIcon />
                </span>
            </div>
            <div className={cx('box-quantity')}>{quantity}</div>
        </div>
    );
}

export default SubCampaignBox;

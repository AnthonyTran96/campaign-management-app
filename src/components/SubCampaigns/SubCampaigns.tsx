import classNames from 'classnames/bind';
import { PlusIcon } from '@heroicons/react/24/solid';
import styles from './SubCampaigns.module.scss';
import SubCampaignBox from '../SubCampaignBox/SubCampaignBox';
import AdvertiseList from '../AdvertiseList';

const cx = classNames.bind(styles);

function SubCampaign() {
    return (
        <div className={cx('sub')}>
            <div className={cx('sub-boxs')}>
                <button className={cx('add-box')}>
                    <PlusIcon className={cx('add-box-plus')} />
                </button>
                <SubCampaignBox name="Chiến dịch con 1" quantity={0} status={true} />
                <SubCampaignBox name="Chiến dịch con 1" quantity={0} status={true} />
                <SubCampaignBox name="Chiến dịch con 1" quantity={0} status={true} />
            </div>
            <div className={cx('sub-info')}>
                <div className={cx('sub-group1')}>
                    <input type="text" className={cx('sub-info-input')} placeholder="Tên chiến dịch con" />
                    <div className={cx('sub-info-status')}>
                        <div className={cx('status-check')}>
                            <input className={cx('status-check-input')} type="checkbox" />
                        </div>
                        <div>Đang hoạt động</div>
                    </div>
                </div>
                <div className={cx('sub-group2')}>
                    <AdvertiseList />
                </div>
            </div>
        </div>
    );
}

export default SubCampaign;

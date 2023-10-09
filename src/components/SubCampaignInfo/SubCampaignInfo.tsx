import { useContext, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import AdvertiseList from '../AdvertiseList';
import styles from './SubCampaignInfo.module.scss';
import { GlobalStateType, GlobalStateContext } from '../GlobalStateProvider';
import { setSubCampaignName, setSubCampaignStatus } from '../../reducer/actions';

const cx = classNames.bind(styles);

function SubCampaignInfo({ index }: { index: number }) {
    const { state, dispatch } = useContext<GlobalStateType>(GlobalStateContext);
    const subCampaign = state.subCampaigns[index];

    const handleSubNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSubCampaignName(index.toString(), e.target.value));
        console.log(state);
    };

    const handleSubStatusChange = () => {
        dispatch(setSubCampaignStatus(index.toString()));
        console.log(state.subCampaigns[index]);
    };

    return (
        <div className={cx('sub-info')}>
            <div className={cx('sub-group1')}>
                <input
                    type="text"
                    className={cx('sub-info-input')}
                    value={subCampaign.name}
                    onChange={handleSubNameChange}
                    placeholder="Tên chiến dịch con"
                />
                <div className={cx('sub-info-status')} onClick={handleSubStatusChange}>
                    <div className={cx('status-check')}>
                        <input
                            className={cx('status-check-input')}
                            checked={subCampaign.status}
                            type="checkbox"
                            placeholder="Đang hoạt động"
                        />
                    </div>
                    <div>Đang hoạt động</div>
                </div>
            </div>
            <div className={cx('sub-group2')}>
                <AdvertiseList />
            </div>
        </div>
    );
}

export default SubCampaignInfo;

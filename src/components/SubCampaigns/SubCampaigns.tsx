import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import { PlusIcon } from '@heroicons/react/24/solid';
import styles from './SubCampaigns.module.scss';
import SubCampaignBox from '../SubCampaignBox/SubCampaignBox';
import { GlobalStateType, GlobalStateContext } from '../GlobalStateProvider';
import SubCampaignInfo from '../SubCampaignInfo';
import { addSubCampaign } from '../../reducer/actions';

const cx = classNames.bind(styles);

function SubCampaign() {
    const { state, dispatch } = useContext<GlobalStateType>(GlobalStateContext);
    const [subIndex, setSubIndex] = useState(0);
    const subCampaigns = state.subCampaigns;

    const handleAddSubCampaign = () => {
        dispatch(addSubCampaign());
        setSubIndex(subCampaigns.length);
    };

    const handleClickBox = (index: number) => {
        setSubIndex(index);
    };

    return (
        <div className={cx('sub')}>
            <div className={cx('sub-boxs')}>
                <button className={cx('add-box')} onClick={handleAddSubCampaign}>
                    <PlusIcon className={cx('add-box-plus')} />
                </button>
                {subCampaigns.map((sub, index) => {
                    const quantity = sub.ads.reduce((total, ad) => total + ad.quantity, 0);
                    return (
                        <div key={index} onClick={() => handleClickBox(index)}>
                            <SubCampaignBox
                                name={sub.name}
                                quantity={quantity}
                                status={sub.status}
                                checked={index === subIndex}
                            />
                        </div>
                    );
                })}
            </div>
            <SubCampaignInfo index={subIndex} />
        </div>
    );
}

export default SubCampaign;

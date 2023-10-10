import { useContext } from 'react';
import { GlobalStateType, GlobalStateContext } from '../../../components/GlobalStateProvider';
import { Campaign, SubCampaign } from '../../../reducer/states';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Action, setVar } from '../../../reducer/actions';

const cx = classNames.bind(styles);

interface Data extends Omit<Campaign, 'varEnable'> {}

const handleCheckData = (data: Data, dispatch: React.Dispatch<Action>) => {
    const campaignName: string = data.information.name;
    let hasError = false;

    const handleSetVar = () => {
        hasError = true;
        window.alert('Vui lòng điền đúng và đầy đủ thông tin');
        dispatch(setVar(true));
    };

    if (campaignName === '') {
        handleSetVar();
        return;
    }

    const subCampaigns: SubCampaign[] = data.subCampaigns;

    subCampaigns.forEach((sub) => {
        if (hasError) return;
        if (sub.name.length === 0) {
            handleSetVar();
            return;
        }
        sub.ads.forEach((ad) => {
            if (hasError) return;
            if (ad.quantity === 0 || ad.name.length === 0) {
                handleSetVar();
                return;
            }
        });
        if (hasError) return;
    });

    if (hasError) return;

    const campaign = {
        campaign: data,
    };
    const message = `Thêm thành công chiến dịch\n${JSON.stringify(campaign)}`;
    alert(message);
};

function Header() {
    const { state, dispatch } = useContext<GlobalStateType>(GlobalStateContext);
    const { varEnable, ...data } = state;
    return (
        <div className={cx('header')}>
            <button className={cx('submit-btn')} onClick={() => handleCheckData(data, dispatch)}>
                SUBMIT
            </button>
        </div>
    );
}

export default Header;

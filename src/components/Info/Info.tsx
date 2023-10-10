import { useContext, ChangeEvent } from 'react';
import { GlobalStateContext, GlobalStateType } from '../GlobalStateProvider';
import { setCampaignName, setCampaignDescribe } from '../../reducer/actions';
import classNames from 'classnames/bind';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function Info() {
    const { state, dispatch } = useContext<GlobalStateType>(GlobalStateContext);
    const name = state.information.name;
    const describe = state.information.describe;
    const varEnable = state.varEnable;

    const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCampaignName(e.target.value));
    };

    const handleDescribeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCampaignDescribe(e.target.value));
    };

    return (
        <div className={cx('info')}>
            <input
                className={cx('info-input', { var: varEnable && name.length === 0 })}
                value={name}
                onChange={handleNameInputChange}
                type="text"
                placeholder="Tên chiến dịch *"
            />
            <input
                className={cx('info-input')}
                value={describe}
                onChange={handleDescribeInputChange}
                type="text"
                placeholder="Mô tả"
            />
        </div>
    );
}

export default Info;

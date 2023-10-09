import { useState } from 'react';
import classNames from 'classnames/bind';
import Info from '../../../components/Info';
import SubCampaigns from '../../../components/SubCampaigns';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    enum Title {
        INFORMATION = 'THÔNG TIN',
        SUBCAMPAIGNS = 'CHIẾN DỊCH CON',
    }
    const [content, setContent] = useState(Title.INFORMATION);
    return (
        <div className={cx('content')}>
            <div className={cx('content-box')}>
                <div className={cx('content-header')}>
                    <div
                        className={cx('title', { active: content === Title.INFORMATION })}
                        onClick={() => setContent(Title.INFORMATION)}
                    >
                        THÔNG TIN
                    </div>
                    <div
                        className={cx('title', { active: content === Title.SUBCAMPAIGNS })}
                        onClick={() => setContent(Title.SUBCAMPAIGNS)}
                    >
                        CHIẾN DỊCH CON
                    </div>
                </div>
                <div className={cx('content-body')}>{content === Title.INFORMATION ? <Info /> : <SubCampaigns />}</div>
            </div>
        </div>
    );
}

export default Content;

import { useContext, ChangeEvent, useState } from 'react';
import classNames from 'classnames/bind';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import styles from './AdvartiseList.module.scss';
import { GlobalStateType, GlobalStateContext } from '../GlobalStateProvider';
import { addAdv, deleteAds, setAdvName, setAdvQuantity } from '../../reducer/actions';

const cx = classNames.bind(styles);

function AdvertiseList({ index }: { index: number }) {
    const { state, dispatch } = useContext<GlobalStateType>(GlobalStateContext);
    const [deleteIndexs, setDeleteIndexs] = useState<string[]>([]);
    const ads = state.subCampaigns[index].ads;
    const varEnable = state.varEnable;

    const handleAddAdv = (index: number) => {
        dispatch(addAdv(index.toString()));
        console.log(deleteIndexs);
    };

    const handleAdvNameChange = (e: ChangeEvent<HTMLInputElement>, adIndex: number) => {
        dispatch(setAdvName(index.toString(), adIndex.toString(), e.target.value));
    };

    const handleAdvQuantityChange = (e: ChangeEvent<HTMLInputElement>, adIndex: number) => {
        if (!isNaN(+e.target.value)) {
            dispatch(setAdvQuantity(index.toString(), adIndex.toString(), +e.target.value));
        }
    };

    const handleDeleteAdvBtn = (adIndex: number) => {
        if (!deleteIndexs.includes(adIndex.toString())) dispatch(deleteAds(index.toString(), [adIndex.toString()]));
    };

    const handleDeleteCheck = (index: number) => {
        const deleteNum = deleteIndexs.findIndex((num) => num === index.toString());
        if (deleteNum === -1) {
            setDeleteIndexs([...deleteIndexs, index.toString()]);
        } else {
            const newArr = [...deleteIndexs];
            newArr.splice(deleteNum, 1);
            setDeleteIndexs(newArr);
        }
    };

    const handleHeaderCheckbox = () => {
        if (deleteIndexs.length === ads.length) setDeleteIndexs([]);
        else {
            const newDeleteIndexs = [];
            for (let i = 0; i < ads.length; i++) {
                newDeleteIndexs[i] = i.toString();
            }
            setDeleteIndexs(newDeleteIndexs);
        }
    };

    const handleDeleteHeaderBtn = () => {
        dispatch(deleteAds(index.toString(), deleteIndexs));
        setDeleteIndexs([]);
    };

    return (
        <div className={cx('list')}>
            <h2>DANH SÁCH QUẢNG CÁO</h2>
            <table className={cx('adv-table')}>
                <thead>
                    <tr className={cx('adv-row')}>
                        <th>
                            <input
                                className={cx('status-check-input')}
                                checked={deleteIndexs.length === ads.length && ads.length > 0}
                                type="checkbox"
                                readOnly
                                placeholder="checkbox"
                                onClick={handleHeaderCheckbox}
                            />
                        </th>
                        <th>
                            {deleteIndexs.length === 0 ? (
                                <p>Tên quảng cáo*</p>
                            ) : (
                                <TrashIcon onClick={handleDeleteHeaderBtn} className={cx('delete-adv')} />
                            )}
                        </th>
                        <th>{deleteIndexs.length === 0 && <p>Số lượng*</p>}</th>
                        <th>
                            <button className={cx('add-adv')} onClick={() => handleAddAdv(index)}>
                                <PlusIcon className={cx('add-adv-icon')} />
                                <p>Thêm</p>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ads.map((ad, adIndex) => (
                        <tr
                            key={adIndex}
                            className={cx('adv-row', { lock: deleteIndexs.includes(adIndex.toString()) })}
                        >
                            <td>
                                <input
                                    className={cx('status-check-input')}
                                    checked={deleteIndexs.includes(adIndex.toString())}
                                    onClick={() => handleDeleteCheck(adIndex)}
                                    type="checkbox"
                                    readOnly
                                    placeholder="checkbox"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className={cx('adv-input', { var: varEnable && ad.name.length === 0 })}
                                    onChange={(e) => handleAdvNameChange(e, adIndex)}
                                    value={ad.name}
                                    placeholder="Quảng cáo"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className={cx('adv-input', { var: varEnable && ad.quantity === 0 })}
                                    onChange={(e) => handleAdvQuantityChange(e, adIndex)}
                                    value={ad.quantity}
                                    placeholder="Số lượng"
                                />
                            </td>
                            <td>
                                <TrashIcon className={cx('delete-adv')} onClick={() => handleDeleteAdvBtn(adIndex)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdvertiseList;

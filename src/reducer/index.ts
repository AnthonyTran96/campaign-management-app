import { Action } from './actions';
import { Campaign } from './states';
import {
    SET_CAMPAIGN_NAME,
    SET_CAMPAIGN_DESCRIPE,
    ADD_SUBCAMPAIGN,
    SET_SUBCAMPAIGN_NAME,
    SET_SUBCAMPAIGN_STATUS,
    ADD_ADV,
    SET_ADV_NAME,
    SET_ADV_QUANTITY,
    DELETE_ADS,
} from './constants';

//reducer
const reducer = (state: Campaign, action: Action) => {
    switch (action.type) {
        case SET_CAMPAIGN_NAME: {
            const { name } = action.payload;
            const newState: Campaign = {
                ...state,
                information: {
                    ...state.information,
                    name,
                },
            };
            return newState;
        }
        case SET_CAMPAIGN_DESCRIPE: {
            const { describe } = action.payload;
            const newState: Campaign = {
                ...state,
                information: {
                    ...state.information,
                    describe,
                },
            };
            return newState;
        }

        case ADD_SUBCAMPAIGN: {
            const subCampaignNum = state.subCampaigns.length;
            const newState: Campaign = {
                ...state,
                subCampaigns: [
                    ...state.subCampaigns,
                    {
                        name: `Chiến dịch con ${subCampaignNum + 1}`,
                        status: true,
                        ads: [
                            {
                                name: 'Quảng cáo 1',
                                quantity: 0,
                            },
                        ],
                    },
                ],
            };
            return newState;
        }
        case SET_SUBCAMPAIGN_NAME: {
            const { subCampaignId, name } = action.payload;
            const newState: Campaign = { ...state };
            newState.subCampaigns[subCampaignId].name = name;
            return newState;
        }
        case SET_SUBCAMPAIGN_STATUS: {
            const { subCampaignId } = action.payload;
            const newState: Campaign = { ...state };
            newState.subCampaigns[subCampaignId].status = !newState.subCampaigns[subCampaignId].status;
            return newState;
        }
        case ADD_ADV: {
            const { subCampaignId } = action.payload;
            const adsLength = state.subCampaigns[subCampaignId].ads.length;
            const newState: Campaign = { ...state };
            newState.subCampaigns[subCampaignId].ads.push({
                name: `Quảng cáo ${adsLength + 1}`,
                quantity: 0,
            });
            return newState;
        }
        case SET_ADV_NAME: {
            const { subCampaignId, advId, name } = action.payload;
            const newState: Campaign = { ...state };
            newState.subCampaigns[subCampaignId].ads[advId].name = name;
            return newState;
        }
        case SET_ADV_QUANTITY: {
            const { subCampaignId, advId, quantity } = action.payload;
            const newState: Campaign = { ...state };
            newState.subCampaigns[subCampaignId].ads[advId].quantity = quantity;
            return newState;
        }
        case DELETE_ADS: {
            const { subCampaignId, advIds } = action.payload;
            const newState: Campaign = { ...state };
            const subCampaign = newState.subCampaigns[subCampaignId];
            subCampaign.ads = subCampaign.ads.filter((_, index) => !advIds.includes(index.toString()));
            return newState;
        }
        default:
            throw new Error('invalid action');
    }
};

export default reducer;

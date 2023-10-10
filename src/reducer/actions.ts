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

export interface Action {
    type: string;
    payload?: any;
}

export const setCampaignName = (name: string) => {
    const action: Action = {
        type: SET_CAMPAIGN_NAME,
        payload: { name },
    };
    return action;
};

export const setCampaignDescribe = (describe: string) => {
    const action: Action = {
        type: SET_CAMPAIGN_DESCRIPE,
        payload: { describe },
    };
    return action;
};

export const addSubCampaign = () => {
    const action: Action = {
        type: ADD_SUBCAMPAIGN,
    };
    return action;
};

export const setSubCampaignName = (subCampaignId: string, name: string) => {
    const action: Action = {
        type: SET_SUBCAMPAIGN_NAME,
        payload: {
            subCampaignId,
            name,
        },
    };
    return action;
};

export const setSubCampaignStatus = (subCampaignId: string) => {
    const action: Action = {
        type: SET_SUBCAMPAIGN_STATUS,
        payload: {
            subCampaignId,
        },
    };
    return action;
};

export const addAdv = (subCampaignId: string) => {
    const action: Action = {
        type: ADD_ADV,
        payload: {
            subCampaignId,
        },
    };
    return action;
};

export const setAdvName = (subCampaignId: string, advId: string, name: string) => {
    const action: Action = {
        type: SET_ADV_NAME,
        payload: {
            subCampaignId,
            advId,
            name,
        },
    };
    return action;
};

export const setAdvQuantity = (subCampaignId: string, advId: string, quantity: number) => {
    const action: Action = {
        type: SET_ADV_QUANTITY,
        payload: {
            subCampaignId,
            advId,
            quantity,
        },
    };
    return action;
};

export const deleteAds = (subCampaignId: string, advIds: string[]) => {
    const action: Action = {
        type: DELETE_ADS,
        payload: {
            subCampaignId,
            advIds,
        },
    };
    return action;
};

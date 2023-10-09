import { Action } from './actions';

//define types
export interface Information {
    name: string;
    describe?: string;
}

export interface Ad {
    name: string;
    quantity: number;
}

export interface SubCampaign {
    name: string;
    status: boolean;
    ads: Ad[];
}

export interface Campaign {
    information: Information;
    subCampaigns: SubCampaign[];
}

//initState
export const initState: Campaign = {
    information: {
        name: '',
    },
    subCampaigns: [
        {
            name: 'Chiến dịch con 1',
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

//reducer
const reducer = (state: Campaign, action: Action) => {
    switch (action.type) {
        default:
            throw new Error('invalid action');
    }
};

export default reducer;

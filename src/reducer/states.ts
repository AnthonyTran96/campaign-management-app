//define types
export interface Information {
    name: string;
    describe: string;
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
    varEnable: boolean;
}

//initState
export const initState: Campaign = {
    information: {
        name: '',
        describe: '',
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
    varEnable: false,
};

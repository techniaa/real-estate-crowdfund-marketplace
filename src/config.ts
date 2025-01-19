import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "RealEstate Crowdfund Marketplace",
    chainId: "andromeda-1",
    createdDate: "2025-01-19T19:01:01.148Z",
    modifiedDate: "2025-01-19T19:01:01.148Z",
    id: "realestate-crowdfund",
    collections: [
        {
            crowdfund: "andr14t43lfjm69ngc0mem4fxrwezdpyc520gaercfhwd3d5c5pvta70srcwncn",
            cw721: "andr1mf8h3eykx7ly5k7tl8w44qlwt3w8pp862k3fjemsw9730ffp32xqvh0d0g",
            name: "Metropolis Assets",
            type: ICollectionType.CROWDFUND,
            id: "metropolis-assets",
            featured: "MetropolisToken1",
        },
        {
            crowdfund: "andr14t43lfjm69ngc0mem4fxrwezdpyc520gaercfhwd3d5c5pvta70srcwncn",
            cw721: "andr1mf8h3eykx7ly5k7tl8w44qlwt3w8pp862k3fjemsw9730ffp32xqvh0d0g",
            name: "Downtown Crowdfund Collection",
            type: ICollectionType.CROWDFUND,
            id: "downtown-crowdfund",
            featured: "DowntownToken1",
        },
        {
            crowdfund: "andr14t43lfjm69ngc0mem4fxrwezdpyc520gaercfhwd3d5c5pvta70srcwncn",
            cw721: "andr1mf8h3eykx7ly5k7tl8w44qlwt3w8pp862k3fjemsw9730ffp32xqvh0d0g",
            name: "Pacific Villas Collection",
            type: ICollectionType.CROWDFUND,
            id: "pacific-villas",
            featured: "PacificVillasToken1",
        },
        {
            exchange: "andr1lez7hflelwkzdzgh3njxxjqukgh7ff7aruws4k",
            cw20: "andr1cw20k93j24zae3dgdugsqjkk9ez6hmg23c8gku4zygmvewn39x8sfmrw4k",
            name: "RealEstate Token Exchange",
            type: ICollectionType.EXCHANGE,
            id: "exchange-realestate",
        },
    ],
};

export default CONFIG;

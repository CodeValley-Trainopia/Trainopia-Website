

     interface Gallery {
        data_size: string;
        data_src: string;
        href: string;
    }

     interface Datum {
        name: string;
        id_tab: string;
        id_no_tab: string;
        data_bs_toggle: string;
        className: string;
        Gallery: Gallery[];
    }

    export  interface Idata {
        name: string;
        id: string;
        data_bs_target: string;
        aria_controls: string;
        data: Datum[];
    }




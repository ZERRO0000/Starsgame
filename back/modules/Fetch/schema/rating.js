const rating = {
    _id: {},
    PLOT: {
        type: 'Rating',
        require: true,
        default: 0,
        loc: 'Сюжет',
        sort: true,
        editable: true,
        searchable: false
    },
    GRAPHIC: {
        type: 'Rating',
        require: true,
        default: 0,
        loc: 'Графика',
        sort: true,
        editable: true,
        searchable: false
    },
    DETAILING: {
        type: 'Rating',
        require: true,
        default: 0,
        loc: 'Графика',
        sort: true,
        editable: true,
        searchable: false
    }
};

export default rating;
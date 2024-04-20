const rating = {
    _id: {},
    PLOT: {
        type: 'String',
        require: true,
        default: 'none',
        loc: "Сюжет",
        sort: true,
        editable: true
    },
    graphic: {
        type: 'DBRef',
        require: false,
        default: 'none',
        loc: "Графика",
        sort: true,
        editable: true,
        collection: 'graphics'
    },
    DETAILING: {
        type: 'DBRef',
        require: false,
        default: 'none',
        loc: "Детализация",
        sort: true,
        editable: true,
        collection: 'detailings'
    },
};

export default rating;
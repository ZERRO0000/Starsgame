const rating = {
    _id: {},
    PLOT: {
        type: 'String',
        require: true,
        default: 'none',
        loc: "Сюжет",
        sort: true,
        editable: true,
    },
    GRAPHIC: {
        type: 'StarRating',
        require: true,
        default: 'none',
        loc: "Графика",
        sort: true,
        editable: true,
        collection: 'graphics'
    },
    DETAILING: {
        type: 'String',
        require: true,
        loc: "Детализация",
        sort: true,
        editable: true,
        collection: 'detailings',
    },
};

export default rating;
const rating = {
    _id: {},
    PLOT: {
        type: 'String',
        require: true,
        default: 'none',
        loc: "Сюжет",
        sort: true,
        editable: true,
        fortawesome: true
    },
    GRAPHIC: {
        type: 'String',
        require: true,
        default: 'none',
        loc: "Графика",
        sort: true,
        editable: true,
        collection: 'graphics',
        fortawesome: true
    },
    DETAILING: {
        type: 'String',
        require: true,
        default: 'none',
        loc: "Детализация",
        sort: true,
        editable: true,
        collection: 'detailings',
        fortawesome: true
    },
};

export default rating;
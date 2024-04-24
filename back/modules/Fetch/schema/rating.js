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
<<<<<<< Updated upstream
    GRAPHIC: {
        type: 'String',
        require: true,
=======
    graphic: {
        type: 'String',
        require: false,
>>>>>>> Stashed changes
        default: 'none',
        loc: "Графика",
        sort: true,
        editable: true,
        collection: 'graphics',
    },
    DETAILING: {
        type: 'String',
<<<<<<< Updated upstream
        require: true,
=======
        require: false,
>>>>>>> Stashed changes
        default: 'none',
        loc: "Детализация",
        sort: true,
        editable: true,
        collection: 'detailings',
    },
};

export default rating;
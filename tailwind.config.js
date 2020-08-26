module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {
            fontFamily: {
            'header': ['Pacifico'],
            'body': ['Roboto'],
            'cursive': ['Pacifico'],
            },
            height: {
                'card': '40vh',
            },
            minHeight: {
                'card': '40vh',
            },
            animation: {
                'spin-slow': 'spin 4s linear infinite'
            }
        }
        
    }
};
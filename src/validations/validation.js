import * as Yup from "yup"

Yup.setLocale({
    mixed: {
        requried: 'Bu alanın doldurulması zorunludur.',
        oneOf: 'Bu alanı işaretlemek zorundasınız'
    },
    string: {
        min: 'Bu alan ${min} karakter olmalıdır.',
        max: 'Bu alan ${max} karakter olmalıdır.'
    }
})

export default Yup
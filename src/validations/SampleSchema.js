import * as Yup from "yup"

export const SampleSchema = Yup.object().shape({
    code: Yup.string().min(6).required()
})


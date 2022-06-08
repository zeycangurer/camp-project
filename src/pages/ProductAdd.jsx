import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {

    const initialValues = { name: "", unitPrice: 10 }
    const schema = Yup.object({
        name: Yup.string().required("Ürün adı zorunludur"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur")
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className='ui form'>
                <KodlamaIoTextInput name='name' placeholder='Ürün Adı' />
                <KodlamaIoTextInput name='unitPrice' placeholder='Ürün Fiyatı' />
                <Button color='green' type='submit'>Kaydet</Button>
            </Form>
        </Formik>
    )
}

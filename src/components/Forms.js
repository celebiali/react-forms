import React from 'react';
import {Formik,Form,Field} from "formik";
import Input from "./Input";
import File from "./File";
function Forms(props) {

    return (
        <div>
           <h3>İletişim</h3>
            <Formik initialValues={{name:'Ali',about:'reqwfds',accept:false,gender:2,avatar:'',skills:['html','css']}} onSubmit={values => {
                console.log(values)}}>
            {({values}) => (
                <Form className="p-6">
                    <Input label="Ad-Soyad"  name="name"/> <br/>
                    <Field component="textarea" name="about"/> <br/>
                    <label>
                        <Field type="checkbox" name="accept"/>
                        Kuralları kabul ediyorum!
                    </label> <br/>
                    <Field component="select" name="gender">
                        <option value="php">PHP</option>
                        <option value="css">CSS</option>
                        <option value="js">Javascript</option>
                        <option value="html">HTML</option>
                    </Field> <br/>
                    <File label="Avatar" name="avatar"/>
                    <button disabled={!values.accept} type="submit">Gönder</button>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default Forms;
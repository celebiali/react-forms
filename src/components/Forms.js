import React from 'react';
import {Formik,Form,Field} from "formik";
import Input from "./Input";
import File from "./File";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import {ContactSchema} from "../validations/ContactSchema";

function Forms(props) {

    return (
        <div>
           <h3>İletişim</h3>
            <Formik initialValues={{name:'',about:'',accept:false,gender:2,avatar:'',skills:[],level:''}} onSubmit={values => {
                console.log(values)}}
            validationSchema={ContactSchema}>
            {({values}) => (
                <Form className="p-4 m-4 grid gap-y-4 border rounded">
                    <Input label="Ad-Soyad"  name="name"/>
                    <Textarea label="about" rows={6} name="about"/>
                    <Checkbox label="Kuralları kabul ediyorum!" name="accept"/>
                    <Select label="Cinsiyet" name="gender"  options={[
                         {key:1,value:'Kadın'},
                        {key:2,value:'Erkek'},
                    ]} />
                    <File label="Avatar" name="avatar"/>
                    <Radio label="Seviyenizi seçiniz" name="level" options={[
                        {key:'jr',value:'Jr. Developer'},
                        {key:'sr',value:'Sr. Developer'},
                        {key:'ninja',value:'Ninja'},
                    ]}/>
                    <button className="h-10 rounded bg-black text-sm text-white px-5 "   type="submit">Gönder</button>
                    <pre>{JSON.stringify(values,null,2)}</pre>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default Forms;
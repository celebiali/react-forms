import React from 'react';
import {Formik,Form,Field} from "formik";
import Input from "./Input";
import File from "./File";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import {SampleSchema} from "../validations/SampleSchema";

function Forms(props) {

    return (
        <div>
           <h3>İletişim</h3>
            <Formik initialValues={{name:'Ali',about:'reqwfds',accept:false,gender:2,avatar:'',skills:['html','css'],level:'sr'}} onSubmit={values => {
                console.log(values)}}>
            {({values}) => (
                <Form className="p-4 m-4 grid gap-y-4 border rounded">
                    <Input label="Ad-Soyad"  name="name"/> <br/>
                    <Textarea label="about" rows={6} name="about"/> <br/>
                    <Checkbox label="Kuralları kabul ediyorum!" name="accept"/> <br/>
                    <Select label="Cinsiyet" name="gender" original={true} options={[
                        {key:1,value:'Kadın'},
                        {key:2,value:'Erkek'},
                    ]} />
                        <br/>
                    <File label="Avatar" name="avatar"/>
                    <Radio label="Seviyenizi seçiniz" name="level" options={[
                        {key:'jr',value:'Jr. Developer'},
                        {key:'sr',value:'Sr. Developer'},
                        {key:'ninja',value:'Ninja'},
                    ]}/>
                    <button className="h-10 rounded bg-black text-sm text-white px-5 " disabled={!values.accept} type="submit">Gönder</button>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default Forms;